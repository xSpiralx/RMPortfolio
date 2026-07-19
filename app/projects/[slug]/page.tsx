import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, DotIcon } from "@/components/icons";
import { MediaGallery } from "@/components/media-gallery";
import { ProjectVisual } from "@/components/project-visual";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { civicSignalMedia, getProject, projects } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} Case Study — Robert McDermott`,
    description: project.description,
    alternates: { canonical: `https://xspiralx.github.io/RMPortfolio/projects/${project.slug}/` },
    openGraph: { title: `${project.name} — ${project.value}`, description: project.description, url: `https://xspiralx.github.io/RMPortfolio/projects/${project.slug}/`, type: "article" },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className={`case-study accent-${project.accent}`}>
        <header className="case-hero page-shell">
          <Link className="back-link" href="/projects"><span aria-hidden="true">←</span> All projects</Link>
          <div className="case-title-grid">
            <div>
              <p className="eyebrow">{project.eyebrow}</p>
              <h1>{project.name}</h1>
              <p className="case-value">{project.value}</p>
            </div>
            <div className="case-summary">
              <p>{project.description}</p>
              <div className="case-actions">
                {project.repository ? <a className="button button-bright" href={project.repository} target="_blank" rel="noopener noreferrer">Repository <ArrowIcon /></a> : <span className="button button-disabled" aria-disabled="true">Repository · link to add</span>}
                {project.liveDemo ? <a className="button button-quiet" href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live demo <ArrowIcon /></a> : <span className="button button-disabled" aria-disabled="true">Live demo · not available</span>}
              </div>
            </div>
          </div>
          <ProjectVisual project={project} large />
          <dl className="project-facts">
            <div><dt>Status</dt><dd><DotIcon /> {project.status}</dd></div>
            <div><dt>My role</dt><dd>{project.role}</dd></div>
            <div><dt>Development</dt><dd>{project.dates}</dd></div>
            <div><dt>Stack</dt><dd>{project.technologies.slice(0, 4).join(" · ")}</dd></div>
          </dl>
        </header>

        {project.slug === "civicsignal" ? (
          <section className="case-media-section page-shell" aria-labelledby="civicsignal-showcase-title">
            <div className="case-section-label"><span>00</span> Product walkthrough</div>
            <div className="case-media-heading">
              <h2 id="civicsignal-showcase-title">CivicSignal in action.</h2>
              <p>From public discovery to administrative review, these screens show how the product keeps safety, verification, privacy, and accountability visible across the experience.</p>
            </div>
            <MediaGallery items={civicSignalMedia} projectName={project.name} />
          </section>
        ) : null}

        <section className="case-section page-shell case-intro">
          <div className="case-section-label"><span>01</span> Overview</div>
          <div><h2>The problem</h2><p className="large-copy">{project.problem}</p></div>
          <div className="case-split">
            <article><h3>Goals</h3><ul className="check-list">{project.goals.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article><h3>My contribution</h3><ul className="check-list">{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></article>
          </div>
        </section>

        <section className="case-section page-shell">
          <div className="case-section-label"><span>02</span> System design</div>
          <div className="architecture-panel glass-panel">
            <div className="architecture-flow">
              {project.architecture.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
            </div>
            <p>Conceptual architecture · replace with the project’s final diagram when available.</p>
          </div>
          <div className="decision-grid">
            {project.choices.map((item, index) => <article key={item.title}><span>Decision 0{index + 1}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}
          </div>
        </section>

        <section className="case-section case-dark-band">
          <div className="page-shell">
            <div className="case-section-label"><span>03</span> Important features</div>
            <div className="feature-board">
              {project.features.map((feature, index) => <article key={feature}><span>{String(index + 1).padStart(2, "0")}</span><h3>{feature}</h3></article>)}
            </div>
          </div>
        </section>

        <section className="case-section page-shell">
          <div className="case-section-label"><span>04</span> Engineering reflection</div>
          <div className="challenge-grid">
            {project.challenges.map((item) => <article className="glass-panel" key={item.title}><small>Challenge</small><h3>{item.title}</h3><p>{item.detail}</p></article>)}
            <article className="glass-panel"><small>Lessons learned</small><ul>{project.lessons.map((item) => <li key={item}>{item}</li>)}</ul></article>
          </div>
        </section>

        <section className="case-section page-shell quality-section">
          <div className="case-section-label"><span>05</span> Quality & responsibility</div>
          <div className="quality-grid">
            <article><span>Security</span><ul>{project.security.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article><span>Accessibility</span><ul>{project.accessibility.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article><span>Testing</span><ul>{project.testing.map((item) => <li key={item}>{item}</li>)}</ul></article>
          </div>
          <div className="future-block"><span>Future improvements</span><div>{project.future.map((item) => <p key={item}>{item}</p>)}</div></div>
        </section>

        <section className="next-project page-shell">
          <p>Next case study</p>
          <Link href={`/projects/${next.slug}`}><span>{next.eyebrow}</span><strong>{next.name}</strong><ArrowIcon /></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
