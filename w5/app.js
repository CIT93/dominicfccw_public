const filing = {
    totalAmount: [],
    children: 1,
    filingStatus: [`individual`, `married`, `HOH`],
    displayOnPage: function (message) {
    },
    iiterativeStatus: function () {
        const stimulus = 600 * this.children
        this.filingStatus.forEach(function(filingStatus) {
            filing.displayOnPage(`You are filing with a ${filingStatus} status, and receiving ${stimulus} for your dependent children`)
        })
    },
    salaryAndFilingStatus: function (salary, filingStatus) {
        const total = Math.floor(salary) * filingStatus
        if (total <= 50000) {
            this.totalAmount.push(600)
        } else if (total <= 120000) {
            this.totalAmount.push(1200)
        } else if (total <= 150000) {
            this.totalAmount.push(225)
        } else {
            this.totalAmount.push(0)
        }
    }
}

filing.iiterativeStatus()

filing.salaryAndFilingStatus(12500)
filing.salaryAndFilingStatus(75000)
filing.salaryAndFilingStatus(150000)

const totalAmount = function () {
    filing.totalAmount.forEach(function(totalAmount) {
        filing.displayOnPage(`Based upon your adjusted gross income and status, you are likely ${totalAmount}.`)
    })
}

totalAmount()