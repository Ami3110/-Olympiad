"use client";

import { useState, useEffect } from "react";
import RegistrationUnified from "./RegistrationUnified";

export default function RegistrationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("student");

  const openModal = (tab = "student") => {
    setActiveTab(tab === "school" ? "school" : "student");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOpenEvent = (e) => {
      const tab = e?.detail?.tab || (typeof e?.detail === "string" ? e.detail : "student");
      openModal(tab);
    };

    window.addEventListener("open-reg-modal", handleOpenEvent);

    // Global interceptor for registration triggers
    const handleDocumentClick = (e) => {
      const trigger = e.target.closest("[data-reg-modal]");
      if (trigger) {
        e.preventDefault();
        const tab = trigger.getAttribute("data-reg-modal") || "student";
        openModal(tab);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("open-reg-modal", handleOpenEvent);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(15, 23, 42, 0.72)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(10px, 2.5vw, 28px)",
        overflowY: "auto",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "min(1420px, 95vw)",
          maxHeight: "94vh",
          overflowY: "auto",
          background: "#FFFFFF",
          borderRadius: "24px",
          boxShadow: "0 30px 70px -15px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.15)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close registration modal"
          style={{
            position: "absolute",
            top: "14px",
            right: "16px",
            zIndex: 100,
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#F1F5F9",
            border: "1px solid #CBD5E1",
            color: "#475569",
            fontSize: "18px",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            transition: "all 0.18s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#E2E8F0";
            e.currentTarget.style.color = "#0F172A";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#F1F5F9";
            e.currentTarget.style.color = "#475569";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ✕
        </button>

        {/* Modal Unified Registration Component */}
        <RegistrationUnified isModal={true} initialActiveTab={activeTab} onClose={closeModal} />
      </div>
    </div>
  );
}
