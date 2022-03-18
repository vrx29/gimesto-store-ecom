export const filterByPriceRange = (data, low, high) => {
  return [...data].filter(
    ({ discountedPrice }) => discountedPrice >= low && discountedPrice <= high
  );
};
