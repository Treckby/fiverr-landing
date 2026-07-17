import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className = "",
}: GradientTextProps) {
  return (
    <span
      className={`
        bg-gradient-to-r
        from-blue-600
        via-cyan-500
        to-indigo-600
        bg-clip-text
        text-transparent
        ${className}
      `}
    >
      {children}
    </span>
  );
}