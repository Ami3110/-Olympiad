"use client";

import { useEffect, useRef, useState } from "react";

// Ports main.js's accordion open/close (lines 124-148). The max-height is
// set to scrollHeight before collapsing because CSS transitions cannot
// animate from `max-height: none` — kept intentional, do not simplify
// without testing the open/close animation (see CLAUDE.md / main.js).
export default function AccordionItem({ id, title, subtitle, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    const params = new URLSearchParams(window.location.search);
    const groupParam = params.get("group");
    if (hash === `#${id}` || (groupParam && id === `acc-${groupParam}`)) {
      setOpen(true);
      if (bodyRef.current) {
        bodyRef.current.style.maxHeight = "none";
      }
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, [id]);

  function handleToggle() {
    const body = bodyRef.current;
    if (!body) return;
    if (open) {
      body.style.maxHeight = body.scrollHeight + "px";
      requestAnimationFrame(() => {
        body.style.maxHeight = "0px";
      });
      setOpen(false);
    } else {
      setOpen(true);
      body.style.maxHeight = body.scrollHeight + "px";
      const onEnd = (e) => {
        if (e.propertyName === "max-height") {
          body.style.maxHeight = "none";
        }
        body.removeEventListener("transitionend", onEnd);
      };
      body.addEventListener("transitionend", onEnd);
    }
  }

  return (
    <div className={`accordion-item${open ? " open" : ""}`} id={id}>
      <div className="accordion-header" onClick={handleToggle}>
        <div>
          <div className="accordion-title">{title}</div>
          {subtitle ? <div className="accordion-sub">{subtitle}</div> : null}
        </div>
        <div className="accordion-chevron">&#9662;</div>
      </div>
      <div className="accordion-body" ref={bodyRef}>
        <div className="accordion-body-inner">{children}</div>
      </div>
    </div>
  );
}
