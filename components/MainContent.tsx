"use client";

import { useState, useEffect } from "react";

const taglines = [
  "AI-Powered Market Intelligence",
  "Real-time Sentiment Analysis",
  "Predictive Trading Signals",
  "Cross-chain Data Analytics",
  "Automated Portfolio Management",
];

export default function MainContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[60vh] flex items-center justify-center mb-24">
      <div className="max-w-3xl w-full">
        <div className="space-y-12 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extralight text-white/90 tracking-tight leading-tight">
              Intelligence for the <br />
              <span className="font-light">Modern Market</span>
            </h1>
            <p className="h-6 text-base font-light text-white/50 tracking-wide">
              {taglines[currentIndex]}
            </p>
          </div>

          <div className="grid grid-cols-3 divide-x divide-white/[0.02]">
            <div className="px-8 py-4 space-y-1">
              <p className="text-2xl font-extralight text-white/90">24/7</p>
              <p className="text-xs font-light text-white/40 tracking-wide">
                Analysis
              </p>
            </div>
            <div className="px-8 py-4 space-y-1">
              <p className="text-2xl font-extralight text-white/90">100%</p>
              <p className="text-xs font-light text-white/40 tracking-wide">
                Automated
              </p>
            </div>
            <div className="px-8 py-4 space-y-1">
              <p className="text-2xl font-extralight text-white/90">0.1s</p>
              <p className="text-xs font-light text-white/40 tracking-wide">
                Response
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
