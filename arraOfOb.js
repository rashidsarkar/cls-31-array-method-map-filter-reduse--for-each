const products = [
  { id: 1, name: "HP", price: 300 },
  { id: 2, name: "Dell", price: 400 },
  { id: 3, name: "Apple", price: 700 },
];
const name = products.map((item) => item.name);
console.log(name);
const expensive = products.filter((p) => p.price > 500);
console.log(expensive);
const total = products.reduce((acc, cure) => acc + cure.price, 0);
console.log(total);
