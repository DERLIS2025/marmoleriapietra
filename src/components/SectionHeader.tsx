import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  centered?: boolean;
};

export function SectionHeader({ eyebrow, title, description, action, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-5 flex flex-col gap-3 sm:mb-6 sm:gap-4 ${centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"}`}>
      <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow ? <p className="text-xs font-medium tracking-[0.18em] text-pietra-green">{eyebrow}</p> : null}
        <h2 className="mt-2 text-[1.65rem] font-semibold leading-tight text-pietra-black sm:text-3xl">{title}</h2>
        {description ? <p className="mt-2 text-sm leading-6 text-neutral-600 sm:mt-3 sm:text-base">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
