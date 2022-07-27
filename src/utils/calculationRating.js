export default function calculationRating(array) {
  let sum = array.reduce((acc, item) => (acc += Number(item)));
  return (sum / array.length).toFixed(1);
}
