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
