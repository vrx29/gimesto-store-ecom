export function getDiscountedTotal(data) {
  if (data.length > 0) {
    const price = data.reduce(
      (acc, curr) => (acc += Number(curr.qty) * Number(curr.discountedPrice)),
      0
    );
    return price;
  } else {
    return 0;
  }
}
