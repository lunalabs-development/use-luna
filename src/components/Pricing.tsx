import { SymbolMark } from "./SymbolMark";

const tiers = [
  {
    name: "Free",
    price: "$0",
    sub: "Get started",
    features: ["Basic AI access", "Limited Imagine generations", "Standard performance"],
  },
  {
    name: "Pro",
    price: "$12",
    sub: "per month",
    features: ["Unlimited conversations", "Advanced AI capabilities", "Higher image limits", "Priority performance"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    sub: "Talk to us",
    features: ["Custom deployment", "Team management", "Enhanced security", "Dedicated support"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient">Simple pricing.</h2>
          <p className="mt-4 text-muted-foreground text-lg">Start free. Upgrade when you're ready.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-3xl p-8 relative ${
                t.highlight ? "glass-strong glow border-violet/40" : "glass"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-8 text-xs bg-violet-gradient text-primary-foreground rounded-full px-3 py-1 font-medium">
                  Most popular
                </div>
              )}
              <div className="font-display text-lg font-semibold">{t.name}</div>
              <div className="mt-4 flex items-baseline gap-2">
                <div className="text-5xl font-display font-bold">{t.price}</div>
                <div className="text-xs text-muted-foreground">{t.sub}</div>
              </div>
              <ul className="mt-7 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <SymbolMark className="text-sm mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-full py-3 font-medium transition ${
                  t.highlight
                    ? "bg-violet-gradient text-primary-foreground hover:opacity-90"
                    : "glass hover:bg-secondary/60"
                }`}
              >
                {t.name === "Enterprise" ? "Contact sales" : "Get " + t.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
