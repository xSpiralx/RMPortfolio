export type ProjectStatus = "In development" | "Planning" | "Archive";

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  value: string;
  description: string;
  problem: string;
  role: string;
  status: ProjectStatus;
  dates: string;
  accent: "blue" | "violet" | "crimson" | "cyan" | "magenta";
  technologies: string[];
  features: string[];
  goals: string[];
  contributions: string[];
  architecture: string[];
  choices: { title: string; detail: string }[];
  challenges: { title: string; detail: string }[];
  lessons: string[];
  security: string[];
  accessibility: string[];
  testing: string[];
  future: string[];
  repository?: string;
  liveDemo?: string;
};

export const profile = {
  name: "Robert McDermott",
  brand: "ROBB CODES",
  shortBrand: "RC",
  domain: "xspiralx.github.io/RMPortfolio",
  location: "Massachusetts",
  headline: "Building intelligent software with purpose.",
  role: "AI Engineer · Software Engineer · Full-Stack Developer",
  intro:
    "Computer Science student and developer focused on local-first AI, dependable software systems, and full-stack products that solve useful problems.",
  github: "https://github.com/xSpiralx",
  githubLabel: "xSpiralx",
  email: "",
  linkedin: "",
};

export const projects: Project[] = [
  {
    slug: "civicsignal",
    name: "CivicSignal",
    eyebrow: "Civic technology · Open source",
    value: "Helping people find public services they can trust.",
    description:
      "An open-source civic-resource platform designed to make reliable public services and community resources easier to discover, review, and maintain.",
    problem:
      "Critical community information is often scattered, stale, or difficult to verify. CivicSignal explores how a transparent review workflow can make that information easier to trust without collecting unnecessary personal data.",
    role: "Product architecture, full-stack engineering, data modeling, and accessibility planning",
    status: "In development",
    dates: "Dates to add",
    accent: "blue",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Docker"],
    features: [
      "Administrative review queue",
      "Resource verification workflow",
      "Immutable revision history",
      "Role-based permissions",
      "Audit logging",
      "Deployment-ready architecture",
    ],
    goals: [
      "Make trustworthy resources easier to locate",
      "Preserve a visible history of important changes",
      "Build privacy and accessibility into the foundation",
    ],
    contributions: [
      "Defined the end-to-end product and technical direction",
      "Designed the frontend and backend boundary",
      "Modeled moderation, revisions, roles, and audit events",
      "Established accessibility, privacy, and deployment requirements",
    ],
    architecture: ["Next.js web client", "FastAPI service layer", "PostgreSQL data store", "Review + audit workflow"],
    choices: [
      { title: "Immutable revisions", detail: "Important changes are modeled as history, not silent overwrites, so review decisions can remain explainable." },
      { title: "Explicit permissions", detail: "Administrative actions are separated by role to reduce accidental or unauthorized changes." },
      { title: "Privacy-aware discovery", detail: "The concept prioritizes useful resource search without building a profile of the person searching." },
    ],
    challenges: [
      { title: "Trust is a system", detail: "A verified badge alone is not enough. The product needs source evidence, review state, revision history, and clear recency signals." },
      { title: "Useful moderation", detail: "The review flow must be rigorous without creating so much friction that community information becomes stale." },
    ],
    lessons: ["Model accountability early", "Make system status visible to users", "Accessibility belongs in the data and UI design"],
    security: ["Role-based authorization plan", "Audit events for privileged actions", "Input validation at client and API boundaries", "No sensitive personal profile required for search"],
    accessibility: ["Semantic search and result structure", "Keyboard-first review workflows", "Clear verification states that do not depend on color", "Plain-language error and status messaging"],
    testing: ["API contract tests planned", "Permission matrix tests planned", "Accessibility and keyboard checks planned", "Revision-integrity tests planned"],
    future: ["Source freshness scoring", "Community correction proposals", "Regional data imports", "Public verification methodology"],
  },
  {
    slug: "spiralos",
    name: "SpiralOS",
    eyebrow: "Local AI · Privacy",
    value: "An AI workspace that keeps the user in control.",
    description:
      "A privacy-focused, local-first AI assistant designed around user-controlled models, offline workflows, and answer modes grounded in personal knowledge collections.",
    problem:
      "Useful AI tools often require sending personal material to a remote provider. SpiralOS explores a local-first alternative where models, collections, and provider choices remain under the user’s control.",
    role: "Product design, Python architecture, local-model integration, and testing strategy",
    status: "In development",
    dates: "Dates to add",
    accent: "violet",
    technologies: ["Python", "Ollama", "Local models", "Provider adapters", "Desktop UI", "Testing"],
    features: ["Offline-first sessions", "Provider-neutral model registry", "Local knowledge collections", "Book-sourced answer mode", "Citation support", "Desktop application direction"],
    goals: ["Keep sensitive context on the user’s device", "Allow model providers to be swapped cleanly", "Make grounded answers easier to inspect"],
    contributions: ["Created the local-first product direction", "Designed provider-neutral model boundaries", "Planned collection ingestion and citation behavior", "Defined testable privacy and offline expectations"],
    architecture: ["Desktop interface", "Conversation orchestration", "Provider adapter layer", "Local model runtime via Ollama", "Local knowledge index"],
    choices: [
      { title: "Provider neutrality", detail: "Core product behavior depends on an adapter contract instead of a single model vendor." },
      { title: "Local by default", detail: "Collections and model execution are designed to remain on-device unless a user deliberately chooses otherwise." },
      { title: "Evidence in the answer", detail: "Book-sourced mode is planned around citations so a user can trace an answer back to the material." },
    ],
    challenges: [
      { title: "Model variation", detail: "Local models differ in capability and interface behavior, so features need graceful degradation and explicit compatibility checks." },
      { title: "Grounding quality", detail: "Useful citations require careful chunking, retrieval, and response constraints—not just attaching a vector database." },
    ],
    lessons: ["Design around capability contracts", "Privacy promises need observable behavior", "Local UX must account for limited hardware"],
    security: ["Local storage boundary", "No silent remote fallback", "Explicit provider selection", "Safe handling plan for imported documents"],
    accessibility: ["Keyboard-accessible desktop flows", "Readable citation presentation", "Reduced-motion interface", "Status messages for long-running local work"],
    testing: ["Provider contract tests", "Offline-mode tests", "Citation traceability tests", "Model registry validation"],
    future: ["Hardware-aware model recommendations", "More document formats", "Encrypted local collections", "Optional user-selected remote providers"],
  },
  {
    slug: "sagespire",
    name: "SageSpire",
    eyebrow: "Learning systems · Product design",
    value: "A learning journey built around curiosity and progress.",
    description:
      "A gamified general-knowledge platform where learners climb a massive knowledge tower through reading, quizzes, challenges, and source-backed learning paths.",
    problem:
      "General-knowledge learning can feel unstructured and disposable. SageSpire explores a coherent progression system that rewards consistency while keeping reliable sources at the center.",
    role: "Game-system design, learning experience design, application architecture, and prototyping",
    status: "Planning",
    dates: "Dates to add",
    accent: "magenta",
    technologies: ["TypeScript", "React", "Learning design", "Progression systems", "Content modeling", "Future AI tutor"],
    features: ["Structured learning paths", "Quizzes and knowledge activities", "Levels, XP, and ranks", "Unlockable tower areas", "Digital reading", "Source requirements"],
    goals: ["Turn broad learning into an understandable journey", "Reward meaningful practice instead of empty activity", "Keep generated guidance connected to reliable sources"],
    contributions: ["Developed the tower progression concept", "Defined the learning and reward loops", "Outlined content reliability requirements", "Planned a future source-aware AI tutor"],
    architecture: ["Learning path catalog", "Activity engine", "Progress + unlock system", "Reading library", "Source-aware tutor layer (future)"],
    choices: [
      { title: "Progress as navigation", detail: "The tower makes breadth and advancement spatial, giving learners a memorable mental model." },
      { title: "Knowledge before rewards", detail: "XP and unlocks support the learning loop rather than replacing it." },
      { title: "Source-aware future AI", detail: "Tutor features are planned with traceable reference requirements from the start." },
    ],
    challenges: [
      { title: "Healthy motivation", detail: "Progression must encourage learning without creating manipulative streak pressure." },
      { title: "Content credibility", detail: "Broad knowledge requires editorial standards, source metadata, and correction paths." },
    ],
    lessons: ["Game mechanics need an ethical purpose", "Content operations shape the product", "A strong metaphor can organize complex information"],
    security: ["Minimal learner profile plan", "No public progress by default", "Moderated content workflow", "Future tutor input boundaries"],
    accessibility: ["Non-timed learning options", "Text alternatives to spatial tower navigation", "Progress conveyed beyond color", "Readable, adjustable study views"],
    testing: ["Progression rule tests planned", "Quiz keyboard-flow checks planned", "Content source validation planned", "Reduced-motion review planned"],
    future: ["Source-grounded AI tutor", "Personal study plans", "Collaborative learning rooms", "Educator-authored paths"],
  },
  {
    slug: "engineering-flight-recorder",
    name: "Engineering Flight Recorder",
    eyebrow: "Developer tools · AI context",
    value: "Preserving the decisions behind the code.",
    description:
      "A developer intelligence tool for recording architecture decisions, debugging history, and project knowledge in a form that helps people—and future AI sessions—recover context.",
    problem:
      "Repositories preserve code but often lose the reasoning, failed approaches, and debugging context that made the code possible. That knowledge gap slows maintenance and onboarding.",
    role: "Concept development, information architecture, integration planning, and developer-experience design",
    status: "Planning",
    dates: "Dates to add",
    accent: "cyan",
    technologies: ["GitHub integrations", "Structured records", "AI-readable context", "Search", "Developer tooling", "Documentation"],
    features: ["Decision tracking", "Debugging timelines", "Architecture records", "GitHub integration concepts", "AI-readable project memory", "Onboarding views"],
    goals: ["Capture reasoning close to the work", "Make old debugging context searchable", "Create a reliable context layer for collaborators and AI tools"],
    contributions: ["Defined the engineering-memory product concept", "Structured decision and debugging record types", "Mapped potential GitHub touchpoints", "Designed for both human and AI readers"],
    architecture: ["Capture surfaces", "Normalized memory records", "Repository linking", "Search + retrieval", "Human and machine-readable views"],
    choices: [
      { title: "Structured, not opaque", detail: "Records separate decision, evidence, alternatives, and outcome so context can be filtered and reused." },
      { title: "Repository-aware", detail: "Memory is planned around commits, issues, and pull requests instead of becoming another isolated notes app." },
      { title: "AI-readable by design", detail: "Export and retrieval formats prioritize clean context without treating generated summaries as the source of truth." },
    ],
    challenges: [
      { title: "Capture friction", detail: "The tool only works if recording context feels lighter than reconstructing it later." },
      { title: "Signal quality", detail: "Automatic capture can create noise, so users need clear control over what becomes durable memory." },
    ],
    lessons: ["Developer experience is workflow design", "Source records must remain distinguishable from summaries", "Context is most valuable when attached to evidence"],
    security: ["Repository permission scoping", "Secret-pattern filtering plan", "Explicit retention controls", "No training claim for private project data"],
    accessibility: ["Keyboard-first capture", "Chronological and grouped reading modes", "Clear source attribution", "Plain-language record templates"],
    testing: ["Schema validation plan", "Repository permission tests", "Search relevance evaluation", "Sensitive-content filter tests"],
    future: ["IDE capture extension", "Pull-request memory summaries", "Team onboarding packs", "Local-only repository mode"],
  },
  {
    slug: "locallead-ai",
    name: "LocalLead AI",
    eyebrow: "Backend systems · Responsible automation",
    value: "A secure foundation for practical business automation.",
    description:
      "A backend-first platform intended to help identify and manage potential local-business automation opportunities with typed configuration, observable health, and secure data boundaries.",
    problem:
      "Automation research can quickly become unstructured or intrusive. LocalLead AI focuses first on a controlled, testable backend that can support responsible opportunity management.",
    role: "Backend architecture, API development, database migrations, configuration, and test foundations",
    status: "In development",
    dates: "Dates to add",
    accent: "crimson",
    technologies: ["FastAPI", "Python", "PostgreSQL", "Alembic", "Docker", "Typed configuration"],
    features: ["Typed settings", "Database migrations", "Containerized local setup", "Health checks", "API test foundation", "Security-minded backend boundaries"],
    goals: ["Create a dependable backend before adding automation", "Keep configuration explicit and testable", "Build responsible collection and outreach boundaries"],
    contributions: ["Established the FastAPI service foundation", "Designed PostgreSQL persistence and Alembic migrations", "Added typed configuration and health checks", "Defined the initial testing and container workflow"],
    architecture: ["FastAPI service", "Domain + validation layer", "PostgreSQL", "Alembic migrations", "Docker runtime"],
    choices: [
      { title: "Backend first", detail: "Core records, permissions, and reliability are established before a polished automation interface." },
      { title: "Typed configuration", detail: "Environment-dependent behavior is parsed and validated instead of scattered through application code." },
      { title: "Migration discipline", detail: "Database evolution is represented explicitly so environments can be reproduced safely." },
    ],
    challenges: [
      { title: "Responsible boundaries", detail: "Business data and outreach workflows need clear legal, privacy, rate, and user-control constraints before automation expands." },
      { title: "Operational clarity", detail: "Health checks must communicate useful dependency state without exposing sensitive service details." },
    ],
    lessons: ["Secure foundations precede automation", "Typed configuration reduces deployment ambiguity", "A migration history is part of the product"],
    security: ["Secrets kept out of client code", "Validated configuration", "Database migration review", "Future rate-limit and consent boundaries"],
    accessibility: ["API-first project; future UI requirements documented", "Readable error contracts", "Status text not dependent on color", "Keyboard requirements for future admin tools"],
    testing: ["Health endpoint tests", "Configuration validation tests", "Database migration checks", "API contract tests"],
    future: ["Permissioned research workflows", "Human review queues", "Responsible outreach controls", "Operations dashboard"],
  },
];

