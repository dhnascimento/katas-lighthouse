const cash = 2000;
const total = 500;

let change = {};
let diff = ((cash - total)/100).toPrecision(3);

console.log(diff);

while (diff > 0) {
  if (diff >= 20) {
    if (change.twentyDollar >= 1) {
      diff += -20;
      change.twentyDollar += 1;
    } else {
      diff += -20;
      change.twentyDollar = 1;
    }
  } else if (diff >= 10) {
    if (change.tenDollar >= 1) {
      diff += -10;
      change.tenDollar += 1;
    } else {
      diff += -10;
      change.tenDollar = 1;
    }
  } else if (diff >= 5) {
    if (change.fiveDollar >= 1) {
      diff += -5;
      change.fiveDollar += 1;
    } else {
      diff += -5;
      change.fiveDollar = 1;
    }
  } else if (diff >= 2) {
    if (change.twoDollar >= 1) {
      diff += -2;
      change.twoDollar += 1;
    } else {
      diff += -2;
      change.twoDollar = 1;
    }
  } else if (diff >= 1) {
    if (change.oneDollar >= 1) {
      diff += -1;
      change.oneDollar += 1;
    } else {
      diff += -10;
      change.oneDollar = 1;
    }
  } else if (diff >= 0.25) {
    if (change.quarter > 1) {
      diff += -0.25;
      change.quarter += 1;
    } else {
      diff += -0.25;
      change.quarter = 1;
    }
  } else if (diff >= 0.10) {
    if (change.dime >= 1) {
      diff += -0.10;
      change.dime += 1;
    } else {
      diff += -0.10;
      change.dime = 1;
    }
  } else if (diff >= 0.05) {
    if (change.nickel >= 1) {
      diff += -0.10;
      change.nickel += 1;
    } else {
      diff += -0.10;
      change.nickel = 1;
    }
    } else {
      if (change.penny >= 1) {
        diff += -0.01;
        change.penny += 1;
      } else {
        diff += -0.01;
        change.penny = 1;
      }
    }
  }


  console.log(change);
