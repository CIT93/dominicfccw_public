// $600 per adult
// extra 600$ for children under 17
// married couples eliglible for 1,200$ check

let filingStatus = 'Single'
let adjustedIncome = 74999

let numberChildren = 1
let checkAmount = 0

// Check Logic
if (filingStatus === 'Single' && adjustedIncome < 75000) {
  checkAmount = 600 + numberChildren * 600
} else if (filingStatus === 'Married' && adjustedIncome < 150000) {
  checkAmount = 1200 + numberChildren * 600
} else if (filingStatus === 'HOH' && adjustedIncome < 112500) {
  checkAmount = 600 + numberChildren * 600
}

console.log('Your stimulus check will be $' + checkAmount + ' given your filing status of ' + filingStatus + ' and adjusted Income of ' + adjustedIncome)