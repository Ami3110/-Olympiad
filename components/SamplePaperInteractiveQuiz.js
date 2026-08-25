"use client";

import { useState, useMemo } from "react";

// Robust regex parser to extract structured questions, options, and answer keys from raw HTML
function parseSamplePaperHtml(html) {
  if (!html) return [];

  const paperBlocks = [];
  const blockRegex = /<div class="paper-block"[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/div>\s*(?=(?:<!--|<div class="paper-block"|$))/gi;
  let blockMatch;

  while ((blockMatch = blockRegex.exec(html)) !== null) {
    const id = blockMatch[1];
    const blockContent = blockMatch[2];

    // Eyebrow
    const eyebrowMatch = /<div class="p-eyebrow">([\s\S]*?)<\/div>/i.exec(blockContent);
    const eyebrow = eyebrowMatch ? eyebrowMatch[1].replace(/<[^>]+>/g, "").trim() : "";

    // Title
    const titleMatch = /<h3>([\s\S]*?)<\/h3>/i.exec(blockContent);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").trim() : "Sample Paper";

    // Answer Key (e.g. "1-b, 2-c, 3-b, 4-b, 5-b...")
    const answerKeyMatch = /<div class="answer-key">[\s\S]*?<b>Answer Key:<\/b>([\s\S]*?)<\/div>/i.exec(blockContent);
    const answerKeyMap = {};
    if (answerKeyMatch) {
      const keyStr = answerKeyMatch[1].trim();
      const pairs = keyStr.split(",");
      pairs.forEach((pair) => {
        const parts = pair.trim().split("-");
        if (parts.length === 2) {
          const qNum = parseInt(parts[0].trim(), 10);
          const ansKey = parts[1].trim().toLowerCase();
          if (!isNaN(qNum)) {
            answerKeyMap[qNum] = ansKey;
          }
        }
      });
    }

    // Questions
    const questions = [];
    const qItemRegex = /<li class="q-item">([\s\S]*?)<\/li>/gi;
    let qMatch;
    let qIndex = 1;

    while ((qMatch = qItemRegex.exec(blockContent)) !== null) {
      const qContent = qMatch[1];

      // Question Text
      const qTextMatch = /<div class="q-text">[\s\S]*?<span class="q-num">(\d+)\.?<\/span>([\s\S]*?)<\/div>/i.exec(qContent);
      let qNum = qIndex;
      let qText = "";

      if (qTextMatch) {
        qNum = parseInt(qTextMatch[1], 10);
        qText = qTextMatch[2].replace(/<[^>]+>/g, "").trim();
      } else {
        const cleanText = qContent.split("<ul")[0].replace(/<[^>]+>/g, "").trim();
        qText = cleanText.replace(/^\d+[\.\)]\s*/, "");
      }

      // Options (li with a) b) c) d))
      const options = [];
      const optRegex = /<li>\s*([a-d])\)\s*([\s\S]*?)<\/li>/gi;
      let optMatch;

      while ((optMatch = optRegex.exec(qContent)) !== null) {
        options.push({
          key: optMatch[1].toLowerCase(),
          text: optMatch[2].replace(/<[^>]+>/g, "").trim(),
        });
      }

      const correctKey = answerKeyMap[qNum] || "";

      questions.push({
        num: qNum,
        text: qText,
        options,
        correctKey,
      });

      qIndex++;
    }

    if (questions.length > 0) {
      paperBlocks.push({
        id,
        title,
        eyebrow,
        questions,
      });
    }
  }

  return paperBlocks;
}

