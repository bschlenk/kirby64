/**
 * Check if the given value is not null or undefined.
 * @param val The value to check.
 * @return Whether val is undefined or not.
 */
export function nonNull<T>(val: T | undefined | null): val is T {
  return val != null;
}
