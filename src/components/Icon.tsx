type IconProps = { name: "search" | "heart" | "bag" | "menu" | "x" | "whatsapp" | "arrow" | "star"; className?: string };

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const common = { className, fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" };
  if (name === "search") return <svg {...common}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
  if (name === "heart") return <svg {...common}><path d="M20.8 4.6c-1.8-1.7-4.7-1.6-6.4.2L12 7.2 9.6 4.8C7.9 3 5 2.9 3.2 4.6 1.2 6.5 1.3 9.7 3.3 11.7L12 20l8.7-8.3c2-2 2.1-5.2.1-7.1Z" /></svg>;
  if (name === "bag") return <svg {...common}><path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></svg>;
  if (name === "menu") return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
  if (name === "x") return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
  if (name === "whatsapp") return <svg {...common}><path d="M5 19.2 6.1 16A7.6 7.6 0 1 1 9 18.4l-4 1Z" /><path d="M9.4 8.6c.2 3 2.1 4.9 5 6 .8-.3 1.2-.8 1.4-1.5l-1.8-1c-.4.4-.7.6-1.1.6-.9-.3-1.7-1.1-2.2-2.2 0-.4.2-.7.6-1.1l-1-1.8c-.7.2-1.2.5-1.5 1Z" /></svg>;
  if (name === "arrow") return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.8 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5-4.7-4.6 6.5-.9L12 2.8Z" /></svg>;
}
