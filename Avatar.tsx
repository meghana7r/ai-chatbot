import { AvatarProps } from "@/types";
import { cn } from "@/utils";

const sizeMap = {
  sm: "w-6 h-6 text-xs",
  md: "w-8 h-8 text-xs",
  lg: "w-10 h-10 text-sm",
};

export default function Avatar({ role, src, size = "md" }: AvatarProps) {
  const isBot = role === "assistant";

  if (src) {
    return (
      <img
        src={src}
        alt={isBot ? "AI assistant" : "User"}
        className={cn("rounded-full object-cover flex-shrink-0", sizeMap[size])}
      />
    );
  }

  return (
    <div
      className={cn(
        "rounded-full flex-shrink-0 flex items-center justify-center font-bold select-none",
        sizeMap[size]
      )}
      style={{
        background: isBot
          ? "linear-gradient(135deg, var(--color-brand) 0%, var(--color-brand-light) 100%)"
          : "#64748b",
        color: "#ffffff",
      }}
      title={isBot ? "AI assistant" : "You"}
      aria-label={isBot ? "AI assistant" : "User"}
    >
      {isBot ? "AI" : "Me"}
    </div>
  );
}
