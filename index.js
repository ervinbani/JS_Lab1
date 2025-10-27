// Lab 1: Variables and Functions
//1: Flexible String Manipulation with Functions

/**
 * Formats a full name in the format "lastName, firstName"
 */
function formatFullName(firstName, lastName) {
  checkFullNameWithValidation(firstName, lastName); // check validity first
  const fullName = lastName + ", " + firstName;
  return fullName;
}

// Example usage:
console.log(formatFullName("John", "Doe")); // Output: "Doe, John"

// Task 2: Format names with proper capitalization

/**
 * Formats a full name in the format "lastName, firstName" with proper capitalization
 */
function formatFullNameCapitalized(firstName, lastName) {
  checkFullNameWithValidation(firstName, lastName); // check validity first
  // Capitalize the first letter of firstName and lastName
  const capitalizedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  const capitalizedLastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  const fullName = capitalizedLastName + ", " + capitalizedFirstName;
  return fullName;
}

// Example usage for Task 2:
console.log(formatFullNameCapitalized("john", "doe")); // Output: "Doe, John"

// 3: Format names with validation

function checkFullNameWithValidation(firstName, lastName) {
  // Check if either firstName or lastName is missing or empty
  if (
    !firstName ||
    !lastName ||
    firstName.trim() === "" ||
    lastName.trim() === ""
  ) {
    return "Invalid name input.";
  }
}

// Example usage for Task 1.3:
console.log(checkFullNameWithValidation("John", "")); // Returns "Invalid name input."
console.log(checkFullNameWithValidation("", "Doe")); // Returns "Invalid name input."

/****************************************************************************************    */
// TASK 2: Mathematical Operations with Multiple Parameters

/**
 * Calculates the total cost including tax using the formula: totalCost = (price * quantity) * (1 + taxRate)
 */
function calculateTotalCost(price, quantity, taxRate) {
  // check if all parameters are valid numbers
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number" ||
    isNaN(price) ||
    isNaN(quantity) ||
    isNaN(taxRate) ||
    price < 0 ||
    quantity < 0 ||
    taxRate < 0
  ) {
    return "Invalid input.";
  }

  // Calculate total cost using the specified formula: totalCost = (price * quantity) * (1 + taxRate)
  const totalCost = price * quantity * (1 + taxRate);

  return totalCost;
}

// Example usage for Task 2:
console.log("Task 2 - Calculate Total Cost:");
console.log(calculateTotalCost(10, 3, 0.08)); // Output: 32.4 (price: $10, quantity: 3, tax: 8%)
console.log(calculateTotalCost(25.5, 2, 0.075)); // Output: 54.825 (price: $25.50, quantity: 2, tax: 7.5%)
console.log(calculateTotalCost(15, 1, 0.1)); // Output: 16.5 (price: $15, quantity: 1, tax: 10%)

// Test invalid inputs:
console.log(calculateTotalCost("10", 3, 0.08)); // Output: "Invalid input." (price is string)
console.log(calculateTotalCost(10, -3, 0.08)); // Output: "Invalid input." (negative quantity)
console.log(calculateTotalCost(10, 3, "0.08")); // Output: "Invalid input." (taxRate is string)
console.log(calculateTotalCost(NaN, 3, 0.08)); // Output: "Invalid input." (price is NaN)

/****************************************************************************************    */
// TASK 3: Functions with Conditional Logic

/**
 * Checks eligibility for a program based on age and employment status
 */
function checkEligibility(age, isEmployed) {
  // Check eligibility rules with conditional logic
  if (age > 18 && isEmployed) {
    return "You are eligible for the program.";
  } else if (age > 18 && !isEmployed) {
    return "You are conditionally eligible for the program.";
  } else {
    return "You are not eligible for the program.";
  }
}

// Example usage for Task 3:
console.log("Task 3 - Check Eligibility:");
console.log(checkEligibility(25, true)); // Output: "You are eligible for the program."
console.log(checkEligibility(22, false)); // Output: "You are conditionally eligible for the program."
console.log(checkEligibility(17, true)); // Output: "You are not eligible for the program."
console.log(checkEligibility(18, false)); // Output: "You are not eligible for the program."
console.log(checkEligibility(19, true)); // Output: "You are eligible for the program."
console.log(checkEligibility(30, false)); // Output: "You are conditionally eligible for the program."
