import { GithubIcon, TwitterIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="py-6 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white/80 text-base font-extralight tracking-wider">
          sn<span className="font-normal">0</span>w
        </div>
        <div className="flex items-center gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
            <div className="w-1 h-1 rounded-full bg-emerald-400/80 animate-pulse"></div>
            <p className="text-[13px] font-light text-white/50">AI Active</p>
          </div>
          <a
            href="https://x.com/sn0w_agent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light text-white/40 hover:text-white/60 transition-colors flex items-center gap-1"
          >
            <TwitterIcon className="w-4 h-4" />
            <span>X</span>
          </a>
          <a
            href="https://github.com/ai16z/eliza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light text-white/40 hover:text-white/60 transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
