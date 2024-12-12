import { Card, CardContent } from "@/components/ui/card";

export default function TokenInfo() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-light text-white/80 tracking-wide">
            Token Metrics
          </h2>
          <p className="text-sm font-light text-white/40 tracking-wide">
            Real-time data
          </p>
        </div>
        <div className="px-3 py-1 rounded-full bg-emerald-400/5 border border-emerald-400/10">
          <p className="text-xs font-light text-emerald-400/80">Live</p>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-white/[0.01] border-white/[0.05] hover:border-white/[0.08] transition-colors">
            <CardContent className="p-4">
              <p className="text-sm font-light text-white/40 tracking-wide">
                Supply
              </p>
              <p className="text-2xl font-extralight text-white/90 mt-1">1M</p>
            </CardContent>
          </Card>
          <Card className="bg-white/[0.01] border-white/[0.05] hover:border-white/[0.08] transition-colors">
            <CardContent className="p-4">
              <p className="text-sm font-light text-white/40 tracking-wide">
                Price
              </p>
              <p className="text-2xl font-extralight text-white/90 mt-1">$10</p>
            </CardContent>
          </Card>
          <Card className="bg-white/[0.01] border-white/[0.05] hover:border-white/[0.08] transition-colors">
            <CardContent className="p-4">
              <p className="text-sm font-light text-white/40 tracking-wide">
                Cap
              </p>
              <p className="text-2xl font-extralight text-white/90 mt-1">
                $10M
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/[0.01] border-white/[0.05] hover:border-white/[0.08] transition-colors">
          <CardContent className="p-4 space-y-4">
            <div>
              <p className="text-sm font-light text-white/40 tracking-wide">
                Contract
              </p>
              <p className="text-sm font-light text-white/60 font-mono mt-1">
                0x1234...7890
              </p>
            </div>
            <div className="flex gap-8">
              <div>
                <p className="text-sm font-light text-white/40 tracking-wide">
                  Network
                </p>
                <p className="text-sm font-light text-white/60 mt-1">ETH</p>
              </div>
              <div>
                <p className="text-sm font-light text-white/40 tracking-wide">
                  Type
                </p>
                <p className="text-sm font-light text-white/60 mt-1">ERC-20</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
