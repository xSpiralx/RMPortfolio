import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { gameProjects, projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects — Robert McDermott",
  description: "AI, civic technology, backend, learning-system, and developer-tool projects by Robert McDermott.",
  alternates: { canonical: "https://xspiralx.github.io/RMPortfolio/projects/" },
};

export default function ProjectsPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="inner-page page-shell">
        <header className="inner-hero">
          <p className="eyebrow"><span>02</span> Project index</p>
          <h1>Work in progress.<br /><em>Thinking made visible.</em></h1>
          <p>Case studies that separate the idea, the problem, my contribution, and the engineering choices—without pretending unfinished work is already in production.</p>
        </header>
        <div className="project-index-grid">
          {projects.map((project, index) => (
            <article className="project-index-card" key={project.slug}>
              <Link href={`/projects/${project.slug}`} aria-label={`View ${project.name} case study`}><ProjectVisual project={project} /></Link>
              <div className="project-index-copy">
                <div><span>0{index + 1}</span><small>{project.status}</small></div>
                <p className="eyebrow">{project.eyebrow}</p>
                <h2>{project.name}</h2>
                <p className="project-value">{project.value}</p>
                <p>{project.description}</p>
                <div className="tag-list">{project.technologies.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
                <Link className="text-link" href={`/projects/${project.slug}`}>Read case study <ArrowIcon /></Link>
              </div>
            </article>
          ))}
        </div>
        <section className="game-archive-page">
          <p className="eyebrow">Secondary archive</p>
          <h2>Game development prototypes</h2>
          <p>Earlier work remains part of the story: a place to show programming practice, interaction design, persistence, debugging, and creative systems thinking.</p>
          <div>{gameProjects.map((item) => <article key={item.name}><span>{item.engine}</span><h3>{item.name}</h3><p>{item.note}</p></article>)}</div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
