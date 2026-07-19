import type { Project } from "@/content/site";

export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className={`project-visual accent-${project.accent}${large ? " project-visual-large" : ""}`} role="img" aria-label={`${project.name} interface concept placeholder`}>
      <div className="visual-glow" />
      <div className="visual-window">
        <div className="window-bar">
          <span /><span /><span />
          <b>{project.name}</b>
        </div>
        <div className="visual-layout">
          <div className="visual-rail">
            <i /><i /><i /><i />
          </div>
          <div className="visual-main">
            <div className="visual-tag">{project.status}</div>
            <div className="visual-title"><i /><i /></div>
            <div className="visual-stats"><i /><i /><i /></div>
            <div className="visual-rows"><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <span className="media-note">Concept preview · replace with project media</span>
    </div>
  );
}

