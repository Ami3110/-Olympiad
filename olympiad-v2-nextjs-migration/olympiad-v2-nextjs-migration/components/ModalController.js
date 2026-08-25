"use client";

import { useEffect, useRef } from "react";

// Ports main.js's sample-paper/syllabus modal open/close (lines 95-122):
// [data-modal-target] buttons open the #<id>.sp-modal, [data-modal-close]
// (backdrop or X button) closes it, Escape closes any open modal. Wraps
// server-rendered subject grids + modals and wires the same listeners on
// mount, scoped to this subtree.
export default function ModalController({ children }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    function openModal(modal) {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-lock");
    }
    function closeModal(modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-lock");
    }

    const triggers = root.querySelectorAll("[data-modal-target]");
    function handleTriggerClick(e) {
      const modal = document.getElementById(e.currentTarget.dataset.modalTarget);
      if (modal) openModal(modal);
    }
    triggers.forEach((btn) => btn.addEventListener("click", handleTriggerClick));

    const closers = root.querySelectorAll("[data-modal-close]");
    function handleCloseClick(e) {
      const modal = e.currentTarget.closest(".sp-modal");
      if (modal) closeModal(modal);
    }
    closers.forEach((el) => el.addEventListener("click", handleCloseClick));

    function handleKeydown(e) {
      if (e.key === "Escape") {
        root.querySelectorAll(".sp-modal.open").forEach(closeModal);
      }
    }
    document.addEventListener("keydown", handleKeydown);

    return () => {
      triggers.forEach((btn) => btn.removeEventListener("click", handleTriggerClick));
      closers.forEach((el) => el.removeEventListener("click", handleCloseClick));
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
