"use client";

import { ButtonProps } from "@/types";
import { cn } from "@/utils";

const variantStyles: Record<string, string> = {
  primary:
    "text-white hover:opacity-90 active:scale-95",
  secondary:
    "bg-white hover:bg-gray-50 active:scale-95",
  ghost:
    "border-transparent bg-transparent hover:bg-gray-100 active:scale-95",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-xl gap-2",
  lg: "px-7 py-3.5 text-base rounded-xl gap-2.5",
};

export default function Button({
  label,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className,
  type = "button",
}: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center font-semibold border transition-all duration-150 select-none",
        variantStyles[variant],
        sizeStyles[size],
        (disabled || loading) && "opacity-50 cursor-not-allowed",
        className
      )}
      style={
        isPrimary
          ? {
              background:
                "linear-gradient(135deg, var(--color-brand) 0%, var(--color-brand-dark) 100%)",
              borderColor: "transparent",
              boxShadow: "var(--shadow-sm)",
            }
          : {
              borderColor: "var(--border-color)",
              color: "var(--text-secondary)",
            }
      }
    >
      {loading ? (
        <svg
          className="animate-spin"
          style={{ width: 14, height: 14 }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      ) : null}
      {label}
    </button>
  );
}
