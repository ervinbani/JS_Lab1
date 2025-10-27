# Lab 1: Variables and Functions

## Task 1: Flexible String Manipulation with Functions

### 1. Formats a full name in the format "lastName, firstName"

### 2: Format names with proper capitalization

### 3: Create function for full name validation

## Task 2: Mathematical Operations with Multiple Parameters

### Function: `calculateTotalCost(price, quantity, taxRate)`

**Purpose**: Calculates the total cost of items including tax using mathematical operations with multiple parameters.

**Parameters**:

- `price` (number): The base price of the item
- `quantity` (number): The quantity of items to purchase
- `taxRate` (number): The tax rate as a decimal (e.g., 0.08 for 8% tax)

**Formula**: `totalCost = (price * quantity) * (1 + taxRate)`

**Returns**:

- `number`: The total cost including tax when all inputs are valid
- `string`: "Invalid input." when any parameter is not a valid number or is negative

**Features**:

- Input validation for all parameters (checks for valid numbers, NaN, and negative values)
- Uses the specified mathematical formula for cost calculation
- Handles edge cases and provides clear error messaging

**Example Usage**:

```javascript
calculateTotalCost(10, 3, 0.08); // Returns: 32.4
calculateTotalCost(25.5, 2, 0.075); // Returns: 54.825
calculateTotalCost("10", 3, 0.08); // Returns: "Invalid input."
calculateTotalCost(10, -3, 0.08); // Returns: "Invalid input."
```

## Task 3: Functions with Conditional Logic

### Function: `checkEligibility(age, isEmployed)`

**Purpose**: Determines program eligibility based on age and employment status using conditional logic.

**Parameters**:

- `age` (number): The person's age
- `isEmployed` (boolean): Whether the person is employed (true) or unemployed (false)

**Eligibility Rules**:

1. **Over 18 AND employed**: Eligible for the program
2. **Over 18 BUT unemployed**: Conditionally eligible for the program
3. **18 or younger**: Not eligible for the program (regardless of employment status)

**Returns**:

- `string`: "You are eligible for the program." (age > 18 and employed)
- `string`: "You are conditionally eligible for the program." (age > 18 but unemployed)
- `string`: "You are not eligible for the program." (age ≤ 18)
- `string`: "Invalid input." (invalid parameters)

**Features**:

- Input validation for age (must be a valid non-negative number)
- Input validation for employment status (must be boolean)
- Clear conditional logic implementation
- Appropriate string messages for each scenario

**Example Usage**:

```javascript
checkEligibility(25, true); // Returns: "You are eligible for the program."
checkEligibility(22, false); // Returns: "You are conditionally eligible for the program."
checkEligibility(17, true); // Returns: "You are not eligible for the program."
checkEligibility(18, false); // Returns: "You are not eligible for the program."
checkEligibility("25", true); // Returns: "Invalid input."
```

## Task 4: Refactoring for Reusability

### Function: `calculateTotalCostWithDiscount(price, quantity, taxRate, discount)`

**Purpose**: Enhanced version of the cost calculation function with optional discount support. Demonstrates refactoring for improved reusability and functionality.

**Parameters**:

- `price` (number): The base price of the item
- `quantity` (number): The quantity of items to purchase
- `taxRate` (number): The tax rate as a decimal (e.g., 0.08 for 8% tax)
- `discount` (number|object, optional): The discount to apply

**Discount Formats**:

1. **Simple Number**: Treated as dollar amount (e.g., `20` = $20 off)
2. **Percentage Object**: `{type: "percentage", value: 10}` = 10% off
3. **Dollar Object**: `{type: "dollar", value: 25}` = $25 off
4. **Alternative Notation**: `{type: "%", value: 15}` = 15% off

**Calculation Process**:

1. Calculate subtotal: `price × quantity`
2. Apply discount (if provided):
   - **Dollar amount**: `subtotal - discount`
   - **Percentage**: `subtotal - (subtotal × discount/100)`
3. Apply tax: `discountedSubtotal × (1 + taxRate)`

**Returns**:

- `number`: The total cost including tax and discount when all inputs are valid
- `string`: "Invalid input." when any parameter is invalid

/**\*\***\*\*\*\***\*\***\*\*\*\***\*\***\*\*\*\***\*\***\***\*\***\*\*\*\***\*\***\*\*\*\***\*\***\*\*\*\***\*\***/

# REFLECTIONS

## Building Flexible Functions with Parameters

When developing these functions, my goal was to make them reusable and easy to maintain.
Each function, such as formatFullName(firstName, lastName) and calculateTotalCost(price, quantity, taxRate), was designed to work with any valid input.
I separated validation logic into a dedicated function (checkFullNameWithValidation) to keep the code clean and consistent.
All functions were written as pure functions, meaning they produce predictable results without side effects.

## Challenges with Conditional Logic

The main challenge was handling invalid or unexpected inputs — for example, empty strings, negative values, or incorrect data types.
To solve this, I added thorough input validation and returned a clear error message ("Invalid input.") when necessary.
Another challenge was implementing different eligibility conditions and discount types.
For the discount feature, I created flexible logic that supports both numeric and object-based discounts (e.g., { type: "percentage", value: 10 }).

## Benefits of Refactoring

Refactoring made the code easier to understand, extend, and test.
By reusing validation logic and organizing calculations into clear steps (subtotal, discountedSubtotal, totalCost), the code became more readable and modular.
Adding the optional discount parameter improved flexibility without changing the core logic of the function.
This approach makes future updates or feature additions simpler and less error-prone.
