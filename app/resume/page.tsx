import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile, skillGroups } from "@/content/site";

export const metadata: Metadata = {
  title: "Résumé — Robert McDermott",
  description: "Résumé area for Robert McDermott, aspiring AI and software engineer.",
  alternates: { canonical: "https://xspiralx.github.io/RMPortfolio/resume/" },
};

export default function ResumePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="resume-page page-shell">
        <header className="inner-hero resume-hero">
          <p className="eyebrow"><span>06</span> Résumé</p>
          <h1>Experience, education,<br /><em>and engineering focus.</em></h1>
          <p>The final résumé file has not been supplied yet. This page provides a print-friendly overview and clearly marks the information still needed.</p>
          <div className="resume-actions">
            <button className="button button-disabled" type="button" disabled>PDF download · file to add</button>
            <button className="button button-disabled" type="button" disabled>DOCX download · optional</button>
            <Link className="button button-quiet" href="/#contact">Contact <ArrowIcon /></Link>
          </div>
        </header>
        <article className="resume-sheet">
          <header><div><p>ROBB CODES / RÉSUMÉ</p><h2>{profile.name}</h2><strong>{profile.role}</strong></div><div><span>{profile.location}</span><a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/xSpiralx</a><span>Email · to add</span><span>LinkedIn · to add</span></div></header>
          <section><h3>Profile</h3><p>{profile.intro} First-generation Computer Science student, father, and persistent problem solver interested in useful and ethical technology.</p></section>
          <section><h3>Selected projects</h3><div className="resume-columns"><div><strong>CivicSignal</strong><p>Full-stack civic-resource platform concept with verification workflows, immutable revisions, roles, and audit logging.</p></div><div><strong>SpiralOS</strong><p>Privacy-focused local AI assistant with provider-neutral architecture, knowledge collections, and citation goals.</p></div><div><strong>LocalLead AI</strong><p>FastAPI and PostgreSQL backend foundation with migrations, containers, health checks, and typed configuration.</p></div></div></section>
          <section><h3>Skills</h3><div className="resume-skills">{skillGroups.slice(0, 6).map((group) => <div key={group.title}><strong>{group.title}</strong><p>{group.items.join(" · ")}</p></div>)}</div></section>
          <section><h3>Education & experience</h3><div className="resume-placeholder"><strong>Exact details needed</strong><p>Add institution, degree, expected graduation, relevant coursework, employers, titles, dates, and verified achievements in the central content file and final résumé PDF.</p></div></section>
        </article>
        <aside className="resume-help glass-panel"><div><p className="eyebrow">File setup</p><h2>Ready for the final documents.</h2><p>Place the PDF at <code>public/resume/robert-mcdermott-resume.pdf</code>. An optional Word file can sit beside it. Then update the links in this page.</p></div><Link className="text-link" href="/#projects">Review projects <span>→</span></Link></aside>
      </main>
      <SiteFooter />
    </>
  );
}
