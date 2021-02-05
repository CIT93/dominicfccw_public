const payment = {
    name: 'Dominic Walls',
    filingStatus: 1,
    salary: 650000,
    children: 1,
    stimulus: 600,
calculateAddChildrenAndStatus: function () {
        return this.children * this.stimulus
    },
    displayOnPage: function (message) {
        const el = document.createElement("p")
        el.textContent = message
        const output = document.getElementById("output")
        output.appendChild(el) 
    },
calculateAddIncomeAndStatus: function () {
   const total = Math.floor(this.salary) * this.filingStatus
    if (total <= 50000) {
       return 600
    } else if (total <= 120000) {
        return 1200
    } else if (total <= 150000) {
        return 225
    } else {
        return 0
    }
  }
}

payment.displayOnPage(`Based upon your salary and status, you are likely getting $${payment.calculateAddIncomeAndStatus()}. In addition, you will be receiving $${payment.calculateAddChildrenAndStatus()} for the dependent children.`)