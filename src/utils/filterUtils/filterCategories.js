export const filterCategories = (data, categories) => {
  return [...data].filter((item) => categories.includes(item.category));
};
