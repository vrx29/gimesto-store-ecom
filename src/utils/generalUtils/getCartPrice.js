export function getCartPrice(data) {
  if (data.length > 0) {
    const price = data.reduce(
      (acc, curr) => (acc += Number(curr.qty) * Number(curr.price)),
      0
    );
    return price;
  } else {
    return 0;
  }
}
