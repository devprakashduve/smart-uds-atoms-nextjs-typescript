export function classNames(
  ...classes: (false | null | undefined | string)[]
): string {
  return [...new Set(classes.filter(Boolean))].join(' ').trim();
}
