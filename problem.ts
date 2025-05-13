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
