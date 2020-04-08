/* eslint no-console: "off" */
function split(wholeArray) {
  const midPoint = Math.ceil(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, midPoint);
  const secondHalf = wholeArray.slice(midPoint);

  return [firstHalf, secondHalf];
}

function merge(firstArray, secondArray) {
  const mergedArray = [];
	const finalLength = firstArray.length + secondArray.length;
  while (mergedArray.length !== finalLength) {
    if (firstArray[0] < secondArray[0] || !secondArray[0]) {
      mergedArray.push(firstArray.shift());
    } else {
      mergedArray.push(secondArray.shift());
    }
  }
  console.log('MERGE FN OUTPUT: ', mergedArray);
  return mergedArray;
}

function mergeSort(array) {
  console.log('array:', array);
  if (array.length === 1) return array;

  const [firstHalf, secondHalf] = split(array);
  const first = mergeSort(firstHalf); // recursively run
  const second = mergeSort(secondHalf); // run after first finishes
  console.log('first: ', first, 'second: ', second);
  return merge(first, second);
}

mergeSort([5, 2, 4, 3, 1, 9, 11, 3]);
