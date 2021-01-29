let totalPay = function(salary, filingType) {

    if (salary >=75000, filingType = `Adult`) {
        paymentAmount = 600
    } else if (salary >=150000, filingType = `Married`) {
        paymentAmount = 1200
    } else if (salary >=125000, filingType = `HOH`) { 
        paymentAmount = 600
    } else 
        console.log(`Incomplete Form`)
    return `$${paymentAmount} based on your salary and filing type.`
}

const displayOnPage = function(message) {
    const el = document.createElement("p")
    el.textContent = message
    const output = document.getElementById("output")
    output.appendChild(el)
}
let stimulus = totalPay(75000, `Adult`)
displayOnPage(stimulus)