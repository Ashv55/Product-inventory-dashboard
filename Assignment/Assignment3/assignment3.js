
console.log("-- Assignment 3: Conditional Logic --");

let score = 85;
let grade;

// 1. Use if...else to determine the letter grade
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// 2. Use switch to handle the letter grade
switch (grade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("Well done!");
        break;
    case "D":
        console.log("You passed.");
        break;
    case "F":
        console.log("Needs improvement.");
        break;
    default:
        console.log("Invalid grade.");
}

// 3. Use a ternary operator to check pass or fail
let status = score >= 40 ? "Passed" : "Failed";

// Display the results
console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);
