import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS class names intelligently, resolving conflicts
 * (e.g. `p-2` + `p-4` → `p-4`) and removing falsy values.
 * Replaces the previous `classNames` helper.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** @deprecated Use `cn` instead. Kept for backwards compatibility. */
export function classNames(
  ...classes: (false | null | undefined | string)[]
): string {
  return cn(...classes);
}
