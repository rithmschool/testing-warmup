/**
 * Sort an array in average O(nlgn) time in-place
 * @param {Array} arr an array to sort
 * @param {Number} start starting index
 * @param {Number} end ending index
 * @returns {Array} original input array returned in sorted order
 */
function quicksort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const partitionIdx = randomPartition(arr, start, end);
    quicksort(arr, start, partitionIdx - 1);
    quicksort(arr, partitionIdx + 1, end);
  }
  return arr;
}

function randomPartition(arr, start, end) {
  // find a random index to be the pivot
  let pivotIdx = Math.floor(Math.random() * (end - start + 1)) + start;
  const pivot = arr[pivotIdx];
  // put pivot at the end
  [arr[pivotIdx], arr[end]] = [arr[end], arr[pivotIdx]];
  pivotIdx = end;

  // loop through (sub)array and if the element is less than pivot value, place element before pivot
  let partitionIdx = start;
  for (let i = start; i <= end - 1; i++) {
    if (arr[i] <= pivot) {
      [arr[i], arr[partitionIdx]] = [arr[partitionIdx], arr[i]];
      partitionIdx++;
    }
  }

  // move the pivot to its final location
  [arr[pivotIdx], arr[partitionIdx]] = [arr[partitionIdx], arr[pivotIdx]];
  return partitionIdx;
}

module.exports = quicksort;
