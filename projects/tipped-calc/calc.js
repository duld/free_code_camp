
function calc_chamberIncentive(tires=21, perTireIncentive=0.2) {
  return tires * perTireIncentive;
}

function calc_hourlyPay( hours, basePay) {
  if (!hours || !basePay) {
    return 0;
  }

  // calculate how many hours will be paid at "time and a half" rate and "double time" rate
  let timeAndAhalf, doubleTime;
  if (hours > 8) {
    timeAndAhalf = hours > 12 ? 4 : hours - 8;
    doubleTime = hours > 12 ? hours - 12 : 0;
  }

  let baseHours = hours - (timeAndAhalf + doubleTime);

  return (baseHours * basePay) + (timeAndAhalf * (basePay * 1.5)) + (doubleTime * (basePay * 2));
}

function calc_averageHourlyPay(hours, totalPay ) {
  if (!hours || !totalPay) {
    return 0;
  }
  return (totalPay * 100) / (hours * 100);
}


function log_pay_info(hours, chambers) {
  let hourlyPay = calc_hourlyPay(hours, 9.25);
  let tireIncentive = calc_chamberIncentive() * chambers;
  let averagePay = calc_averageHourlyPay(hours, hourlyPay + tireIncentive);

  console.log(`Hours: ${hours}, Chambers: ${chambers}`)
  console.log(hourlyPay, tireIncentive);
  console.log(`Total Pay: $${hourlyPay + tireIncentive}`);
  console.log(`Average Hourly Wage: $${averagePay}\n`);
  
}

// console.log();
// log_pay_info(10, 10);
// log_pay_info(11, 10);
// log_pay_info(12, 10);
// log_pay_info(13, 10);
// log_pay_info(14, 10);
// log_pay_info(15, 10);
// log_pay_info(20, 10);
// log_pay_info(20000, 10);

function loan_calc(loanAmmount, interest, overpayment) {
  let annual = 12 // 12 payments in a year
  let payments = [];

  for (let i = 0; i < annual; i++, loanAmmount -= overpayment) {
    let monthlyInterestPayment = (loanAmmount * interest) / 12;
    payments.push(monthlyInterestPayment);
  }

  return payments;
}

let oneHundredOverpay = loan_calc(30504.70, .1404, 100);
console.log(oneHundredOverpay)

oneHundredOverpay = oneHundredOverpay.reduce((acc, cur) => {
  return acc += cur;
}, 0)

let noOverpay = loan_calc(30504.70, .1404, 0)
console.log(noOverpay);

noOverpay = noOverpay.reduce((acc, cur) => {
  return acc += cur;
}, 0)

console.log(noOverpay)
console.log(oneHundredOverpay)
console.log(noOverpay - oneHundredOverpay)


let loans = {
  "01" : [36325.51, .13125],
  "02" : [30504.70, .1404],
  "03" : [28410.24, .105],
  "04" : [11235.90, .7], 
  "05" : [8168.06, .68],
  "06" : [5840.86, .56],
  "07" : [5516.63, .45],
  "08" : [4840.27, .56],
  "09" : [3922.56, .655],
  "10" : [3671.86, .655],
  "11" : [3493.45, .6],
  "12" : [2692.99, .68],
  "13" : [2177.03, .68]
}

// calculate minimums
// return an array of all the interest owed per loan
// [343, 343, 55, 22, 12, 123, 545, 4]

// figure out how much I pay each month on student loans.
// use that as a 'budget' to be allocated per loan

// figure out what the total interest payment I need to make for that month.

// subtract form budget, then subtract from a single loan - a principal amount.

// - repeat

// Goal

// figure out how many months it would take to repay a single loan, and what the total cost would be.
