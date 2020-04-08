describe('Bubble Sort', function () {
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough();
  });

  describe('handles an empty array', function () {
    it('array already sorted', function () {
      expect(bubbleSort([])).toEqual([]);
    });
  });

  describe('handles single items', function () {
    it('array already sorted', function () {
      expect(bubbleSort([1])).toEqual([1]);
      expect(window.swap.calls.count()).toEqual(0);
    });
  });

  describe('handles multiple items', function () {
    it('array already sorted', function () {
      expect(bubbleSort([2, 3])).toEqual([2, 3]);
      expect(window.swap.calls.count()).toEqual(0);
    });
    it('array is unsorted - 2 items', function() {
      expect(bubbleSort([3,2])).toEqual([2,3]);
      expect(window.swap.calls.count()).toEqual(1)
    })
    it('array is unsorted - 3 items', function() {
      expect(bubbleSort([3,2,1])).toEqual([1,2,3]);
      expect(window.swap.calls.count()).toEqual(1)
    })
  });
});

// [3,2],1
// [2,3],1

// 2,[3,1]
// 2,[1,3]
// 2,1,|3|

// [2,1]|3|
// [1,2]|3|
// 1,|2,3|

