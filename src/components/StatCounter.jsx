import React, { useState, useEffect, useRef } from "react";
import { COMPANY_INFO } from "../data/evaanamData";

function SingleStat({ value, suffix, label, desc, isLast }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1000; // 1 second (between 800ms and 1.2s)
          const startTime = performance.now();
          const targetValue = value;

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentNumber = Math.floor(easeProgress * targetValue);

            setCount(currentNumber);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetValue);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, value]);

  return (
    <div
      ref={elementRef}
      className={`flex flex-col justify-between py-8 px-6 sm:px-8 transition-colors duration-300 ${
        !isLast ? "border-b lg:border-b-0 lg:border-r border-chocolate-700/10" : ""
      }`}
    >
      <div>
        <div className="flex items-baseline space-x-1 mb-2">
          <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-chocolate-950 tracking-tight">
            {count}
          </span>
          <span className="font-serif text-2xl sm:text-3xl text-bronze-500 font-light">
            {suffix}
          </span>
        </div>
        <p className="text-xs uppercase tracking-[0.18em] font-semibold text-chocolate-700 font-sans mb-1.5">
          {label}
        </p>
      </div>
      {desc && (
        <p className="text-[12px] text-chocolate-500 font-light leading-relaxed mt-2">
          {desc}
        </p>
      )}
    </div>
  );
}

export default function StatCounter({ className = "", light = false }) {
  return (
    <section
      aria-label="EVAANAM Operational Statistics"
      className={`border-y border-chocolate-700/10 ${
        light ? "bg-cream-100/70" : "bg-cream-100"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <SingleStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              desc={stat.desc}
              isLast={idx === COMPANY_INFO.stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
