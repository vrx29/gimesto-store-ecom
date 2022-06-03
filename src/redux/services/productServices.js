import axios from "axios";

export const getProductsService = async () => {
  return await axios.get("/api/products");
};
