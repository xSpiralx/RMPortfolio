"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { ProjectMedia } from "@/content/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function MediaGallery({ items, projectName }: { items: ProjectMedia[]; projectName: string }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  function goTo(index: number) {
    const normalized = (index + items.length) % items.length;
    const track = trackRef.current;
    const slide = track?.children.item(normalized) as HTMLElement | null;
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActive(normalized);
  }

  function trackPosition() {
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track) return;
      const center = track.scrollLeft + track.clientWidth / 2;
      const slides = Array.from(track.children) as HTMLElement[];
      const nearest = slides.reduce(
        (best, slide, index) => {
          const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
          const distance = Math.abs(center - slideCenter);
          return distance < best.distance ? { index, distance } : best;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      );
      setActive(nearest.index);
    });
  }

  return (
    <div className="media-gallery" aria-label={`${projectName} product showcase`}>
      <div className="media-gallery-toolbar">
        <div>
          <span>Product showcase</span>
          <strong>{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</strong>
        </div>
        <div className="media-gallery-actions">
          <button type="button" onClick={() => goTo(active - 1)} aria-label="Show previous media">←</button>
          <button type="button" onClick={() => goTo(active + 1)} aria-label="Show next media">→</button>
        </div>
      </div>

      <div
        className="media-gallery-track"
        ref={trackRef}
        onScroll={trackPosition}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); goTo(active - 1); }
          if (event.key === "ArrowRight") { event.preventDefault(); goTo(active + 1); }
        }}
        tabIndex={0}
        aria-label="Scrollable project media. Use left and right arrow keys to navigate."
      >
        {items.map((item, index) => (
          <figure className={`media-gallery-slide${item.height > item.width ? " media-gallery-slide-portrait" : ""}`} key={item.src}>
            <div className="media-gallery-frame">
              {item.type === "video" ? (
                <video controls preload="metadata" poster={item.poster ? `${basePath}${item.poster}` : undefined}>
                  <source src={`${basePath}${item.src}`} />
                  Your browser does not support embedded video.
                </video>
              ) : (
                <Image
                  src={`${basePath}${item.src}`}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 600px) 88vw, (max-width: 900px) 90vw, 1080px"
                  loading={index < 2 ? "eager" : "lazy"}
                />
              )}
            </div>
            <figcaption>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><strong>{item.title}</strong><p>{item.caption}</p></div>
              {item.type === "image" ? <a href={`${basePath}${item.src}`} target="_blank" rel="noopener noreferrer">Open full size ↗</a> : null}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="media-gallery-dots" aria-label="Choose media item">
        {items.map((item, index) => (
          <button
            type="button"
            key={item.src}
            className={index === active ? "active" : ""}
            aria-label={`Show ${item.title}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
      <p className="media-gallery-hint">Swipe or scroll horizontally · Arrow keys supported · Video clips can be added to this same gallery</p>
    </div>
  );
}
