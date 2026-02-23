import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={`${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-xl"} mb-10 sm:mb-14`}
    >
      <p className="text-sm font-medium text-primary-400 mb-3">{label}</p>
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${light ? "text-white" : "text-dark-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${light ? "text-dark-400" : "text-dark-500"}`}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
