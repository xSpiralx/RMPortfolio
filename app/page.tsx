import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { ArrowIcon, DotIcon, IconFrame } from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { gameProjects, profile, projects, skillGroups, timeline } from "@/content/site";

export const metadata: Metadata = {
  title: "Robert McDermott — AI & Software Engineer",
  description: "Portfolio of Robert McDermott, a Computer Science student building local-first AI, civic technology, developer tools, and dependable full-stack software.",
  alternates: { canonical: "https://robbcodes.com" },
};

const codeLines = [
  ["01", "focus", "local-first AI"],
  ["02", "principle", "useful > impressive"],
  ["03", "approach", "build · test · learn"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero page-shell" id="home">
          <div className="hero-ambient" aria-hidden="true"><i /><i /><i /></div>
          <div className="hero-copy">
            <div className="availability"><DotIcon /> Seeking entry-level AI & software engineering roles</div>
            <p className="hero-kicker">Robert McDermott · Massachusetts</p>
            <h1>Building intelligent<br />software <em>with purpose.</em></h1>
            <p className="hero-lede">{profile.intro}</p>
            <div className="hero-actions">
              <Link className="button button-bright" href="#projects">Explore my work <ArrowIcon /></Link>
              <a className="button button-quiet" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon /></a>
              <Link className="text-link" href="/resume">View résumé <span aria-hidden="true">→</span></Link>
            </div>
            <div className="hero-proof" aria-label="Primary areas of focus">
              <span><b>01</b> AI engineering</span>
              <span><b>02</b> Software systems</span>
              <span><b>03</b> Full-stack products</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Robb Codes developer profile">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="developer-card glass-panel">
              <div className="developer-card-top">
                <span className="brand-mark brand-mark-large">RC</span>
                <div><small>PROFILE / 001</small><strong>Robert<br />McDermott</strong></div>
                <span className="card-status"><DotIcon /> Available</span>
              </div>
              <div className="developer-code" aria-label="Engineering principles">
                {codeLines.map(([line, key, value]) => (
                  <p key={line}><span>{line}</span><code><i>{key}</i>: &quot;{value}&quot;</code></p>
                ))}
              </div>
              <div className="developer-card-bottom">
                <span>CS STUDENT</span><span>AI / SW / WEB</span><span>MA, USA</span>
              </div>
            </div>
            <div className="floating-chip chip-python"><IconFrame>Py</IconFrame><span>Python<b>Primary language</b></span></div>
            <div className="floating-chip chip-local"><IconFrame>◎</IconFrame><span>Local AI<b>Privacy first</b></span></div>
            <div className="floating-chip chip-build"><DotIcon /><span>Building now<b>5 active concepts</b></span></div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="principles-strip" aria-label="Engineering principles">
          <div><span>01</span><strong>Useful by design</strong><p>Start with a real problem, not a feature list.</p></div>
          <div><span>02</span><strong>Privacy considered</strong><p>Treat user trust as an engineering requirement.</p></div>
          <div><span>03</span><strong>Built to learn</strong><p>Document decisions, test assumptions, improve the system.</p></div>
        </section>

        <section className="section page-shell" id="about">
          <SectionHeading number="01" eyebrow="About" title="Grounded in curiosity. Driven by useful work." />
          <div className="about-grid">
            <div className="about-story">
              <p className="large-copy">I’m a first-generation college student, father, and developer building toward a career in AI and software engineering.</p>
              <p>I’m drawn to difficult systems and practical technology: tools that protect privacy, help people find reliable information, or make complex work easier to understand.</p>
              <p>Balancing school, work, projects, and family has made persistence and resourcefulness part of how I engineer. I’m comfortable rebuilding weak foundations, learning unfamiliar tools, and staying with a problem until the system makes sense.</p>
              <blockquote>“I want to build AI that earns trust by being useful, understandable, and respectful of the person using it.”</blockquote>
            </div>
            <div className="about-bento">
              <article className="bento-card glass-panel bento-wide">
                <span className="bento-icon">⌁</span><small>Current direction</small>
                <h3>AI that works <em>for</em> people.</h3>
                <p>Local-first tools, grounded answers, clear controls, and responsible automation.</p>
                <div className="signal-lines" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              </article>
              <article className="bento-card glass-panel"><small>Based in</small><strong>Massachusetts</strong><p>Open to entry-level and collaborative opportunities.</p></article>
              <article className="bento-card glass-panel"><small>Off the keyboard</small><strong>Father · Student · Builder</strong><p>Learning, creating, and showing up consistently.</p></article>
              <article className="bento-card glass-panel bento-wide"><small>How I work</small><div className="working-list"><span>Ask why</span><span>Model the system</span><span>Build small</span><span>Test the edges</span><span>Document the lesson</span></div></article>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="page-shell">
            <SectionHeading
              number="02"
              eyebrow="Selected work"
              title="Ideas shaped into systems."
              copy="Projects focused on public value, user control, learning, and dependable engineering foundations. Status and scope are stated honestly."
              action={<Link className="text-link" href="/projects">View all projects <span aria-hidden="true">→</span></Link>}
            />
            <div className="featured-projects">
              {projects.slice(0, 3).map((project, index) => (
                <article className="project-feature" key={project.slug}>
                  <Link className="project-visual-link" href={`/projects/${project.slug}`} aria-label={`View ${project.name} case study`}>
                    <ProjectVisual project={project} large />
                  </Link>
                  <div className="project-feature-copy">
                    <div className="project-index">0{index + 1} / 05</div>
                    <p className="eyebrow project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.name}</h3>
                    <p className="project-value">{project.value}</p>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.technologies.slice(0, 5).map((item) => <span key={item}>{item}</span>)}</div>
                    <Link className="button button-quiet" href={`/projects/${project.slug}`}>Read case study <ArrowIcon /></Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="project-grid">
              {projects.slice(3).map((project) => (
                <Link className={`compact-project glass-panel accent-${project.accent}`} href={`/projects/${project.slug}`} key={project.slug}>
                  <div><p className="eyebrow">{project.eyebrow}</p><h3>{project.name}</h3><p>{project.value}</p></div>
                  <div className="compact-project-footer"><span>{project.status}</span><ArrowIcon /></div>
                </Link>
              ))}
            </div>
            <div className="archive-block">
              <div><p className="eyebrow">Earlier work</p><h3>Game development archive</h3><p>Selected prototypes showing programming practice, gameplay-system design, persistence, debugging, and creative iteration.</p></div>
              <div className="archive-list">
                {gameProjects.map((project) => <div key={project.name}><strong>{project.name}</strong><span>{project.engine}</span><small>Details to add</small></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section page-shell" id="skills">
          <SectionHeading number="03" eyebrow="Capabilities" title="A growing engineering toolkit." copy="Grouped by how I use the technology—not a wall of logos or unverified mastery claims." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div><span>0{index + 1}</span><small>{group.level}</small></div>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="page-shell">
            <SectionHeading number="04" eyebrow="Experience & education" title="The path is still being written." copy="A transparent foundation ready for exact education, employment, coursework, and achievement details." />
            <div className="timeline">
              {timeline.map((item, index) => (
                <article key={item.title}>
                  <div className="timeline-number">{String(index + 1).padStart(2, "0")}</div>
                  <div><p className="eyebrow">{item.kicker}</p><h3>{item.title}</h3></div>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <div className="resume-callout glass-panel">
              <div><p className="eyebrow">Résumé</p><h3>A concise view of the work behind the story.</h3><p>The résumé preview and download structure are ready. Add the final PDF to enable direct viewing.</p></div>
              <Link className="button button-bright" href="/resume">Open résumé area <ArrowIcon /></Link>
            </div>
          </div>
        </section>

        <section className="section contact-section page-shell" id="contact">
          <SectionHeading number="05" eyebrow="Contact" title="Let’s build something useful." copy="I’m looking for an entry-level opportunity where I can contribute, learn from strong engineers, and grow through real responsibility." />
          <div className="contact-grid">
            <div className="contact-copy">
              <p className="large-copy">Have a role, project, or useful problem worth discussing?</p>
              <p>The contact form is prepared for a provider but does not send yet. GitHub is the verified public channel for now.</p>
              <div className="contact-links">
                <a href={profile.github} target="_blank" rel="noopener noreferrer"><span>GitHub</span><strong>@{profile.githubLabel}</strong><ArrowIcon /></a>
                <div className="contact-placeholder"><span>Email</span><strong>Address to add</strong><small>Not published yet</small></div>
                <div className="contact-placeholder"><span>LinkedIn</span><strong>Profile to add</strong><small>Not published yet</small></div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
