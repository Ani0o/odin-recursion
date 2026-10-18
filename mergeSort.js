function merge(arr1, arr2) {
  const res = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      res[k] = arr1[i];
      i++;
      k++;
    } else {
      res[k] = arr2[j];
      j++;
      k++;
    }
  }
  while (i < arr1.length) {
    res[k] = arr1[i];
    i++;
    k++;
  }
  while (j < arr2.length) {
    res[k] = arr2[j];
    j++;
    k++;
  }
  return res;
}

function mergeSort(arr, start = 0, end) {
  if (end === undefined) end = arr.length;
  if (start >= end - 1) return [arr[start]];
  const mid = Math.trunc((start + end) / 2);

  const res1 = mergeSort(arr, start, mid);
  const res2 = mergeSort(arr, mid, end);
  return merge(res1 , res2);
}

console.log(mergeSort([105, 79, 100, 110]));
