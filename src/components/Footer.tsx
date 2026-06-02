import { SymbolMark } from "./SymbolMark";

const columns = [
  { title: "Products", links: ["Luna", "Imagine", "Pricing"] },
  { title: "Company", links: ["About", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
  { title: "Social", links: ["Twitter / X", "Instagram", "LinkedIn"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 pt-20 pb-10 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1.5fr_repeat(4,1fr)] gap-10">
          <div>
            <div className="flex items-center gap-2 font-display font-semibold text-lg">
              <SymbolMark className="text-2xl" /> Luna Labs
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Intelligent tools that make advanced AI accessible to everyone.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{c.title}</div>
              <ul className="space-y-2 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-violet transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-muted-foreground">
          <div>© Luna Labs. All Rights Reserved.</div>
          <div className="flex items-center gap-2">
            <SymbolMark className="text-sm" /> Crafted with curiosity.
          </div>
        </div>
      </div>
    </footer>
  );
}
