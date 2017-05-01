const NumberConverterTest = function() {
  const testConvert = (num, result) => {
    const actual = NumberConverter.convertNumberToString(num);
    console.assert(actual === result, `'${num}' ended up as '${actual}' instead of '${result}'`)
  };

  const runTests = () => {
    testConvert(0, 'zero and 00/100 dollar');
    testConvert(0000, 'zero and 00/100 dollar');
    testConvert(0.01, 'zero and 01/100 dollar');
    testConvert(0.59, 'zero and 59/100 dollar');
    testConvert(1, 'one and 00/100 dollar');
    testConvert(2.0, 'two and 00/100 dollars');
    testConvert(3.00, 'three and 00/100 dollars');
    testConvert(10, 'ten and 00/100 dollars');
    testConvert(11.00, 'eleven and 00/100 dollars');
    testConvert(12.1, 'twelve and 10/100 dollars');
    testConvert(13.20, 'thirteen and 20/100 dollars');
    testConvert(21.21, 'twenty-one and 21/100 dollars');
    testConvert(43.56, 'forty-three and 56/100 dollars');
    testConvert(43.4566, 'forty-three and 57/100 dollars');
    testConvert(90, 'ninety and 00/100 dollars');
    testConvert(100, 'one hundred and 00/100 dollars');
    testConvert(101, 'one hundred one and 00/100 dollars');
    testConvert(150, 'one hundred fifty and 00/100 dollars');
    testConvert(155, 'one hundred fifty-five and 00/100 dollars');
    testConvert(402, 'four hundred two and 00/100 dollars');
    testConvert(643.11, 'six hundred forty-three and 11/100 dollars');
    testConvert(1473, 'one thousand four hundred seventy-three and 00/100 dollars');
    testConvert(25243.04, 'two thousand five hundred twenty-three and 04/100 dollars');
    testConvert(7000.07, 'seven thousand and 07/100 dollars');
    testConvert(12473, 'twelve thousand four hundred seventy-three and 00/100 dollars');
    testConvert(68403, 'sixty-eight thousand four hundred three and 00/100 dollars');
    testConvert(68473, 'sixty-eight thousand four hundred seventy-three and 00/100 dollars');
    testConvert(968473, 'nine hundred sixty-eight thousand four hundred seventy-three and 00/100 dollars');
    testConvert(1968473, 'one million nine hundred sixty-eight thousand four hundred seventy-three and 00/100 dollars');
    testConvert(20968473, 'twenty million nine hundred sixty-eight thousand four hundred seventy-three and 00/100 dollars');
    testConvert(500000000, 'five hundred million and 00/100 dollars');
    testConvert(500000500, 'five hundred million five hundred and 00/100 dollars');
    testConvert(500005000, 'five hundred million five thousand and 00/100 dollars');
    testConvert(500050000, 'five hundred million fifty thousand and 00/100 dollars');
    testConvert(500068473, 'five hundred million sixty-eight thousand four hundred seventy-three and 00/100 dollars');
    testConvert(500968473, 'five hundred million nine hundred sixty-eight thousand four hundred seventy-three and 00/100 dollars');
    testConvert(502968473, 'five hundred two million nine hundred sixty-eight thousand four hundred seventy-three and 00/100 dollars');
    testConvert(9502968473, 'nine billion five hundred two million nine hundred sixty-eight thousand four hundred seventy-three and 00/100 dollars');
    testConvert('95029684739502968473.03', 'ninety-five quintillion twenty-nine quadrillion six hundred eighty-four trillion seven hundred thirty-nine billion five hundred two million nine hundred sixty-eight thousand four hundred seventy-three and 03/100 dollars');
    testConvert('0.639', 'zero and 63/100 dollar');
  };

  return {
    runTests: runTests
  }
}();

NumberConverterTest.runTests();
