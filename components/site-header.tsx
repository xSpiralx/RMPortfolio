"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, profile } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "projects", "skills", "experience", "contact"];
    const observers = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));
    if (!observers.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.25, 0.5] },
    );
    observers.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <header className="site-header">
      <Link className="brand" href="/#home" aria-label="Robb Codes, home" onClick={() => setOpen(false)}>
        <span className="brand-mark">{profile.shortBrand}</span>
        <span>{profile.brand}</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => {
          const section = item.href.split("#")[1];
          return (
            <Link className={section === active ? "active" : ""} href={item.href} key={item.label}>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="header-actions">
        <Link className="button button-quiet desktop-cta" href="/resume">Résumé</Link>
        <Link className="button button-bright desktop-cta" href="/#projects">View work</Link>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <div className="mobile-menu" id="mobile-navigation">
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link href={item.href} key={item.label} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
              </Link>
            ))}
          </nav>
          <p>AI engineering · Software systems · Useful technology</p>
        </div>
      ) : null}
    </header>
  );
}

