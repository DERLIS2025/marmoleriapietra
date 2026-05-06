type PietraImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

export function PietraImage({ src, alt, className = "", loading = "lazy" }: PietraImageProps) {
  return <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} loading={loading} decoding="async" />;
}
