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

/****************************************************************************************    */
// TASK 4: Refactoring for Reusability

/**
 * Calculates the total cost including tax with optional discount
 */
function calculateTotalCostWithDiscount(
  price,
  quantity,
  taxRate,
  discount = null
) {
  // Validate required parameters
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

  // Calculate subtotal
  const subtotal = price * quantity;
  let discountedSubtotal = subtotal;

  // Apply discount if provided
  if (discount !== null) {
    if (typeof discount === "number") {
      // Assume it's a dollar amount discount
      if (discount < 0) {
        return "Invalid input.";
      }
      discountedSubtotal = subtotal - discount;
    } else if (
      typeof discount === "object" &&
      discount.type &&
      discount.value !== undefined
    ) {
      // Handle structured discount object
      if (typeof discount.value !== "number" || discount.value < 0) {
        return "Invalid input.";
      }

      if (discount.type === "percentage" || discount.type === "%") {
        // Percentage discount (e.g., {type: "percentage", value: 10} for 10%)
        const discountAmount = subtotal * (discount.value / 100);
        discountedSubtotal = subtotal - discountAmount;
      } else if (discount.type === "dollar" || discount.type === "$") {
        // Dollar amount discount (e.g., {type: "dollar", value: 5} for $5)
        discountedSubtotal = subtotal - discount.value;
      } else {
        return "Invalid input.";
      }
    } else {
      return "Invalid input.";
    }
  }

  // Ensure discounted subtotal doesn't go negative
  if (discountedSubtotal < 0) {
    discountedSubtotal = 0;
  }

  // Calculate total cost with tax: discountedSubtotal * (1 + taxRate)
  const totalCost = discountedSubtotal * (1 + taxRate);

  return totalCost;
}

// Example usage for Task 4:
console.log("Task 4 - Calculate Total Cost with Discount:");

// No discount (same as original function)
console.log(calculateTotalCostWithDiscount(100, 2, 0.08)); // Output: 216 (subtotal: $200, tax: $16)

// Dollar amount discount
console.log(calculateTotalCostWithDiscount(100, 2, 0.08, 20)); // Output: 194.4 (subtotal: $200, discount: $20, discounted: $180, tax: $14.4)

// Percentage discount using object notation
console.log(
  calculateTotalCostWithDiscount(100, 2, 0.08, {
    type: "percentage",
    value: 10,
  })
); // Output: 194.4 (subtotal: $200, 10% discount: $20, discounted: $180, tax: $14.4)

// Dollar discount using object notation
console.log(
  calculateTotalCostWithDiscount(100, 2, 0.08, { type: "dollar", value: 25 })
); // Output: 189 (subtotal: $200, discount: $25, discounted: $175, tax: $14)

// Percentage discount with % symbol
console.log(
  calculateTotalCostWithDiscount(50, 3, 0.075, { type: "%", value: 15 })
); // Output: 137.8125 (subtotal: $150, 15% discount: $22.5, discounted: $127.5, tax: $9.5625)

// Test invalid inputs
console.log(calculateTotalCostWithDiscount(100, 2, 0.08, -10)); // Output: "Invalid input." (negative discount)
console.log(
  calculateTotalCostWithDiscount(100, 2, 0.08, { type: "invalid", value: 10 })
); // Output: "Invalid input." (invalid discount type)
