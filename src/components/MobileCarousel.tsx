import type { ReactNode } from "react";

type MobileCarouselProps = {
  children: ReactNode;
  className?: string;
};

export function MobileCarousel({ children, className = "" }: MobileCarouselProps) {
  return (
    <div className={`no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-1 ${className}`}>
      {children}
    </div>
  );
}
