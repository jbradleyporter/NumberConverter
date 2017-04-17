const NumberConverter = function() {
  const getArrayOfNumberSplitIntoGroupsOfTriples = integerString => {
    const tripleStack = [];
    for (let endIndex = integerString.length; endIndex > 0; endIndex -= 3) {
      const startIndex = (endIndex - 3) < 0 ? 0 : endIndex - 3;
      const tripleString = integerString.slice(startIndex, endIndex);
      const tripleNum = parseInt(tripleString, 10);
      tripleStack.push(tripleNum);
    }
    return tripleStack.reverse();
  };

  const getFormattedTripleUnder100 = triple => {
    const numTens = Math.floor(triple / 10) * 10;
    const onesValue = triple % 10;
    let result = ' ' + NumberUtils.getWord(numTens);

    if (onesValue !== 0) {
      result += '-' + NumberUtils.getWord(onesValue);;
    }
    return result;
  };

  const getFormattedFullTriple = triple => {
    const numHundreds = Math.floor(triple / 100);
    let result = '';
    
    if (numHundreds > 0) {
      result += ' ' + NumberUtils.getWord(numHundreds) + ' hundred';
    }
    if (triple % 100 !== 0) {  
      const tensValue = triple % 100;
      if (tensValue < 20) {
        result += ' ' + NumberUtils.getWord(tensValue);
      } else {
        result += getFormattedTripleUnder100(tensValue);
      }
    }

    return result;
  };

  const convertIntegerStringToWords = integerString => {
    let result = '';
    const tripleStack = getArrayOfNumberSplitIntoGroupsOfTriples(integerString);    

    tripleStack.forEach(function(triple, index) {
      if (triple === 0 && index > 0) {
        return;
      }      
      if (triple < 20) {
        result += ' ' + NumberUtils.getWord(triple);
      } else if (triple < 100) {
        result += getFormattedTripleUnder100(triple);
      } else {
        result += getFormattedFullTriple(triple);
      }

      const scaleIndex = tripleStack.length - index;
      result += ' ' + NumberUtils.getScale(scaleIndex);
    });

    return result;
  };

  const convertNumberToString = amount => {
    if (NumberUtils.isValid(amount)) {
      return `'${amount}' is not a valid positive number.`;
    }
    if (NumberUtils.checkBounds(amount)) {
      return `'${amount}' is past the bounds of MAX_SAFE_INTEGER. Please pass in the number wrapped in quotes (ex: '2523.04') for an accurate conversion.`;
    }
    
    const amountString = NumberUtils.convertToString(amount);
    const splitAmountArray = amountString.split('.');
    const amountIntegerString = splitAmountArray[0];
    const amountDecimalString = splitAmountArray[1] || '00';

    let result = parseInt(amountIntegerString, 10) !== 0 ? convertIntegerStringToWords(amountIntegerString) : 'zero';
    result += NumberUtils.getFormattedDecimalString(amountDecimalString);
    result += NumberUtils.getCurrencyString(amountIntegerString);
    return NumberUtils.removeWhiteSpace(result);
  }

  const convertAndDisplay = event => {
    const amount = event.currentTarget.value;
    const output = convertNumberToString(amount);
    const outputContainer = document.getElementById('stringOutput');
    outputContainer.innerHTML = output;
  };

  const searchInput = document.getElementById('numberInput');
  searchInput.addEventListener('change', convertAndDisplay);
  searchInput.addEventListener('keyup', convertAndDisplay);

  return {
    convertNumberToString: convertNumberToString
  };
}();