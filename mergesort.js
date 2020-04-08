function split(wholeArray) {
	const midPoint = Math.ceil(wholeArray.length / 2);
	const firstHalf = wholeArray.slice(0, midPoint);
	const secondHalf = wholeArray.slice(midPoint);

	return [ firstHalf, secondHalf ];
}

function merge(firstArray, secondArray) {
	const mergedArray = [];

	while (firstArray.length || secondArray.length) {
		if (firstArray[0] < secondArray[0]) {
			mergedArray.push(firstArray.shift());
		} else {
			mergedArray.push(secondArray.shift());
		}
	}
	return mergedArray;
}

function mergeSort(array) {
	console.log('array:', array);
	const sortedList = [];
	if (array.length === 1) return array;

	const [ firstHalf, secondHalf ] = split(array);
	mergeSort(firstHalf); // recursively run
	mergeSort(secondHalf); // run after first finishes
	// return merge(firstHalf, secondHalf);
}

mergeSort([ 5, 2, 4, 3, 1 ]);
