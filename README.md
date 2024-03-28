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

console.log(formattedAmount); // Output: 1 000,00 $
```

**Options**
| Option          | Description                                                | Example Usage                                                 | Output           |
|-----------------|------------------------------------------------------------|---------------------------------------------------------------|------------------|
| symbolToTheLeft | Determines whether the currency symbol should be placed to the left of the formatted amount (default: `false`). | `symbolToTheLeft: true`                                      | `$1 000,00`      |
| locale          | The locale used for formatting the amount (default: `"fr-FR"`). | `locale: "fr-FR"` or `locale: "en-US"`                         | `1 000,00 $` or `1,000.00 $` |

### asAmountWithoutDecimals

```ts
import { asAmountWithoutDecimals } from "money-formatters";

const amountWithoutDecimals = asAmountWithoutDecimals(1000, "USD");

console.log(amountWithoutDecimals); // Output: 100000
```
