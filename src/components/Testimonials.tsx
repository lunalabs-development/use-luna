import { SymbolMark } from "./SymbolMark";

const items = [
  { name: "Maya R.", role: "Design student", body: "Luna helps me brainstorm, then Imagine sketches the idea before I finish the sentence." },
  { name: "Jordan K.", role: "Indie creator", body: "I've replaced four apps with Luna. It's the only assistant that actually feels personal." },
  { name: "Priya S.", role: "Product designer", body: "Imagine's quality is wild. I prototype brand directions in minutes, not days." },
  { name: "Daniel O.", role: "iOS developer", body: "Sub-200ms responses. It feels like the model lives on my phone." },
  { name: "Ava M.", role: "Founder", body: "Our team uses Luna for everything from research to image assets. It just works." },
  { name: "Sam T.", role: "Writer", body: "The conversations stay sharp. It remembers what matters and forgets what doesn't." },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient">Loved by curious minds.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((t) => (
            <figure
              key={t.name}
              className="glass rounded-3xl p-6 hover:-translate-y-1 hover:soft-glow transition"
            >
              <SymbolMark className="text-xl" />
              <blockquote className="mt-4 text-sm leading-relaxed">"{t.body}"</blockquote>
              <figcaption className="mt-5 text-xs">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
