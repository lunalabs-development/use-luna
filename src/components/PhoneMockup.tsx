import { SymbolMark } from "./SymbolMark";

export function PhoneMockup() {
  return (
    <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] rounded-[3rem] glass-strong p-3 soft-glow">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-background rounded-full z-20" />
      <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-gradient-to-b from-background to-card">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative h-full flex flex-col p-4 pt-10 gap-3 text-xs">
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <SymbolMark className="text-base" /> Luna
          </div>

          <div className="self-end max-w-[80%] rounded-2xl rounded-br-md bg-violet-gradient px-3 py-2 text-primary-foreground">
            Plan a weekend trip to Lisbon.
          </div>

          <div className="self-start max-w-[85%] rounded-2xl rounded-bl-md glass px-3 py-2">
            Here's a 2-day plan with tastings, viewpoints, and an Alfama walk. Want me to book stays?
          </div>

          <div className="self-end max-w-[80%] rounded-2xl rounded-br-md bg-violet-gradient px-3 py-2 text-primary-foreground">
            Imagine a sunset over Lisbon rooftops.
          </div>

          <div className="self-start max-w-[85%] rounded-2xl rounded-bl-md glass p-2">
            <div className="aspect-square w-full rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.7_0.22_30),oklch(0.4_0.2_300),oklch(0.2_0.1_270))]" />
              <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-70">
                <SymbolMark />
              </div>
            </div>
            <div className="text-[10px] text-muted-foreground mt-1.5 px-1">Generated with Imagine</div>
          </div>

          <div className="mt-auto glass rounded-full px-3 py-2 flex items-center gap-2 text-muted-foreground">
            <span className="size-1.5 rounded-full bg-violet animate-pulse-glow" />
            Ask Luna anything…
          </div>
        </div>
      </div>
    </div>
  );
}
