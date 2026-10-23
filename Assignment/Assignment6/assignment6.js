
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

// 1. forEach() - Print all products
console.log("-- All Products (forEach) --");

products.forEach(function(product) {
  console.log(`Item: ${product.name} - Price: $${product.price}`);
});

// 2. filter() - Find products priced below $50
console.log("-- Filtered Products (Price < $50) --");

const filteredProducts = products.filter(function(product) {
  return product.price < 50;
});

console.log(filteredProducts);

// 3. map() - Create formatted product tags
console.log("-- Mapped Product Tags (map) --");

const productTags = products.map(function(product) {
  return `${product.name.toUpperCase()} costs $${product.price}`;
});

console.log(productTags);
