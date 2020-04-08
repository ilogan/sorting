describe('Split Array function', function() {
	it('is able to split an array into two halves', function() {
		// your code here
		expect(split([ 1, 2, 3, 4, 5, 6, 7, 8 ])).toEqual([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]);
	});
});
describe('Merge function', function() {
	it('is able to merge two sorted arrays into one sorted array', function() {
		// test the merging algorithm
		expect(merge([ 1, 2, 5, 6, 9 ], [ 3, 4, 7, 10 ])).toEqual([ 1, 2, 3, 4, 5, 6, 7, 9, 10 ]);
	});
});
describe('Merge Sort function', function() {
	it('Merge sorts one unsorted array', function() {
		// test the merging algorithm
		expect(mergeSort([ 5, 2, 4, 3, 1 ])).toEqual([ 1, 2, 3, 4, 5 ]);
	});
});
