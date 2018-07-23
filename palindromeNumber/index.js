/**
 * Check if a number is a palindrome, without converting it to a string
 * @param {Number} x a number to test
 * @returns {Boolean} whether or not the number is a palindrome
 */
function palindromeNumber(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    // negative numbers cannot be palindromes
    // also anything greater than zero cleanly divisible by 10 is not a palindrome
    // e.g. 200 % 10 === 0
    return false;
  }

  let reversed = 0;
  while (x > reversed) {
    // reversing the number by modding it by one slot at a time, stopping halfway
    // e.g. 333 -> reverseed = 0 * 10 + 3 = 3
    //             x = 33
    //          -> 3 * 10 + 3 = 33
    //             x = 3
    reversed = reversed * 10 + (x % 10);
    // floored division to simulate integer division
    x = Math.floor(x / 10);
  }

  // if x is the same as the reversed number OR the reversed number divided by 10, it IS a palindrome
  //     3 === 33 NO    || 3 === 3 YES
  return x === reversed || x === Math.floor(reversed / 10);
}

module.exports = palindromeNumber;
