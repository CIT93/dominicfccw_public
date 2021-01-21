// $600 per adult
// extra 600$ for children under 17
// married couples eliglible for 1,200$ check
let myStatus = 'Single'
//let myStatus = 'Married'
//let myStatus = 'headOfHouse'

let grossIncome = 40000
let dependentChildren = 2
let stimulusPayment = 0


if (myStatus = 'Single' && grossIncome <= 50000 ) {
    stimulusPayment = 600 + dependentChildren * 600
} else if (myStatus = 'Married' && grossIncome <= 100000) {
    stimulusPayment = 1200 + dependentChildren * 600
} else if (myStatus = 'headOfHouse' && grossIncome <= 90000) {
    stimulusPayment = 600 + dependentChildren * 600
}

console.log('You are likely getting $' + stimulusPayment + ' of stimulus payment.')