export default function SamplePaperInteractiveQuiz({
  contentHtml,
  groupName,
  groupClasses,
  subjectName,
}) {
  const papers = useMemo(() => parseSamplePaperHtml(contentHtml), [contentHtml]);

  const [activePaperIndex, setActivePaperIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [paperIdx]: { [qNum]: 'a' | 'b' | 'c' | 'd' } }
  const [isSubmitted, setIsSubmitted] = useState({}); // { [paperIdx]: boolean }
  const [showWarning, setShowWarning] = useState(false);

  // Fallback if parsing failed
  if (!papers || papers.length === 0) {
    return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
  }

  const currentPaper = papers[activePaperIndex] || papers[0];
  const currentPaperAnswers = userAnswers[activePaperIndex] || {};
  const currentPaperSubmitted = isSubmitted[activePaperIndex] || false;

  const totalQuestions = currentPaper.questions.length;
  const answeredCount = Object.keys(currentPaperAnswers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  // Handle Option Selection
  const handleSelectOption = (qNum, optKey) => {
    if (currentPaperSubmitted) return; // Locked after submission
    setUserAnswers((prev) => ({
      ...prev,
      [activePaperIndex]: {
        ...(prev[activePaperIndex] || {}),
        [qNum]: optKey,
      },
    }));
    setShowWarning(false);
  };

  // Submit test
  const handleSubmitTest = () => {
    if (answeredCount < totalQuestions && !showWarning) {
      setShowWarning(true);
      return;
    }
    setIsSubmitted((prev) => ({
      ...prev,
      [activePaperIndex]: true,
    }));
    setShowWarning(false);
  };

  // Retake test
  const handleRetakeTest = () => {
    setUserAnswers((prev) => ({
      ...prev,
      [activePaperIndex]: {},
    }));
    setIsSubmitted((prev) => ({
      ...prev,
      [activePaperIndex]: false,
    }));
    setShowWarning(false);
  };

  // Calculate score & mistakes
  let correctCount = 0;
  let mistakeCount = 0;
  let unattemptedCount = 0;

  if (currentPaperSubmitted) {
    currentPaper.questions.forEach((q) => {
      const studentAns = currentPaperAnswers[q.num];
      if (!studentAns) {
        unattemptedCount++;
      } else if (studentAns.toLowerCase() === q.correctKey.toLowerCase()) {
        correctCount++;
      } else {
        mistakeCount++;
      }
    });
  }

  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="quiz-container">
      {/* Paper Header / Tab Switcher */}
      <div className="quiz-header-card">
        <div className="quiz-meta-row">
          <div>
            <div className="quiz-eyebrow">
              {groupName} &middot; {groupClasses}
            </div>
            <h2 className="quiz-subject-title">{subjectName}</h2>
          </div>

          {/* Paper Selector Tabs */}
          {papers.length > 1 && (
            <div className="quiz-tabs-wrap">
              {papers.map((p, idx) => (
                <button
                  key={p.id || idx}
                  type="button"
                  onClick={() => {
                    setActivePaperIndex(idx);
                    setShowWarning(false);
                  }}
                  className={`quiz-tab-btn ${activePaperIndex === idx ? "active" : ""}`}
                >
                  {p.title}
                  {isSubmitted[idx] && <span className="quiz-tab-check">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Live Progress Bar (During Quiz) */}
        {!currentPaperSubmitted ? (
          <div className="quiz-progress-bar-wrap">
            <div className="quiz-progress-info">
              <span className="quiz-progress-label">
                <strong>{currentPaper.title}</strong> &middot; Interactive Mock Test
              </span>
              <span className="quiz-progress-count">
                <strong>{answeredCount}</strong> of {totalQuestions} answered ({progressPercent}%)
              </span>
            </div>
            <div className="quiz-progress-track">
              <div
                className="quiz-progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        ) : (
          /* Score & Performance Dashboard (After Submission) */
          <div className="quiz-results-banner">
            <div className="quiz-score-badge">
              <div className="quiz-score-num">
                {correctCount} <span className="quiz-score-total">/ {totalQuestions}</span>
              </div>
              <div className="quiz-score-tag">
                {scorePercentage >= 80
                  ? "🌟 Genius Level Distinction!"
                  : scorePercentage >= 60
                  ? "👍 Great Attempt! Above Average"
                  : "📚 Good Practice! Keep Learning"}
              </div>
            </div>

            <div className="quiz-stats-grid">
              <div className="quiz-stat-card stat-correct">
                <span className="stat-icon">✓</span>
                <div className="stat-val">{correctCount}</div>
                <div className="stat-name">Correct</div>
              </div>
              <div className="quiz-stat-card stat-mistake">
                <span className="stat-icon">✗</span>
                <div className="stat-val">{mistakeCount}</div>
                <div className="stat-name">Mistakes</div>
              </div>
              {unattemptedCount > 0 && (
                <div className="quiz-stat-card stat-skipped">
                  <span className="stat-icon">⚪</span>
                  <div className="stat-val">{unattemptedCount}</div>
                  <div className="stat-name">Skipped</div>
                </div>
              )}
              <div className="quiz-stat-card stat-accuracy">
                <span className="stat-icon">🎯</span>
                <div className="stat-val">{scorePercentage}%</div>
                <div className="stat-name">Accuracy</div>
              </div>
            </div>

            <div className="quiz-result-actions">
              <button
                type="button"
                onClick={handleRetakeTest}
                className="btn-quiz-retake"
              >
                🔄 Retake Test
              </button>
              {papers.length > 1 && activePaperIndex === 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setActivePaperIndex(1);
                    setShowWarning(false);
                  }}
                  className="btn-quiz-next"
                >
                  Attempt Sample Paper 2 →
                </button>
              )}
              <a
                href="https://forms.gle/KvAiXYv1CRr5E1Y17"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-quiz-register"
              >
                Register for Official Olympiad ↗
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Warning Toast if unattempted */}
      {showWarning && (
        <div className="quiz-warning-banner">
          <span>⚠️ You have answered <strong>{answeredCount} of {totalQuestions}</strong> questions. Submit anyway to check your score?</span>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted((prev) => ({ ...prev, [activePaperIndex]: true }));
              setShowWarning(false);
            }}
            className="quiz-warning-confirm"
          >
            Yes, Submit Now
          </button>
        </div>
      )}

      {/* Questions List */}
      <div className="quiz-questions-list">
        {currentPaper.questions.map((q) => {
          const studentAns = currentPaperAnswers[q.num];
          const isCorrect = currentPaperSubmitted && studentAns && studentAns.toLowerCase() === q.correctKey.toLowerCase();
          const isMistake = currentPaperSubmitted && studentAns && studentAns.toLowerCase() !== q.correctKey.toLowerCase();
          const isUnattempted = currentPaperSubmitted && !studentAns;

          return (
            <div
              key={q.num}
              className={`quiz-q-card ${
                currentPaperSubmitted
                  ? isCorrect
                    ? "q-card-correct"
                    : isMistake
                    ? "q-card-mistake"
                    : "q-card-unattempted"
                  : ""
              }`}
            >
              {/* Question Header & Status */}
              <div className="quiz-q-header">
                <div className="quiz-q-num-badge">Q{q.num}</div>
                <div className="quiz-q-statement">{q.text}</div>

                {/* Result Feedback Badge */}
                {currentPaperSubmitted && (
                  <div className="quiz-q-status-badge">
                    {isCorrect && <span className="badge-correct">✓ Correct (+1)</span>}
                    {isMistake && <span className="badge-mistake">✗ Mistake</span>}
                    {isUnattempted && <span className="badge-skipped">⚪ Not Answered</span>}
                  </div>
                )}
              </div>

              {/* 4 Interactive Option Cards */}
              <div className="quiz-options-grid">
                {q.options.map((opt) => {
                  const isSelected = studentAns === opt.key;
                  const isThisCorrect = currentPaperSubmitted && opt.key.toLowerCase() === q.correctKey.toLowerCase();
                  const isThisWrongSelected = currentPaperSubmitted && isSelected && !isThisCorrect;

                  let optClass = "quiz-opt-card";
                  if (!currentPaperSubmitted) {
                    if (isSelected) optClass += " opt-selected";
                  } else {
                    if (isThisCorrect) {
                      optClass += " opt-result-correct";
                    } else if (isThisWrongSelected) {
                      optClass += " opt-result-wrong";
                    } else {
                      optClass += " opt-result-dim";
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      disabled={currentPaperSubmitted}
                      onClick={() => handleSelectOption(q.num, opt.key)}
                      className={optClass}
                    >
                      <span className="opt-key-circle">
                        {opt.key.toUpperCase()}
                      </span>
                      <span className="opt-text">{opt.text}</span>

                      {/* Result Marker Icons */}
                      {currentPaperSubmitted && (
                        <span className="opt-result-marker">
                          {isThisCorrect && "✓ Correct Answer"}
                          {isThisWrongSelected && "✗ Your Choice"}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Detailed Explanation / Mistake Diagnostic */}
              {currentPaperSubmitted && isMistake && (
                <div className="quiz-mistake-explanation">
                  <div className="mistake-label">
                    💡 <strong>Mistake Analysis:</strong> You selected <strong>{studentAns.toUpperCase()}</strong>. The correct answer is <strong>{q.correctKey.toUpperCase()}</strong>.
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Submit Action Bar */}
      {!currentPaperSubmitted && (
        <div className="quiz-bottom-bar">
          <div className="quiz-bottom-summary">
            <span>Progress: <strong>{answeredCount}</strong> / {totalQuestions} answered</span>
          </div>
          <button
            type="button"
            onClick={handleSubmitTest}
            className="btn-quiz-submit"
          >
            Submit Test &amp; View Detailed Results 📊
          </button>
        </div>
      )}
    </div>
  );
}
