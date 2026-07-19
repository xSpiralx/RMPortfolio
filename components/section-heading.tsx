import type { ReactNode } from "react";

export function SectionHeading({ number, eyebrow, title, copy, action }: { number: string; eyebrow: string; title: string; copy?: string; action?: ReactNode }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span>{number}</span>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="section-heading-side">
        {copy ? <p>{copy}</p> : null}
        {action}
      </div>
    </div>
  );
}
