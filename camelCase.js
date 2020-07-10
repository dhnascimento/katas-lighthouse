const camelCase = function(input) {
  camelString = ""
  for (let i = 0; i < input.length; i++) {
    if (input[i-1] === " ") {
      camelString += input[i].toUpperCase();
    } else if (input[i] !== " ") {
      camelString += input[i]
    }
  } return camelString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));