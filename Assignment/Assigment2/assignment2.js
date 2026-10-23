
console.log("--- Bill and Tip Calculator ---");

// Ask the user for input
let subtotal = Number(prompt("Enter your bill amount:"));
let tipPercentage = Number(prompt("Enter tip percentage:"));

// Calculate the tip
let tip = subtotal * tipPercentage / 100;

// Calculate the total using an assignment operator
let total = subtotal;
total += tip;

// Display the results
console.log(`Subtotal: $${subtotal}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${tip}`);
console.log(`Total Amount to Pay: $${total}`);
