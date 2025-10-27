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
