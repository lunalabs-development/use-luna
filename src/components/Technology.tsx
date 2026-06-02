import { SymbolMark } from "./SymbolMark";

export function Technology() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient">
            Built for speed.<br />Designed for creativity.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            A purpose-built model stack with on-device acceleration, low-latency streaming, and a privacy-first
            architecture. The result: instant answers, fluid generation, and a system that feels like part of you.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
            {[
              ["<200ms", "First token"],
              ["10×", "Faster image gen"],
              ["100%", "On-device by default"],
              ["∞", "Context that learns"],
            ].map(([k, v]) => (
              <div key={v} className="glass rounded-2xl p-4">
                <div className="text-2xl font-display text-violet-gradient font-bold">{k}</div>
                <div className="text-xs text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square max-w-md mx-auto">
          {/* network viz */}
          <div className="absolute inset-0 rounded-full bg-violet-gradient blur-3xl opacity-20 animate-pulse-glow" />
          <div className="absolute inset-8 rounded-full border border-violet/30 animate-spin-slow" />
          <div className="absolute inset-16 rounded-full border border-violet/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
          <div className="absolute inset-24 rounded-full border border-violet/10 animate-spin-slow" />
          <div className="absolute inset-0 flex items-center justify-center text-7xl animate-pulse-glow">
            <SymbolMark />
          </div>
          {[
            { x: "10%", y: "20%" },
            { x: "85%", y: "30%" },
            { x: "75%", y: "80%" },
            { x: "15%", y: "75%" },
            { x: "50%", y: "5%" },
            { x: "95%", y: "60%" },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-float-slow"
              style={{ left: p.x, top: p.y, animationDelay: `${i * 0.7}s` }}
            >
              <SymbolMark />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
