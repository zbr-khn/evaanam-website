"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ── the curved row ──────────────────────────────────────────────
 * Continuous 3D Cylindrical Curved Horizon Stream
 * Luxury biomolecular & spatial curved row with authentic brand deployment
 * visuals curving around the viewport in real-time.
 * ─────────────────────────────────────────────────────────────── */

const SLICES = 16;
const CAMERA = 1.6;

function arc(bend: number) {
  return (CAMERA - 1 + Math.cos(bend)) / (2 * CAMERA * Math.sin(bend));
}

const MAX_WIDTH = 55;

function measure(
  width: number,
  height: number,
  tile: number,
  aspect: number,
  gap: number,
  bend: number,
) {
  const safeW = Math.max(width, 360);
  const safeH = Math.max(height, 400);
  const h = Math.min(
    (tile / 100) * safeH,
    ((MAX_WIDTH / 100) * safeW) / aspect,
  );
  const radius = safeW * arc(bend);
  const deg = (rad: number) => (rad * 180) / Math.PI;
  const unit = deg(h / radius);
  const pitch = (aspect + gap / 100) * unit;
  const limit = deg(bend) + (aspect * unit) / 2;

  // Ensure enough columns to populate the entire horizon loop without empty spaces
  const minCols = Math.ceil((2 * limit) / pitch);
  const fullCols = Math.ceil(360 / pitch);
  const columns = Math.min(24, Math.max(8, Math.max(minCols + 2, Math.min(fullCols, 12))));

  const round = (n: number) => +n.toFixed(4);
  const sweep = round((columns * pitch) / 2);

  // Calculate safe hide percentage for off-screen transit behind camera
  const rawHide = +(((sweep - limit) / (2 * sweep || 1)) * 100).toFixed(3);
  const hide = Math.max(2, Math.min(35, rawHide));

  return {
    columns,
    sweep,
    unit: round(unit),
    limit: round(Math.min(sweep, limit)),
    hide,
    height: Math.round(h),
    radius: Math.round(radius),
  };
}

export type TiltedGridImage = {
  src: string;
  alt?: string;
};

export type TiltedGridHeroProps = {
  images: TiltedGridImage[];
  speed?: number;
  tileHeight?: number;
  aspectRatio?: number;
  gap?: number;
  axis?: number;
  curve?: number;
  fade?: number;
  children?: React.ReactNode;
  className?: string;
};

export function TiltedGridHero({
  images,
  speed = 4,
  tileHeight = 32,
  aspectRatio = 16 / 9,
  gap = 6,
  axis = 50,
  curve = 72,
  fade = 12,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & TiltedGridHeroProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const orbit = `tgh-o-${id}`;
  const tile = `tgh-t-${id}`;
  const bend = (Math.min(85, Math.max(10, curve)) * Math.PI) / 180;

  const [layout, setLayout] = React.useState(() =>
    measure(
      typeof window !== "undefined" ? window.innerWidth : 1440,
      typeof window !== "undefined" ? window.innerHeight : 850,
      tileHeight,
      aspectRatio,
      gap,
      bend,
    ),
  );

  const [shown, setShown] = React.useState<Record<number, number>>({});

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measureEl = () => {
      const rect = el.getBoundingClientRect();
      const w = rect.width || el.offsetWidth || window.innerWidth;
      const h = rect.height || el.offsetHeight || window.innerHeight;
      if (w > 0 && h > 0) {
        const next = measure(w, h, tileHeight, aspectRatio, gap, bend);
        setLayout((prev) =>
          prev.columns === next.columns &&
          prev.sweep === next.sweep &&
          prev.unit === next.unit &&
          prev.height === next.height
            ? prev
            : next,
        );
      }
    };

    measureEl();
    const ro = new ResizeObserver(measureEl);
    ro.observe(el);
    window.addEventListener("resize", measureEl);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measureEl);
    };
  }, [tileHeight, aspectRatio, gap, bend]);

  // Pre-fetch images
  React.useEffect(() => {
    if (!images || images.length === 0) return;
    for (const img of images) {
      if (img?.src) {
        const i = new Image();
        i.src = img.src;
      }
    }
  }, [images]);

  const { columns, sweep, unit, limit, hide, height: actualH, radius: actualR } = layout;

  const tileH = actualH || 260;
  const radiusVal = actualR || 900;
  const persVal = +(radiusVal * CAMERA).toFixed(2);

  const u = (n: number) => `${+(n * tileH).toFixed(2)}px`;
  const turn = (deg: number) =>
    `translateZ(${radiusVal}px) rotateY(${+deg.toFixed(4)}deg) translateZ(-${radiusVal}px)`;

  const duration = columns * speed;
  const mask = `linear-gradient(90deg, transparent, #000 ${fade}%, #000 ${
    100 - fade
  }%, transparent)`;

  const css =
    `@keyframes ${orbit} {` +
    `from { transform: ${turn(-sweep)}; }` +
    `to { transform: ${turn(sweep)}; }` +
    `0%, ${hide}%, ${100 - hide}%, 100% { opacity: 0; }` +
    `${hide + 0.2}%, ${100 - hide - 0.2}% { opacity: 1; }` +
    `}` +
    `@media(prefers-reduced-motion:reduce){ .${tile} { animation-play-state: paused !important; } }`;

  const share = aspectRatio / SLICES;

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden select-none", className)}
      {...props}
    >
      <style>{css}</style>

      {/* 3D Curved Cylindrical Horizon Arc */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: 1,
          perspective: `${persVal}px`,
          perspectiveOrigin: `50% ${axis}%`,
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      >
        {Array.from({ length: columns }, (_, t) => {
          const first = columns - 1 - t;
          const img = images && images.length > 0 ? images[(shown[t] ?? first) % images.length] : null;

          return (
            <div
              key={t}
              className={cn(tile, "absolute will-change-transform")}
              style={{
                left: `calc(50% - ${u(aspectRatio / 2)})`,
                top: `calc(${axis}% - ${u(0.5)})`,
                width: u(aspectRatio),
                height: u(1),
                transformStyle: "preserve-3d",
                animation: `${orbit} ${duration}s linear ${-t * speed}s infinite`,
              }}
              onAnimationIteration={(e) => {
                const lap = Math.round(e.elapsedTime / duration);
                setShown((prev) => {
                  const next = lap * columns + first;
                  return prev[t] === next ? prev : { ...prev, [t]: next };
                });
              }}
            >
              {Array.from({ length: SLICES }, (_, k) => (
                <div
                  key={k}
                  className={cn(
                    "absolute top-0 overflow-hidden bg-night-950/90 shadow-2xl ring-1 ring-white/10 dark:ring-amber-500/20",
                    k === 0 && "rounded-l-xl",
                    k === SLICES - 1 && "rounded-r-xl",
                  )}
                  style={{
                    left: u((aspectRatio - share) / 2),
                    width: k === SLICES - 1 ? u(share) : `calc(${u(share)} + 1.2px)`,
                    height: u(1),
                    transform: turn(
                      (aspectRatio / 2 - (k + 0.5) * share) * unit,
                    ),
                  }}
                >
                  {img ? (
                    <img
                      src={img.src}
                      alt={k === 0 ? (img.alt ?? "") : ""}
                      draggable={false}
                      className="absolute top-0 max-w-none object-cover brightness-[0.92] contrast-[1.08] saturate-[1.05]"
                      style={{
                        left: u(-k * share),
                        width: u(aspectRatio),
                        height: u(1),
                      }}
                    />
                  ) : null}

                  {/* High-end subtle glass gradient sheen overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10 pointer-events-none" />
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {children}
    </div>
  );
}

export default TiltedGridHero;
