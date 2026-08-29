"use client";

import { useState } from "react";
import Link from "next/link";

export default function DivisionSubjectCard({ group, icon, accent = "var(--saffron)" }) {
  const [expanded, setExpanded] = useState(false);
  const subjects = group.subjects || [];
  const visibleSubjects = expanded ? subjects : subjects.slice(0, 3);
  const remainingCount = subjects.length - 3;

  return (
    <div
      id={group.slug}
      className="oi-subject-card"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      {/* Header with Division & Level */}
      <div
        className="oi-subject-header"
        style={{
          background: accent,
          padding: "20px 22px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          color: "#FFFFFF",
        }}
      >
        <span className="oi-subject-icon" style={{ fontSize: 32, flexShrink: 0 }}>
          {icon}
        </span>
        <div>
          <div
            className="oi-subject-classes"
            style={{
              fontSize: 12.5,
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              opacity: 0.9,
              marginBottom: 2,
            }}
          >
            {group.classes}
          </div>
          <div
            className="oi-subject-label"
            style={{
              fontSize: 18,
              fontWeight: 850,
              lineHeight: 1.25,
            }}
          >
            {group.name}
            {group.level ? ` · ${group.level}` : ""}
          </div>
        </div>
      </div>

      {/* Subjects Content — default 3 points, expandable */}
      <div style={{ padding: "20px 22px 14px", flex: 1, display: "flex", flexDirection: "column" }}>
        {subjects.length ? (
          <>
            <ol
              className="oi-subject-list"
              style={{
                padding: "0 0 0 20px",
                margin: 0,
                listStyle: "decimal",
              }}
            >
              {visibleSubjects.map((s, idx) => (
                <li
                  key={s.slug || idx}
                  style={{
                    fontSize: 14,
                    color: "#334155",
                    lineHeight: 1.55,
                    padding: "7px 0",
                    borderBottom: "1px solid #F1F5F9",
                    fontWeight: 550,
                  }}
                >
                  {s.name}
                </li>
              ))}
            </ol>

            {remainingCount > 0 && (
              <div style={{ marginTop: 14 }}>
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  style={{
                    background: expanded ? "rgba(15, 23, 42, 0.05)" : "rgba(230, 90, 0, 0.08)",
                    color: expanded ? "#475569" : "#C2410C",
                    border: expanded ? "1px solid #CBD5E1" : "1px solid rgba(230, 90, 0, 0.28)",
                    borderRadius: 8,
                    padding: "6px 14px",
                    fontSize: 12.5,
                    fontWeight: 750,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "all 0.15s ease",
                  }}
                >
                  <span>{expanded ? "Show Less" : `+ ${remainingCount} More Subjects`}</span>
                  <span style={{ fontSize: 10 }}>{expanded ? "▲" : "▼"}</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="sp-group-empty" style={{ padding: "16px 0", color: "#64748B", fontSize: 14 }}>
            Subject list for this age group hasn&rsquo;t been finalized yet.
          </p>
        )}
      </div>

      {/* Card Action Buttons */}
      <div
        style={{
          display: "flex",
          gap: 10,
          padding: "16px 22px 20px",
          borderTop: "1px solid #F1F5F9",
          marginTop: "auto",
        }}
      >
        <Link
          className="btn btn-ghost"
          href={`/syllabus/${group.slug}/`}
          style={{ fontSize: 13, flex: 1, justifyContent: "center", padding: "8px 12px" }}
        >
          View Syllabus →
        </Link>
        <Link
          className="btn btn-ghost"
          href="/sample-papers/"
          style={{ fontSize: 13, flex: 1, justifyContent: "center", padding: "8px 12px" }}
        >
          Sample Papers →
        </Link>
      </div>
    </div>
  );
}
