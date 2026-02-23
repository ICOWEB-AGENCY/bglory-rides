import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export default function Breadcrumb({ items, variant = "dark" }: BreadcrumbProps) {
  const isDark = variant === "dark";

  return (
    <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
      <ol
        className={`flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm ${
          isDark ? "text-dark-400" : "text-dark-500"
        }`}
      >
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 opacity-50 hover:opacity-100 transition-opacity"
          >
            <Home className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1 sm:gap-1.5">
            <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 opacity-30" />
            {item.href ? (
              <Link
                href={item.href}
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                {item.label}
              </Link>
            ) : (
              <span className="opacity-90 font-medium truncate max-w-[180px] sm:max-w-none">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
