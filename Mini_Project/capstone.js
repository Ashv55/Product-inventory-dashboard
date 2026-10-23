
console.log("--- Initializing Inventory System ---");

// 1. Create the initial inventory
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Get a new product from the user
let name = prompt("Enter product name:");
let price = Number(prompt("Enter product price:"));

// Add the new product
products.push({ name: name, price: price });

console.log(`[Prompt executed: User adds "${name}" at "$${price}"]`);

// 2. Display products and their categories
console.log("\n--- Processing Inventory Roster (forEach) ---");

products.forEach(function(product) {
    let category;

    if (product.price < 50) {
        category = "Budget";
    } else if (product.price < 500) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    console.log(
        `Item: ${product.name} ($${product.price}) -> Category: ${category}`
    );
});

// 3. Calculate total inventory value
let total = 0;

products.forEach(function(product) {
    total += product.price;
});

console.log("\n--- Financial Analytics ---");
console.log(`Total Inventory Value: $${total}`);

// 4. Find products under $200
let affordable = products.filter(function(product) {
    return product.price < 200;
});

let affordableNames = affordable.map(function(product) {
    return product.name;
});

console.log(
    `Filtered Affordable Items (Under $200): ${JSON.stringify(affordableNames)}`
);

// 5. Create formatted product report
let report = products.map(function(product) {
    return `${product.name.toUpperCase()}: $${product.price}`;
});

console.log(`Formatted Report List: ${JSON.stringify(report)}`);
