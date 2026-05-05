type StoneVisualProps = {
  tone: string;
  className?: string;
  label?: string;
};

export function StoneVisual({ tone, className = "", label }: StoneVisualProps) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${tone} ${className}`} aria-label={label}>
      <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_20%_20%,white_0_1px,transparent_2px),linear-gradient(135deg,transparent_45%,rgba(255,255,255,.75)_47%,transparent_49%),linear-gradient(25deg,transparent_52%,rgba(255,255,255,.35)_53%,transparent_56%)]" />
      <div className="absolute -right-12 top-8 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
      <div className="absolute bottom-5 left-5 h-px w-2/3 rotate-[-10deg] bg-white/60" />
    </div>
  );
}
