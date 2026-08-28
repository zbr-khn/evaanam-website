import React, { useEffect, useRef } from "react";
import { COMPANY_INFO } from "../data/evaanamData";

function SingleStat({ value, suffix, label, desc }) {
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const startCountAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const duration = 2400; // 2.4s smooth, sustained count-up
      const startTime = performance.now();
      const targetValue = value;

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth Ease-Out Cubic curve: 1 - (1 - t)^3
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentNumber = Math.round(easeProgress * targetValue);

        if (numberRef.current) {
          numberRef.current.textContent = currentNumber;
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else if (numberRef.current) {
          numberRef.current.textContent = targetValue;
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCountAnimation();
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-between py-6 px-4 sm:px-6 transition-colors duration-400"
    >
      <div>
        <div className="flex items-baseline space-x-1 mb-1.5">
          <span
            ref={numberRef}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-chocolate-950 dark:text-cream-50 tracking-tight will-change-contents font-mono sm:font-serif"
          >
            0
          </span>
          <span className="font-serif text-2xl sm:text-3xl text-bronze-500 dark:text-bronze-400 font-light">
            {suffix}
          </span>
        </div>
        <p className="text-xs uppercase tracking-[0.18em] font-semibold text-chocolate-700 dark:text-cream-200 font-sans mb-1">
          {label}
        </p>
      </div>
      {desc && (
        <p className="text-[12px] text-chocolate-500 dark:text-night-muted font-light leading-relaxed mt-1.5">
          {desc}
        </p>
      )}
    </div>
  );
}

export default function StatCounter({ className = "" }) {
  return (
    <section
      aria-label="EVAANAM Operational Statistics"
      className={`py-8 bg-transparent text-chocolate-700 dark:text-cream-100 transition-colors duration-400 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.stats.map((stat) => (
            <SingleStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              desc={stat.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
