// ─── ID Generation ──────────────────────────────────────────────────────────

/**
 * Generates a unique message ID using timestamp + random string.
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

// ─── Date & Time ────────────────────────────────────────────────────────────

/**
 * Formats a Date into a human-readable time string (e.g. "3:42 PM").
 */
export function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/**
 * Formats a Date into a short date string (e.g. "May 19").
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString([], { month: "short", day: "numeric" });
}

// ─── String ─────────────────────────────────────────────────────────────────

/**
 * Truncates a string to maxLength and appends "..." if needed.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + "...";
}

/**
 * Returns initials from a name string (e.g. "Meghana Ravi" → "MR").
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// ─── Class Names ─────────────────────────────────────────────────────────────

/**
 * Joins class name strings, filtering out falsy values.
 * Lightweight alternative to the `clsx` or `cn` libraries.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
