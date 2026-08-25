"use client";

import { useState, useMemo } from "react";

// Robust parser to extract structured questions, MCQ options (a,b,c,d), and answer keys from raw HTML
function parseSamplePaperHtml(html) {
  if (!html) return [];

  const paperBlocks = [];
  const rawBlocks = html.split(/<div\s+class="paper-block"/i).slice(1);

  for (const rawBlock of rawBlocks) {
    const blockContent = '<div class="paper-block"' + rawBlock;

    // Extract ID
    const idMatch = /id="([^"]*)"/i.exec(blockContent);
    const id = idMatch ? idMatch[1] : "";

    // Extract Eyebrow
    const eyebrowMatch = /<div\s+class="p-eyebrow">([\s\S]*?)<\/div>/i.exec(blockContent);
    const eyebrow = eyebrowMatch ? eyebrowMatch[1].replace(/<[^>]+>/g, "").trim() : "";

    // Extract Title
    const titleMatch = /<h3>([\s\S]*?)<\/h3>/i.exec(blockContent);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").trim() : "Sample Paper";

    // Extract Answer Key (e.g. "1-b, 2-c, 3-b, 4-b, 5-b...")
    const answerKeyMatch = /<b>Answer Key:<\/b>([\s\S]*?)<\/div>/i.exec(blockContent);
    const answerKeyMap = {};
    if (answerKeyMatch) {
      const keyStr = answerKeyMatch[1].trim();
      const pairs = keyStr.split(/[,;\s]+/);
      pairs.forEach((pair) => {
        const parts = pair.trim().split("-");
        if (parts.length === 2) {
          const qNum = parseInt(parts[0].trim(), 10);
          const ansKey = parts[1].trim().toLowerCase().replace(/[^a-d]/g, "");
          if (!isNaN(qNum) && ansKey) {
            answerKeyMap[qNum] = ansKey;
          }
        }
      });
    }

    // Split questions by <li class="q-item">
    const rawQuestions = blockContent.split(/<li\s+class="q-item">/i).slice(1);
    const questions = [];
    let qIndex = 1;

    for (const rawQ of rawQuestions) {
      // Split question text vs options
      const ulSplit = rawQ.split(/<ul\s+class="q-options">/i);
      const textPart = ulSplit[0] || "";
      const optionsPart = ulSplit[1] || "";

      // Extract question number and text
      let qNum = qIndex;
      const numMatch = /<span\s+class="q-num">(\d+)[\.\)]?<\/span>/i.exec(textPart);
      if (numMatch) {
        qNum = parseInt(numMatch[1], 10);
      }
      const qText = textPart.replace(/<[^>]+>/g, "").replace(/^\d+[\.\)]\s*/, "").trim();

      // Extract each option <li>...</li>
      const options = [];
      const optItemMatches = optionsPart.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi);
      for (const m of optItemMatches) {
        const rawOptText = m[1].replace(/<[^>]+>/g, "").trim();
        const optKeyMatch = /^([a-d])[\)\.]\s*(.*)$/i.exec(rawOptText);
        if (optKeyMatch) {
          options.push({
            key: optKeyMatch[1].toLowerCase(),
            text: optKeyMatch[2].trim(),
          });
        } else if (rawOptText) {
          const letterKey = ["a", "b", "c", "d"][options.length] || "a";
          options.push({
            key: letterKey,
            text: rawOptText,
          });
        }
      }

      const correctKey = answerKeyMap[qNum] || "";

      if (qText && options.length > 0) {
        questions.push({
          num: qNum,
          text: qText,
          options,
          correctKey,
        });
      }

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
