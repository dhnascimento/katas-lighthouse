function sumLargestNumbers(array) {
  if (array.length === 1) {
    return array[0];
  } else {
  let sorted_array = array.sort(function(a,b) {return a - b});
  return sorted_array[sorted_array.length - 2] + sorted_array[sorted_array.length - 1];
  } 
}

console.log(sumLargestNumbers([1]));
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));