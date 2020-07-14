const calculateChange = function(total, cash) {
  let change = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };
  let diff = cash - total;
  
  while (diff > 0) {
    if (diff >= 2000) {
      diff += -2000;
      change.twentyDollar += 1;
    } else if (diff < 2000 && diff >= 1000) {
      diff += -1000;
      change.tenDollar += 1;
    } else if (diff < 1000 && diff >= 500) {
      diff += -500;
      change.fiveDollar += 1;
    } else if (diff < 500 && diff >= 200) {
      diff += -200;
      change.twoDollar += 1;
    } else if (diff < 200 && diff >= 100) {
      diff += -100;
      change.oneDollar += 1;
    } else if (diff < 100 && diff >= 25) {
      diff += -25;
      change.quarter += 1;
    } else if (diff < 25 && diff >= 10) {
      diff += -10;
      change.dime += 1;
    } else if (diff < 10 && diff >= 5) {
      diff += -5;
      change.nickel += 1;
    } else if (diff < 5 && diff >= 1) {
      diff += -1;
      change.penny += 1;
    }
  } let finalChange = {};
   for (i in change) {
     if (change[i]!== 0) {
       finalChange[i] = change[i];
     }
  } return finalChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000)); 


