import axios from "axios";

export const addToWishlistService = async (product, token) => {
  const response = await axios.post(
    "/api/user/wishlist",
    {
      product,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response;
};

export const deleteFromWishlistService = async (productId, token) => {
  const response = await axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: token,
    },
  });
  return response;
};
