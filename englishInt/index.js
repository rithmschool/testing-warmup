/**
 * Convert an integer into English
 * @param {Number} n an integer
 */
function englishInt(n) {
  /* arrays of index-based numeral descriptors */
  const singles = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];
  const magnitudes = [
    '',
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion'
  ];

  if (n === 0) return singles[0];

  function convertChunk(number) {
    let parts = []; // store pieces of number

    if (number >= 100) {
      /*
       * add the first numeral descriptor and then the word 'hundred'
       *  based on floored (integer) division.
       *  for example 734 would be Math.floor(734/100) === 700
       */
      parts.push(singles[Math.floor(number / 100)]);
      parts.push('hundred');
      number %= 100; // take the hundreds off the number
    }

    if (number >= 10 && number <= 19) {
      /* number is in the teens */
      parts.push(teens[number % 10]);
    } else if (number >= 20) {
      /* number is some kind of tens and needs a descriptor */
      parts.push(tens[Math.floor(number / 10)]);
      number %= 10; // take the tens out of the number
    }

    if (number >= 1 && number <= 9) {
      /* append the final single digit value */
      parts.push(singles[number]);
    }

    /* make the parts array into a string with spaces */
    return parts.join(' ');
  }

  let english = []; // array to store final value
  let negative = false; // keep track of negative for final appendage

  if (n < 0) {
    /* make a note that it is negative and convert it to positive */
    negative = true;
    n = Math.abs(n);
  }

  let chunkCount = 0; // keep track of how many thousands we have

  while (n > 0) {
    if (n % 1000 !== 0) {
      /* unshift is prepending this to the beginning of the array. We're essentially working backwards,
       * for example, 1234 = 234 gets evaluated first, then n % 1000 = 1, so the one thousand gets added in
       * there is a bit of difficulty with the spacing though */
      let chunk = `${convertChunk(n % 1000)}${chunkCount ? ' ' : ''}${
        magnitudes[chunkCount]
      }${chunkCount ? ' ' : ''}`;
      english.unshift(chunk);
    }
    n = Math.floor(n / 1000); // each time we're taking 1000 out of n
    chunkCount += 1; // the more chunks, the higher the magnitude. Also to tell whether we need spaces.
  }

  /* final return value has optional negative and trims spaces off the right */
  return `${negative ? 'negative ' : ''}${english.join('').trim()}`;
}

module.exports = englishInt;
