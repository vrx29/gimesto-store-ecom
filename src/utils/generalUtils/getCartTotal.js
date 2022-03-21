export const getCartTotal = (data) => {
  if (data.length > 0) {
    const price = data.reduce(
      (acc, curr) => (acc += Number(curr.qty) * Number(curr.discountedPrice)),
      0
    );
    return price + 200;
  } else {
    return 0;
  }
};
