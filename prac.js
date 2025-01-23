// ** Merge sort
// const arr = [9,6,5,4,3,2];
// const mergeSort = (a) => {
//     if(a.length <= 1) return a;
//     let mid = a.length/2;
//     let left = mergeSort(a.slice(0,mid));
//     let right = mergeSort(a.slice(mid));
//     return merge(left, right);
// }
// const merge = (left, right) => {
//     let ans = [], i = 0, j = 0;
//     while(i < left.length && j < right.length) {
//         if(left[i] < right[j]) {
//             ans.push(left[i]);
//             i++;
//         } else {
//             ans.push(right[j]);
//             j++;
//         }
//     }
//     return [...ans, ...left.slice(i), ...right.slice(j)];
// }
// console.log(mergeSort(arr));

// ** Quick sort
// const arr = [9,6,5,4,3,2];
// const quickSort = (a) => {
//     if(a.length <= 1) return a;
//     let pivot = a[a.length-1];
//     let left = a.filter(i => i < pivot);
//     let right = a.filter(i => i > pivot);
//     let middle = a.filter(i => i === pivot);

//     return [...quickSort(left), ...middle, ...quickSort(right)];
// }
// console.log(quickSort(arr));

// ** Insertion sort
// const arr = [9,6,5,4,3,2];
// const insertionSort = (a) => {
//     for(let i = 1; i < a.length; i++) {
//         let key = a[i];
//         let j = i-1;
//         while(j >= 0 && a[j]>key) {
//             a[j+1] = a[j];
//             j--;
//         }
//         a[j+1] = key;
//     }
//     return a;
// }
// console.log(insertionSort(arr));

// ** Bubble sort
// const arr = [9,6,5,4,3,2];
// const bubbleSort = (a, n = arr.length) => {
// Iterative
// let n = a.length;
// for(let i = 0; i < n-1; i++) {
//     let swapped = false;
//     for(let j = 0; j < n-i-1; j++) {
//         if(a[j] > a[j+1]) {
//             [a[j], a[j+1]] = [a[j+1], a[j]];
//             swapped = true;
//         }
//     }
//     if(!swapped) break;
// }
// return a;

// Recursive
// if(n == 1) return a;
// for(let i = 0; i < n-1; i++) {
//     if(a[i] > a[i+1]) {
//         [a[i] , a[i+1]] = [a[i+1], a[i]];
//     }
// }
// return bubbleSort(a, n-1);
// }
// console.log(bubbleSort(arr));

// ** Merge intervals
// const arr = [[1, 3], [2, 6], [8, 10], [15, 18]];
// const mergeIntervals = (a) => {
//     a.sort((a,b) => a[0]-b[0]);
//     let ans = [a[0]];
//     for(let i = 1; i < a.length; i++) {
//         let prev = a[i-1];
//         let curr = a[i];
//         if(prev[1] >= curr[0]) {
//             prev[1] = Math.max(prev[1], curr[1]);
//         } else {
//             ans.push(curr);
//         }
//     }
//     return ans;
// }
// console.log(mergeIntervals(arr));

// ** subarray with given sum
// const arr = [1, 3, 4, 6, 6, 8, 9];
// const sum = 16;
// const subSum = (a, t) => {
//   let n = a.length,
//     left = 0,
//     curr = 0;
//   for (let right = 0; right < n; right++) {
//     curr += a[right];

//     while (curr > t) {
//       curr -= a[left];
//       left++;
//     }

//     if (curr === t) return a.slice(left, right + 1);
//   }
//   return [];
// };
// console.log(subSum(arr, sum));


