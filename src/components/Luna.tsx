import { SymbolMark } from "./SymbolMark";

const features = [
  "Natural conversations",
  "Voice & text interaction",
  "Personalized assistance",
  "Learning support",
  "Research tools",
  "Creative writing",
  "Task management",
  "Instant answers",
];

const samples = [
  { q: "Summarize this PDF for me.", a: "Done — 5 key points, 2 action items, and a TL;DR ready." },
  { q: "Help me draft a polite decline.", a: "Here are three versions: warm, neutral, and brief." },
  { q: "Explain transformers like I'm 12.", a: "Imagine a group of friends passing notes…" },
];

export function Luna() {
  return (
    <section id="luna" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <div className="text-sm text-violet mb-3 flex items-center gap-2">
            <SymbolMark className="text-base" /> Luna
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient">
            Meet Luna.<br />Your AI assistant for everything.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Built natively for iPhone. Fast, private, and tuned to how you actually think and work.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
          <div className="grid grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="glass rounded-2xl p-4 text-sm hover:soft-glow transition">
                <SymbolMark className="text-sm mr-2 opacity-80" />
                {f}
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {samples.map((s, i) => (
              <div key={i} className="glass-strong rounded-2xl p-5 hover:translate-x-1 transition">
                <div className="text-sm text-muted-foreground mb-2">You</div>
                <div className="font-medium">{s.q}</div>
                <div className="mt-4 text-sm text-violet flex items-center gap-2">
                  <SymbolMark className="text-base" /> Luna
                </div>
                <div className="mt-1 text-sm">{s.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
