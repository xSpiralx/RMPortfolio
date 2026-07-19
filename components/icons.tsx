import type { ReactNode } from "react";

export function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export function DotIcon() {
  return <span className="status-dot" aria-hidden="true" />;
}

export function IconFrame({ children }: { children: ReactNode }) {
  return <span className="icon-frame" aria-hidden="true">{children}</span>;
}

