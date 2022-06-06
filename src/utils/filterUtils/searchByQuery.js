export const searchByQuery = (data, query) => {
  return data.filter((item) =>
    item.name.toLowerCase().startsWith(query.toLowerCase())
  );
};
