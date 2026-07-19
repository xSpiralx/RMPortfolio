import Link from "next/link";
import { profile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <span className="brand-mark">{profile.shortBrand}</span>
        <p>Designed and built with care in Massachusetts.</p>
      </div>
      <div className="footer-links">
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Résumé</Link>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#home">Back to top ↑</a>
      </div>
      <p className="footer-meta">© {new Date().getFullYear()} Robert McDermott · No tracking by default.</p>
    </footer>
  );
}

