import { SymbolMark } from "./SymbolMark";


export function Imagine() {
  return (
    <section id="imagine" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-violet-gradient opacity-[0.06] blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <div className="text-sm text-violet mb-3 flex items-center gap-2">
            <SymbolMark className="text-base" /> Imagine
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient">
            Create anything<br />you can describe.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Imagine is Luna's built-in generation engine. Just type <span className="text-foreground font-medium">"Imagine"</span> followed by your idea inside Luna on your iPhone — sketch ideas, brand concepts, illustrations, and photoreal scenes in a single conversation.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {gallery.map((g, i) => (
            <div
              key={g.label}
              className={`aspect-square rounded-2xl bg-gradient-to-br ${g.grad} relative overflow-hidden group`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-0 group-hover:opacity-90 transition">
                <SymbolMark />
              </div>
              <div className="absolute bottom-2 left-2 text-[11px] font-medium glass rounded-full px-2 py-0.5">
                {g.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
