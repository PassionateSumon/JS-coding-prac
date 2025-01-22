// *** All DSA type question practice -->

//**  1. Reverse a String
// const str1 = "hey there";
// const reversedString = (s) => {
//     return s.split("").reverse().join("");
// }
// console.log(reversedString(str1))

//** 2. Reverse the words in a string
// const str = " hello I am Sumon Mitra"
// const finalAnswer = (s) => {
//     return s.split(" ").reverse().join(" ");
// }
// console.log(finalAnswer(str));

// ** 3. Check if a string is a palindrome
// const str = "ababeaba"
// const isPalindrome = (s) => {
//     return s.split("").reverse().join("") === s;
// }
// console.log(isPalindrome(str))

// ** 4. Max number in an array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const maxNum = (a) => {
//     return Math.max(...a);
// }
// console.log(maxNum(arr));

// **5. Factorial of a number(recursive)
// const num = 5;
// const fact = (n) => {
//     if(n === 0 || n === 1) return 1;
//     return n * fact(n-1);
// }
// console.log(fact(num))

// **6. Fibonacci series
// const num = 10;
// const fibo = (n) => {
//     if(n === 0 || n === 1) return n;
//     return fibo(n-1) + fibo(n-2);
// }
// console.log(fibo(num));

// **7. Check two strings are anagram or not
// const s1 = "listen";
// const s2 = "silent";
// const isAnagram = (a,b) => {
//     return a.split("").sort().join("") === b.split("").sort().join("");
// }
// console.log(isAnagram(s1, s2));

// **8. Find duplicates in an array
// const arr = [1,1,1,2,2,3,4,4,4,5,5,5];
// const findDuplicates = (a) => {
//     // let m = new Map();
//     // let res = [];
//     // for(let i of a) {
//     //     if(m.has(i)) {
//     //         m.set(i, m.get(i)+1);
//     //     } else {
//     //         m.set(i,1);
//     //     }
//     // }
//     // for(let [key, value] of m) {
//     //     if(value > 1) {
//     //         res.push(key);
//     //     }
//     // }
//     // return res;

//     let s = new Set();
//     let res = new Set();
//     for(let i of a) {
//         if(s.has(i)) {
//             res.add(i);
//         } else {
//             s.add(i);
//         }
//     }
//     return res;

// }
// console.log(findDuplicates(arr));

// **9. Find the missing number in an array
// const arr = [1,2,3,4,6,7,8,9];
// const findMissingNum = (a) => {
//     const n = a.length + 1;
//     const actualTotal = n * (n+1) / 2;
//     const currTotal = a.reduce((acc, curr) => acc + curr);
//     const diff = actualTotal - currTotal;
//     return diff;
// }
// console.log(findMissingNum(arr));

// **10. Find missing numbers in an array
// const arr = [1, 3, 5, 7, 9, 11, 32];
// const findMissingNums = (a) => {
//   const maxNum = Math.max(...a);
//   const minNum = Math.min(...a);
//   let res = [];
//   for(let i = minNum; i <= maxNum; i++) {
//     if(!a.includes(i)) {
//         res.push(i);
//     }
//   }
//   return res;
// };
// console.log(findMissingNums(arr));

// **11. Merge two sorted arrays
// const arr1 = [1,3,5];
// const arr2 = [2,4,6];
// const mergedArray = (a,b) => {
//     return [...a, ...b].sort((a,b) => a-b);
// }
// console.log(mergedArray(arr1, arr2));

// **12. Remove duplicates from an array
// const arr = [1,1,1,2,2,3,4,4,4,5,5,5];
// const removeDuplicates = (a) => {
//     return [...new Set(a)];
// }
// console.log(removeDuplicates(arr));

// **13. Find the intersection of two arrays
// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7];
// const intersectionArray = (a,b) => {
//     return a.filter((i) => b.includes(i));
// }
// console.log(intersectionArray(arr1, arr2));

// **13. Find the union of two arrays
// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7];
// const intersectionArray = (a,b) => {
//     const res1 = a.filter((i) => !b.includes(i));
//     const res2 = b.filter((i) => !a.includes(i));

//     return [...res1, ...res2];

// }
// console.log(intersectionArray(arr1, arr2));

// **14. First non-repeating character in a string
// const str = "helhoo";
// const firstNonRepChar = (s) => {
//     for(let ch of s) {
//         if(s.indexOf(ch) === s.lastIndexOf(ch)) {
//             return ch;
//         }
//     }
// }
// console.log(firstNonRepChar(str));

