interface GlowProps {
  className?: string;
}

export default function Glow({
  className = "",
}: GlowProps) {
  return (
    <div
      className={`
        absolute
        rounded-full
        bg-blue-500/20
        blur-[120px]
        ${className}
      `}
    />
  );
}