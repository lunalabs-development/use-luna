import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  glow?: boolean;
}

export function SymbolMark({ className, glow = true }: Props) {
  return (
    <span
      className={cn("inline-block leading-none", className)}
      style={
        glow
          ? { filter: "drop-shadow(0 0 12px oklch(0.75 0.28 295 / 0.7))" }
          : undefined
      }
      aria-hidden
    >
      🫟
    </span>
  );
}
