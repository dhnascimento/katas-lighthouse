const talkingCalendar = function(date) {
  let monthList = ["January", "February", "March", "April", ,"May", "June", "July", "August", "September", "October", "November", "December"];
  let readableDate = "";
  readableDate += monthList[Number(date.slice(5,7))] + " ";
  if (date[8] === "0") {
    if (date[9] === "1") {
      readableDate += date.slice(9,10) + "st, ";
    } else if (date[9] === "2") {
      readableDate += date.slice(9,10) + "nd, ";
    } else if (date[9] === "3") {
      readableDate += date.slice(9,10) + "rd, ";
    } else {
      readableDate += date.slice(9,10) + "th, ";
    }
  } else if (date[8] === "1"){
    readableDate += date.slice(8,10) + "th, ";
  } else {
    if (date[9] === "1") {
      readableDate += date.slice(8,10) + "st, ";
    } else if (date[9] === "2") {
      readableDate += date.slice(8,10) + "nd, ";
    } else if (date[9] === "3") {
      readableDate += date.slice(8,10) + "rd, ";
    } else {
      readableDate += date.slice(8,10) + "th, ";
    }
  }
  readableDate += date.slice(0,4);
  return readableDate;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));



//December 2nd, 2017
/*
let d = "1987/08/04";
console.log(Number(d.slice(9,10))); */