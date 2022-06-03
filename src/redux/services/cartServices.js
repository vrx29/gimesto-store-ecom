import axios from "axios";

export const addToCartService = async (product, token) => {
  const response = await axios.post(
    "/api/user/cart",
    { product },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response;
};

export const deleteFromCartService = async (productId, token) => {
  const response = await axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: token,
    },
  });
  return response;
};

export const updateCartService = async (productId, type, token) => {
  const response = await axios.post(
    `/api/user/cart/${productId}`,
    {
      action: {
        type: type,
      },
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response;
};
