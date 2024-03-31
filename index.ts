import { currencies } from "./config/currencies";

/**
 * Formats the given amount according to the specified currency token and locale.
 * @param {Object} options - Options for formatting the amount.
 * @param {number|string} options.amount - The amount to format (as a number or string).
 * @param {string} options.token - The currency token representing the currency.
 * @param {boolean} [options.symbolToTheLeft=false] - Determines whether the currency symbol should be placed to the left of the formatted amount.
 * @param {string} [options.locale="fr-FR"] - The locale used for formatting the amount. It can be either "fr-FR" or "en-US".
 * @param {boolean} [options.showCurrencyCode=false] - Determines whether the currency code should be displayed alongside the formatted amount.
 * @param {string} [options.negativeFormat="minus"] - Determines how negative numbers should be formatted. Possible values: "minus" or "parentheses". Default: "minus".
 * @returns {string} The formatted amount with the currency symbol.
 * @throws {Error} Throws an error if the currency token is unknown.
 */
export function asAmount({
  amount,
  token,
  symbolToTheLeft = false,
  locale = "fr-FR",
  showCurrencyCode = false,
  negativeFormat = "minus",
}: {
  amount: number | string;
  token: string;
  symbolToTheLeft?: boolean;
  locale?: "fr-FR" | "en-US";
  showCurrencyCode?: boolean;
  negativeFormat?: "minus" | "parentheses";
}): string {
  // Retrieve currency information based on the provided token
  const selectedCurrency = currencies[token];

  // Throw an error if the currency token is unknown
  if (typeof selectedCurrency === "undefined") {
    throw new Error(`Unknown token ${token}`);
  }

  // Extract currency symbol and decimal precision
  const currencySymbol = selectedCurrency.symbol;
  const currencyDecimals = selectedCurrency.decimals;

  // Calculate amount without decimals
  const amountWithoutDecimals = Number(amount) / 10 ** currencyDecimals;

  // Format the amountWithoutDecimals with thousands separator and fixed decimal places
  let formattedAmount = amountWithoutDecimals.toLocaleString(locale, {
    minimumFractionDigits: currencyDecimals,
    maximumFractionDigits: currencyDecimals,
  });

  // Handle negative formatting
  if (amountWithoutDecimals < 0) {
    if (negativeFormat === "parentheses") {
      formattedAmount = formattedAmount.replace("-", ""); // Remove minus sign
      // Enclose amount in parentheses
      if (symbolToTheLeft) {
        return showCurrencyCode
          ? `(${token} ${formattedAmount})`
          : `(${currencySymbol} ${formattedAmount})`;
      }

      return showCurrencyCode
        ? `(${formattedAmount} ${token})`
        : `(${formattedAmount} ${currencySymbol})`;
    }
  }

  if (symbolToTheLeft) {
    return showCurrencyCode
      ? `${token} ${formattedAmount}`
      : `${currencySymbol} ${formattedAmount}`;
  }

  return showCurrencyCode
    ? `${formattedAmount} ${token}`
    : `${formattedAmount} ${currencySymbol}`;
}

/**
 * Calculates the amount without decimals based on the specified currency token.
 * @param {number} amount - The amount to convert to without decimals.
 * @param {string} token - The currency token representing the currency.
 * @returns {number} The amount without decimals.
 * @throws {Error} Throws an error if the currency token is unknown.
 */
export function asAmountWithoutDecimals(amount: number, token: string): number {
  const selectedCurrency = currencies[token];

  if (typeof selectedCurrency === "undefined") {
    throw new Error(`Unknown token ${token}`);
  }

  const currencyDecimals = selectedCurrency.decimals;

  return Number(amount) * 10 ** currencyDecimals;
}
