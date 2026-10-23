
console.log("-- Rectangle Area Calculations --");

// Regular function with default parameters
function calculateArea(length = 5, width = 4) {
  return length * width;
}

console.log(
  `Standard Function Area (Default 5x4): ${calculateArea()}`
);

// Arrow function with default parameters
const calculateAreaArrow = (length = 5, width = 4) => {
  return length * width;
};

console.log(
  `Arrow Function Area (Custom 10x3): ${calculateAreaArrow(10, 3)}`
);

// Demonstrate block scope
try {
  {
    let blockVar = "Inside the block";
    console.log(blockVar);
  }

  console.log(blockVar);
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message}`);
}
