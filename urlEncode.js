const urlEncode = function(text) {
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " " && (i === 0 || i === text.length - 1)) {
      newText += "";
    } else if (text[i] === " ") {
      newText += "%20";
    } else {
      newText += text[i];
    }
  } return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));



/*for (let i = 0; i <= text.length; i++) {
  if (text[i] === " ") {
    text[i] = "%20";
    console.log(text[i]);
  }
}*/