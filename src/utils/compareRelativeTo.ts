/**
 * Create a comparison function that sorts relative to the given `reference` array.
 * @param reference The array to sort the values by.
 * @return A comparison function that sorts in the same order as the reference.
 */
export const compareRelativeTo = <T>(reference: T[]) => (a: T, b: T) => {
  const aIndex = reference.indexOf(a);
  const bIndex = reference.indexOf(b);
  return aIndex - bIndex;
};
