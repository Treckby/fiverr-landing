interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/80
        bg-white/90
        backdrop-blur-xl
        p-8
        shadow-sm
        transition-all
        duration-500

        hover:-translate-y-3
        hover:shadow-2xl
        hover:border-blue-200

        ${className}
      `}
    >
      {children}
    </div>
  );
}