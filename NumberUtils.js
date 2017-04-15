const NumberUtils = function() {
  const NUMBER_TO_WORD = { 
    0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety"
  };
  const NUMBER_SCALES = [
    '', '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecilion', 'tredecilion', 'quattuordecilion', 'quindecilion', 'sexdecillion', 'septendecilion', 'octodecilion', 'novemdecilion', 'vigintilion'
  ];
  const isString = input => typeof input === 'string' || input instanceof String;

  return {
    checkBounds: number => !isNaN(number) && !isString(number) && (number > Number.MAX_SAFE_INTEGER),
    convertToString: number => isString(number) ? number.toString() : number.toFixed(2),
    getCurrencyString: amountIntegerString => amountIntegerString > 1 ? 'dollars' : 'dollar',
    getFormattedDecimalString: decimalString => ` and ${decimalString}/100 `,
    getScale: scaleIndex => NUMBER_SCALES[scaleIndex] !== undefined ? NUMBER_SCALES[scaleIndex] : 'bajillion',
    getWord: number => NUMBER_TO_WORD[number],
    isValid: number => isNaN(number) || number < 0,   
    removeWhiteSpace: string => string.replace(/\s+/g,' ').trim()
  };
}();