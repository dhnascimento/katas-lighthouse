const repeatNumbers = function(data) {
  let stringNumber = ""
  for (let i = 0; i < data.length; i++) {
    if (i === data.length - 1){
      numberToString = data[i][0].toString();
      stringNumber += numberToString.repeat(data[i][1]);
    } else if (i !== data.length - 1 ) {
      numberToString = data[i][0].toString();
      stringNumber += numberToString.repeat(data[i][1]);
      stringNumber += ", ";
    } 
  } return stringNumber;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));