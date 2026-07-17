import { LucideIcon } from "lucide-react";

interface FloatingBadgeProps {
  icon: LucideIcon;
  title: string;
  value: string;
  className?: string;
}

export default function FloatingBadge({
  icon: Icon,
  title,
  value,
  className = "",
}: FloatingBadgeProps) {
  return (
    <div
      className={`
        absolute
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-slate-200
        bg-white/90
        px-4
        py-3
        shadow-xl
        backdrop-blur-xl
        ${className}
      `}
    >
      <div className="rounded-xl bg-blue-100 p-2">
        <Icon
          size={20}
          className="text-blue-600"
        />
      </div>

      <div>
        <p className="text-xs text-slate-500">
          {title}
        </p>

        <h4 className="font-bold text-slate-900">
          {value}
        </h4>
      </div>
    </div>
  );
}