import Image from "next/image";

/**
 * A real Zyon app screen in a modern phone body: graphite rim, black bezel,
 * the camera island. Screens are 1000x2173 captures from the simulators.
 */
export default function DeviceFrame({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 320px, 60vw",
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[13.5%/6.2%] bg-[linear-gradient(140deg,#4a4e4c_0%,#1b1e1c_22%,#0d0f0e_50%,#2a2d2b_78%,#121413_100%)] p-[2.4%] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.75),inset_0_0_0_1px_rgba(255,255,255,0.08)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[11.5%/5.3%] bg-black p-[2.2%]">
        <div className="relative overflow-hidden rounded-[9.8%/4.5%] bg-black">
          <Image src={src} alt={alt} width={1000} height={2173} priority={priority} sizes={sizes} className="block h-auto w-full" />
          <span aria-hidden="true" className="absolute left-1/2 top-[1.6%] h-[3.3%] w-[31%] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
      {/* Side buttons */}
      <span aria-hidden="true" className="absolute -left-[1.2%] top-[22%] h-[6%] w-[1.2%] rounded-l bg-[#1d201e]" />
      <span aria-hidden="true" className="absolute -left-[1.2%] top-[31%] h-[10%] w-[1.2%] rounded-l bg-[#1d201e]" />
      <span aria-hidden="true" className="absolute -right-[1.2%] top-[27%] h-[14%] w-[1.2%] rounded-r bg-[#1d201e]" />
    </div>
  );
}
