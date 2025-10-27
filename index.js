// Lab 1: Variables and Functions
// Task 1: Flexible String Manipulation with Functions

/**
 * Formats a full name in the format "lastName, firstName"
 */
function formatFullName(firstName, lastName) {
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
