// merge sort
function mergeSort(array) {
  if (array.length <= 1) return array;
  else {
    let half = Math.floor(array.length / 2);
    let left = array.slice(0, half);
    let right = array.slice(half);

    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
}

let array = [105, 79, 100, 110];
console.log(mergeSort(array));
