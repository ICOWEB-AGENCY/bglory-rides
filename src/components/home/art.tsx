import Image from "next/image";

/** The flat sedan the Zyon app draws for each ride class, as a vector. bodyClass sets its fill per theme. */
export function Sedan({ bodyClass, className = "" }: { bodyClass: string; className?: string }) {
  return (
    <svg viewBox="0 0 220 96" className={className} aria-hidden="true">
      <path
        d="M14 66c0-9 6-15 15-17l30-6 26-18c6-4 13-6 21-6h34c9 0 17 3 24 9l17 15 17 3c9 2 15 8 15 17v9c0 4-3 7-7 7H21c-4 0-7-3-7-7v-6z"
        className={bodyClass}
      />
      <circle cx="60" cy="80" r="13" fill="#11161b" />
      <circle cx="166" cy="80" r="13" fill="#11161b" />
    </svg>
  );
}

/** A real Zyon app screen inside a phone frame. */
export function Phone({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative rounded-[2.4rem] bg-[#0b0f0d] p-[7px] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55)] ${className}`}>
      <div className="relative overflow-hidden rounded-[2rem] bg-white">
        <Image src={src} alt={alt} width={720} height={1564} priority={priority} className="block h-auto w-full" sizes="(min-width: 1024px) 300px, 60vw" />
      </div>
    </div>
  );
}
