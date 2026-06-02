const milestones = [
  { year: "2024", title: "Luna Labs founded", body: "A small team with a single goal: make AI feel personal." },
  { year: "2025", title: "Luna launches on iOS", body: "Our flagship assistant ships to iPhone with on-device intelligence." },
  { year: "2025", title: "Imagine arrives", body: "A native image generation engine, built directly into the conversation." },
  { year: "2026", title: "Luna for everyone", body: "Multi-platform support, enterprise tools, and developer APIs." },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient">About Luna Labs</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Luna Labs builds intelligent tools that make advanced AI accessible to everyone. Our goal is to
            create technology that feels natural, useful, and empowering.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet/40 to-transparent" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div
                key={m.year + m.title}
                className={`relative pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 ${
                  i % 2 ? "sm:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="absolute left-2.5 sm:left-1/2 top-2 -translate-x-1/2 size-3 rounded-full bg-violet glow" />
                <div className={i % 2 ? "sm:text-left sm:pl-12" : "sm:text-right sm:pr-12"}>
                  <div className="text-xs text-violet font-mono">{m.year}</div>
                  <div className="text-xl font-display font-semibold mt-1">{m.title}</div>
                </div>
                <div className={`text-sm text-muted-foreground mt-2 sm:mt-0 ${i % 2 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  {m.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
