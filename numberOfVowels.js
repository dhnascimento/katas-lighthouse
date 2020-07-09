function numberOfVowels (data) {
  let result = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i <= data.length; i ++) {
    if (vowels.includes(data[i]) === true) {
      result += 1;
    }
  } return result;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

/*

const vowels = ["a", "e", "i", "o", "u"];

let test = "orange"
console.log(test.length);
console.log(test[0]);
console.log(vowels.includes("o")); */