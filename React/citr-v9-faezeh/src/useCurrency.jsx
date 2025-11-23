const intl = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});
export const priceConventor = (price) => {
  intl.format(price);
};
export default function useCurrency(price) {
  return priceConventor(price);
}
