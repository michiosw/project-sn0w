"use client";

import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Roadmap from "@/components/Roadmap";
import TokenInfo from "@/components/TokenInfo";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-white/10">
      <DynamicBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.02] to-black/[0.05]" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 container mx-auto px-4">
          <MainContent />
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 max-w-7xl mx-auto">
            <div className="backdrop-blur-2xl rounded-[32px] border border-white/[0.05] p-12 bg-white/[0.01] h-fit">
              <TokenInfo />
            </div>
            <div className="backdrop-blur-2xl rounded-[32px] border border-white/[0.05] p-12 bg-white/[0.01]">
              <Roadmap />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
