# Money Formatters
Money Formatters is a lightweight library for formatting monetary values according to various currencies in JavaScript/TypeScript.

## Installation
To install Money Formatters, you can use npm:
```
npm install money-formatters
```

## Usage

### asAmount

The `asAmount` function formats the given amount according to the specified currency token.

```ts
const formattedAmount = asAmount({
  amount: 1000,
  token: "USD"
});

console.log(formattedAmount); // Output: 1 000.00 $
```

### asAmountWithoutDecimals

```ts
import { asAmountWithoutDecimals } from "money-formatters";

const amountWithoutDecimals = asAmountWithoutDecimals(1000, "USD");

console.log(amountWithoutDecimals); // Output: 100000
```
