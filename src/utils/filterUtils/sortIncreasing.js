export const sortIncreasing = (data) => {
  return [...data].sort(
    (item1, item2) =>
      Number(item1.discountedPrice) - Number(item2.discountedPrice)
  );
};
