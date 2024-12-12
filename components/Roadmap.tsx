import { Card, CardContent } from "@/components/ui/card";

export default function Roadmap() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-light text-white/80 tracking-wide">
            Development
          </h2>
          <p className="text-sm font-light text-white/40 tracking-wide">
            Project timeline
          </p>
        </div>
        <div className="px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05]">
          <p className="text-xs font-light text-white/60">2024</p>
        </div>
      </div>

      <div className="grid gap-4">
        <Card className="bg-white/[0.01] border-white/[0.05] hover:border-white/[0.08] transition-colors group">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
                <span className="text-xs font-extralight text-white/60">1</span>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-light text-white/80 tracking-wide group-hover:text-white/90 transition-colors">
                    News Aggregation
                  </h3>
                  <p className="text-sm font-light text-white/40 mt-1">
                    Real-time crypto news and social media analysis
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-white/[0.02] text-white/50 text-xs rounded-full">
                    News Collection
                  </span>
                  <span className="px-2 py-0.5 bg-white/[0.02] text-white/50 text-xs rounded-full">
                    X Integration
                  </span>
                  <span className="px-2 py-0.5 bg-white/[0.02] text-white/50 text-xs rounded-full">
                    Sentiment Analysis
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/[0.01] border-white/[0.05] hover:border-white/[0.08] transition-colors group">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
                <span className="text-xs font-extralight text-white/60">2</span>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-light text-white/80 tracking-wide group-hover:text-white/90 transition-colors">
                    Enhanced Analysis
                  </h3>
                  <p className="text-sm font-light text-white/40 mt-1">
                    Advanced market insights and predictions
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-white/[0.02] text-white/50 text-xs rounded-full">
                    Pattern Recognition
                  </span>
                  <span className="px-2 py-0.5 bg-white/[0.02] text-white/50 text-xs rounded-full">
                    Trend Forecasting
                  </span>
                  <span className="px-2 py-0.5 bg-white/[0.02] text-white/50 text-xs rounded-full">
                    Market Analysis
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/[0.01] border-white/[0.05] hover:border-white/[0.08] transition-colors group">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
                <span className="text-xs font-extralight text-white/60">3</span>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-light text-white/80 tracking-wide group-hover:text-white/90 transition-colors">
                    Portfolio Management
                  </h3>
                  <p className="text-sm font-light text-white/40 mt-1">
                    AI-driven portfolio optimization tools
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-white/[0.02] text-white/50 text-xs rounded-full">
                    Auto Rebalancing
                  </span>
                  <span className="px-2 py-0.5 bg-white/[0.02] text-white/50 text-xs rounded-full">
                    Risk Assessment
                  </span>
                  <span className="px-2 py-0.5 bg-white/[0.02] text-white/50 text-xs rounded-full">
                    Performance Analytics
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
