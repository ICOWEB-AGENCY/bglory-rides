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
  // Lime is kept for the one main action on a page.
  primary: "bg-lime text-ink hover:bg-primary-300",
  outline: "border border-white/25 text-white hover:border-white/60",
  dark: "bg-ink text-white hover:bg-black dark:bg-white dark:text-ink dark:hover:bg-dark-100",
  ghost: "border border-ink/20 text-ink hover:border-ink dark:border-white/25 dark:text-white dark:hover:border-white/60",
};

const sizes = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-sm sm:px-6",
  lg: "px-7 py-3.5 text-sm",
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
  const classes = `inline-flex w-full items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 sm:w-auto ${variants[variant]} ${sizes[size]} ${className}`;

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
