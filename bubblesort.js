function bubbleSort(arr) {
  let count = arr.length - 1;
  for(let i = 0; i < arr.length - 1; i++) {
    swapRun(arr, count--)
  }
  return arr
}

function swap(arr, i) {
  let temp = arr[i];
  arr[i] = arr[i+1];
  arr[i+1] = temp;
}

function swapRun(arr, length) {
  for(let i = 0; i < length; i++) {
    let val1 = arr[i];
    let val2 = arr[i+1];
    if(val1 > val2) swap(arr, i)
  }
}
