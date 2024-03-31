# Money Formatters
Money Formatters is a lightweight library for formatting monetary values according to various currencies in JavaScript/TypeScript.

## Installation
To install Money Formatters, you can use npm:
```
npm install money-formatters
```
or yarn 
```
yarn add money-formatters
```

## Usage

### asAmount

The `asAmount` function formats the given amount in the base unit to its corresponding value for the specified currency token.

For example, converting 100 cents to USD would result in 1,00 $.

```ts
const formattedAmount = asAmount({
  amount: 1000,
  token: "USD"
});

console.log(formattedAmount); // Output: 1 000,00 $
```

**Options**
| Option          | Description                                                | Example Usage                                                 | Output           |
|-----------------|------------------------------------------------------------|---------------------------------------------------------------|------------------|
| symbolToTheLeft | Determines whether the currency symbol should be placed to the left of the formatted amount (default: `false`). | `symbolToTheLeft: true`                                      | `$1 000,00`      |
| locale          | The locale used for formatting the amount (default: `"fr-FR"`). | `locale: "fr-FR"` or `locale: "en-US"`                         | `1 000,00 $` or `1,000.00 $` |
| showCurrencyCode  | Determines whether the currency code should be displayed alongside the formatted amount (default: `false`). | `showCurrencyCode: true`                        | `1 000,00 USD`                      |

### asAmountWithoutDecimals
The `asAmountWithoutDecimals` function calculates the equivalent amount in the base unit (e.g., dollars to cents) based on the specified currency token.

For example, 1 Dollar (USD) is equivalent to 100 cents. Therefore, calling `asAmountWithoutDecimals(1, "USD")` would return 100, representing 100 cents.


```ts
import { asAmountWithoutDecimals } from "money-formatters";

const amountWithoutDecimals = asAmountWithoutDecimals(1000, "USD");

console.log(amountWithoutDecimals); // Output: 100000
```
