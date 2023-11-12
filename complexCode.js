/*
   Filename: complexCode.js

   Description: This code implements a complex algorithm for sorting an array of integers.
   The algorithm is called Quick Sort and it uses the divide-and-conquer technique to achieve
   a time complexity of O(n log n). It also includes various helper functions for generating
   random arrays, displaying arrays, and swapping elements.
*/

// Function to generate a random array of integers of a given length
function generateRandomArray(length) {
  var array = [];
  for (var i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

// Function to display an array
function displayArray(array) {
  console.log(array.join(', '));
}

// Function to swap two elements in an array
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Partition function used in Quick Sort
function partition(array, low, high) {
  var pivot = array[high];
  var i = low - 1;
  
  for (var j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++;
      swap(array, i, j);
    }
  }
  
  swap(array, i + 1, high);
  return i + 1;
}

// Quick Sort algorithm
function quickSort(array, low, high) {
  if (low < high) {
    var pivotIndex = partition(array, low, high);
    
    quickSort(array, low, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, high);
  }
}

// Generate a random array of length 10
var array = generateRandomArray(10);

// Display the original array
console.log('Original Array:');
displayArray(array);

// Sort the array using Quick Sort
quickSort(array, 0, array.length - 1);

// Display the sorted array
console.log('Sorted Array:');
displayArray(array);