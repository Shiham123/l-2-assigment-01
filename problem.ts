// problem 01

function formatString(input: string, toUpper?: boolean): string {
  const result = toUpper === false ? input.toLowerCase() : input.toUpperCase();
  return result;
}

// problem 02
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

// problem 03
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
