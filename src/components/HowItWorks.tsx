import { SymbolMark } from "./SymbolMark";

const steps = [
  { n: "01", title: "Ask Luna", body: "Type or speak your request. Luna understands context and nuance." },
  { n: "02", title: "Create with Imagine", body: "Generate images, ideas, and content instantly in the same thread." },
  { n: "03", title: "Refine & share", body: "Continue the conversation until the result matches your vision." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient">How it works</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            One assistant, one conversation. From first idea to finished output.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="glass rounded-3xl p-7 relative overflow-hidden group hover:-translate-y-1 transition"
            >
              <div className="absolute -right-6 -top-6 text-7xl opacity-[0.07] group-hover:opacity-20 transition">
                <SymbolMark glow={false} />
              </div>
              <div className="text-xs text-violet font-mono mb-4">{s.n}</div>
              <div className="text-xl font-display font-semibold mb-2">{s.title}</div>
              <p className="text-sm text-muted-foreground">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-8 rounded-full glass-strong items-center justify-center text-violet z-10 hidden">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