export const gameProjects = [
  { name: "Project Hero", engine: "Unity", note: "Gameplay-system and prototype work. Media and exact contribution notes to add." },
  { name: "Project Nexus", engine: "Unity", note: "Earlier programming and systems-design work. Repository details to add." },
  { name: "Ripple", engine: "Godot / prototype", note: "Creative prototyping, iteration, and debugging evidence. Media to add." },
];

export const skillGroups = [
  { title: "Languages", level: "Comfortable / working knowledge", items: ["Python", "C#", "C++", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "Oracle SQL"] },
  { title: "Frontend", level: "Working knowledge", items: ["React", "Next.js", "Responsive UI", "Semantic HTML", "Accessibility"] },
  { title: "Backend", level: "Working knowledge", items: ["FastAPI", "Django", "REST APIs", "Typed configuration", "Alembic"] },
  { title: "Data", level: "Working knowledge", items: ["PostgreSQL", "SQL", "Oracle SQL", "Data modeling", "Migrations"] },
  { title: "AI & local models", level: "Current focus", items: ["OpenAI workflows", "ChatGPT", "Codex", "Ollama", "Local models", "RAG concepts"] },
  { title: "Tools & quality", level: "Everyday toolkit", items: ["Git", "GitHub", "Docker", "Testing", "Documentation", "Debugging"] },
  { title: "Game development", level: "Prior project experience", items: ["Unity", "Godot", "Gameplay systems", "Prototyping"] },
  { title: "Currently learning", level: "In progress", items: ["Production AI systems", "Evaluation", "Secure deployment", "System design"] },
];

export const timeline = [
  { kicker: "Now", title: "Computer Science education", copy: "Building a formal foundation in software development, data structures, databases, and computer systems. Institution, dates, coursework, and expected graduation to add." },
  { kicker: "Current focus", title: "Independent AI & software engineering", copy: "Designing and building local-first AI, civic technology, developer tools, and secure backend systems while developing stronger testing and deployment practices." },
  { kicker: "Ongoing", title: "Project and open-source practice", copy: "Turning broad ideas into documented systems: defining problems, modeling data, making architecture decisions, rebuilding weak foundations, and learning from implementation." },
  { kicker: "Professional foundation", title: "Customer support & technical communication", copy: "Experience working with people, troubleshooting issues, explaining unfamiliar systems, documenting solutions, and taking ownership. Employer, title, dates, and achievements to add." },
];

export const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
