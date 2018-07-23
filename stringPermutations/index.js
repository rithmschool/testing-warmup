/**
 * Return an array of permutations of an input string
 * example: str = 'abc'
 * [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 * @param {String} str a string to get permutations of
 * @returns {Array} an array of string permutations of the input
 */
function stringPermutations(str) {
  const result = [];
  (function getPerms(prefix, remainder) {
    if (remainder.length === 0) {
      result.push(prefix);
    }

    for (let i = 0; i < remainder.length; i += 1) {
      const before = remainder.slice(0, i);
      const after = remainder.slice(i + 1);
      getPerms(`${prefix}${remainder.charAt(i)}`, `${before}${after}`);
    }
  })('', str);

  return result;
}

module.exports = stringPermutations;
