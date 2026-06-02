import { SymbolMark } from "./SymbolMark";

const links = [
  { href: "#luna", label: "Luna" },
  { href: "#imagine", label: "Imagine" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4">
      <nav className="glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 sm:gap-6 max-w-3xl w-full justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-sm sm:text-base shrink-0">
          <SymbolMark className="text-xl" />
          <span>Luna Labs</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#download"
          className="rounded-full bg-violet-gradient text-primary-foreground text-xs sm:text-sm font-medium px-4 py-2 soft-glow hover:opacity-90 transition"
        >
          Download
        </a>
      </nav>
    </header>
  );
}
