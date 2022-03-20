export const calcDiscount = (price, discountedPrice) => {
  return (((price - discountedPrice) / price) * 100).toFixed();
};
