type PietraImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function PietraImage({ src, alt, className = "" }: PietraImageProps) {
  return <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} loading="lazy" />;
}
