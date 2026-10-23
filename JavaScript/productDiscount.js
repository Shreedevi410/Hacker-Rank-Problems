const product = {
  name: "notebook",
  price: 150,
  offer: 10
};

const discount = product.price * (product.offer / 100);
const finalPrice = product.price - discount;

console.log(`Product: ${product.name}`);
console.log(`Original price: ${product.price}`);
console.log(`Discount: ${discount}`);
console.log(`Price after discount: ${finalPrice}`);
