import { SymbolMark } from "./SymbolMark";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-hero-gradient">
      {/* particles */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-0">
        {[
          { l: "10%", t: "20%", s: "text-3xl", d: "0s" },
          { l: "85%", t: "15%", s: "text-2xl", d: "1s" },
          { l: "75%", t: "70%", s: "text-4xl", d: "2s" },
          { l: "15%", t: "75%", s: "text-2xl", d: "3s" },
          { l: "50%", t: "10%", s: "text-xl", d: "0.5s" },
        ].map((p, i) => (
          <span
            key={i}
            className={`absolute ${p.s} opacity-30 animate-float-slow`}
            style={{ left: p.l, top: p.t, animationDelay: p.d }}
          >
            <SymbolMark />
          </span>
        ))}
      </div>

      {/* huge background symbol */}
      <div className="pointer-events-none absolute -right-32 top-1/4 opacity-[0.08] animate-spin-slow text-[28rem] hidden lg:block">
        🫟
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-6">
            <span className="size-1.5 rounded-full bg-violet animate-pulse-glow" />
            Now available on iPhone
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-gradient">
            AI That<br />Understands You.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Luna helps you think, create, learn, and get things done. All from one intelligent assistant.
          </p>
          <div className="mt-10 flex flex-wrap gap-4" id="download">
            <a
              href="#luna"
              className="rounded-full bg-violet-gradient text-primary-foreground font-medium px-7 py-3.5 glow hover:opacity-90 transition"
            >
              Download Luna
            </a>
            <a
              href="#how"
              className="rounded-full glass font-medium px-7 py-3.5 hover:bg-secondary/60 transition"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 bg-violet-gradient blur-3xl opacity-30 animate-pulse-glow" />
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