// **15. Binary search
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const ele = 3;
// const BS = (a, e) => {
//   let start = 0,
//     end = a.length - 1;
//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if (a[mid] === e) return mid;
//     else if (a[mid] < e) start = mid + 1;
//     else end = mid - 1;
//   }
//   return -1;
// };
// console.log(BS(arr, ele));

// **16. Find the k-th largest number in an array
// const arr = [21,12,33,4,5,98,77,6];
// const k = 3;
// const kThLargest = (a,k) => {
//     a.sort((a,b) => b-a);
//     return a[k-1];
// }
// console.log(kThLargest(arr,k));

// **17. Move all zeros to the end
// const arr = [0,1,0,3,12];
// const moveZeros = (a) => {
//     // return a.filter(i => i !== 0).concat(a.filter(i => i === 0));
//     const nonZeros = a.filter(i => i !== 0);
//     const zeros = a.filter(i => i === 0);
//     return [...nonZeros, ...zeros];
// }
// console.log(moveZeros(arr));

// **18. Find the longest substring without repeating characters
// const str = "abba";
// const longestSubs = (s) => {
//     let left = 0, maxLen = 0;
//     let set = new Set();
//     for(let right = 0; right < s.length; right++) {
//         while(set.has(s[right])) {
//             set.delete(s[left]);
//             left++;
//         }
//         set.add(s[right]);
//         maxLen = Math.max(maxLen, right-left+1);
//     }
//     return maxLen;
// }
// console.log(longestSubs(str));

// **19. Find the majority element
// const arr = [3, 3, 4, 2, 3, 3, 3];
// const majorityElement = (a) => {
//     let map = new Map();
//     for(let i of a) {
//         if(map.has(i)) {
//             map.set(i, map.get(i)+1);
//         } else {
//             map.set(i,1);
//         }
//     }
//     let tar = a.length/2;
//     for(let [key, value] of map) {
//         if(value >= tar) {
//             return key;
//         }
//     }
// }
// console.log(majorityElement(arr));

// **20. Rotate array by k position
// const arr = [1,2,3,4,5];
// const k = 12;
// const rotateArray = (a,k) => {
//     k = k % a.length;
//     return [...a.slice(-k), ...a.slice(0, a.length-k)];
// }
// console.log(rotateArray(arr,k));

// **21. Missing & Repeating
// const arr = [1,3,3,4];
// const missingRepeating = (a) => {
//     const len = a.length;
//     const actualSum = (len * (len+1))/2;
//     const actualSqSum = (len * (len+1) * (2*len+1))/6;
//     let currSum = 0, currSqSum = 0;

//     for(let i of a) {
//         currSum += i;
//         currSqSum += i*i;
//     }

//     const diffSum = actualSum - currSum;
//     const diffSqSum = actualSqSum - currSqSum;

//     const missingNum = (diffSum + diffSqSum/diffSum)/2;
//     const repeatingNum = missingNum - diffSum;

//     return {missingNum, repeatingNum};
// }
// console.log(missingRepeating(arr));

// **22. Merge sort
// const arr = [12, 11, 13, 5, 6, 7];
// const mergeSort = (a) => {
//   if (a.length <= 1) return a;
//   const mid = Math.floor(a.length / 2);
//   const left = mergeSort(a.slice(0, mid));
//   const right = mergeSort(a.slice(mid));
//   return merge(left, right);
// };
// const merge = (left, right) => {
//   let ans = [],
//     i = 0,
//     j = 0;
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       ans.push(left[i]);
//       i++;
//     } else {
//       ans.push(right[j]);
//       j++;
//     }
//   }
//   return [...ans, ...left.slice(i), ...right.slice(j)];
// };
// console.log(mergeSort(arr));

// **23. Quick sort 
// const arr = [10, 7, 8, 9, 1, 5];
// const quickSort = (a) => {
//     if(a <= 1) return a;

//     const pivot = a[a.length-1];
//     const left = a.filter(i => i < pivot);
//     const right = a.filter(i => i > pivot);
//     const middle = a.filter(i => i === pivot);

//     console.log(pivot, left, middle, right);

//     return [...quickSort(left), ...middle, ...quickSort(right)];
// }
// console.log(quickSort(arr));

// **24. Insertion sort
// const arr = [12, 11, 13, 5, 6];
// const insertionSort = (a) => {
//     for(let i = 1; i < a.length; i++) {
//         let key = a[i];
//         let j = i-1;

//         while(j >= 0 && a[j] > key) {
//             a[j+1] = a[j];
//             j--;
//         }
//         a[j+1] = key;
//     }
//     return a;
// }
// console.log(insertionSort(arr));
