import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-7 py-4 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:-translate-y-1 hover:bg-blue-700",

    secondary:
      "border border-slate-300 bg-white hover:border-blue-600 hover:text-blue-600",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}