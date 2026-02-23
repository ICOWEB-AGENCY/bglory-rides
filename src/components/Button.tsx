import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-primary-400 text-white hover:bg-primary-500 border-2 border-primary-400 hover:border-primary-500",
  outline:
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-dark-900",
  dark: "bg-dark-900 text-white border-2 border-dark-900 hover:bg-dark-800 hover:border-dark-800",
  ghost:
    "bg-transparent text-dark-900 border-2 border-dark-200 hover:border-dark-900",
};

const sizes = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-sm sm:px-6",
  lg: "px-6 py-3.5 text-base sm:px-8",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:scale-[1.03] hover:-translate-y-px active:scale-[0.97] ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={classes}
    >
      {children}
    </button>
  );
}
