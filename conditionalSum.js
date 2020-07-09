function conditionalSum(values, condition) {
  if (values === []) {
    return 0;
  } else if (condition === "even") {
    let even_sum = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0){
        even_sum = even_sum + values[i];
      }
    } return even_sum;
  } else if (condition === "odd") {
    let odd_sum = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0){
        odd_sum = odd_sum + values[i];
      }
    } return odd_sum;
  } else {
    return 0;
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));