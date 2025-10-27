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
checkEligibility(25, true);   // Returns: "You are eligible for the program."
checkEligibility(22, false);  // Returns: "You are conditionally eligible for the program."
checkEligibility(17, true);   // Returns: "You are not eligible for the program."
checkEligibility(18, false);  // Returns: "You are not eligible for the program."
checkEligibility("25", true); // Returns: "Invalid input."
```
