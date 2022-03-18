export const sortDecreasing = (data) => {
  return [...data].sort(
    (item1, item2) =>
      Number(item2.discountedPrice) - Number(item1.discountedPrice)
  );
};
