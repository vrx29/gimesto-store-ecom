export const filterByRating = (data, rating) => {
  return [...data].filter((item) => item.rating <= rating);
};
