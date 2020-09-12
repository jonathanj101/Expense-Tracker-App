// document.addEventListener('DOMContentLoaded', function () {
//     getFromLocalStorage()
// })

const tBody = document.querySelector(".t-body")
const description = document.querySelector("#description")
const amount = document.querySelector("#amount")
const payment_type = document.querySelector("#payment-type")
const purchaseDate = document.querySelector("#date")
const input = document.querySelectorAll('input')

const buttonSubmit = document.querySelector(".submit")
const buttonRemove = document.querySelector('.remove')
document.addEventListener('DOMContentLoaded', function () {
    getFromLocalStorage()
})

let expense_detail = []

function addExpense() {
    const tr = document.createElement('tr')
    tr.className = "tb-tr"

    const tdDesc = document.createElement("td")
    tdDesc.textContent = description.value

    const tdAmount = document.createElement("td")
    tdAmount.textContent = `$${amount.value}`

    const tdPaymentType = document.createElement("td")
    var displayPaymentText = payment_type.options[payment_type.selectedIndex].text
    tdPaymentType.textContent = displayPaymentText

    const tdPurchaseDate = document.createElement("td")
    const date = new Date()
    let gettingDateFormat = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

    const buttonRemove = document.createElement('td')
    buttonRemove.className = 'remove'
    buttonRemove.innerHTML = '&times;'

    tdPurchaseDate.textContent = gettingDateFormat

    tBody.appendChild(tr)

    tr.appendChild(tdDesc)
    tr.appendChild(tdAmount)
    tr.appendChild(tdPaymentType)
    tr.appendChild(tdPurchaseDate)
    tr.appendChild(buttonRemove)

    input.forEach(e => {
        e.value = ''
    })

    expense_detail.push({
        desc: tdDesc.textContent,
        amount: tdAmount.textContent,
        paymentType: tdPaymentType.textContent,
        dateOfPurchase: tdPurchaseDate.textContent
    })


    setLocalStorage(expense_detail)

    deleteExpense(buttonRemove)
}

function deleteExpense(buttonRemove) {
    buttonRemove.addEventListener("click", function (e) {
        e.target.parentElement.remove()
        let filtered = expense_detail.filter(expenseSelected => {
            return expenseSelected !== expense_detail[0]
        })
        expense_detail = filtered
        setLocalStorage(expense_detail)
    })
}

function setLocalStorage(expense_detail) {
    localStorage.setItem('Expenses', JSON.stringify(expense_detail))
}

function getFromLocalStorage() {
    let expense = JSON.parse(localStorage.getItem("Expenses"))
    if (expense !== null) {
        expenses = expense
        expenses.filter(e => {
            addExpense(e)
            // working on it still
            // console.log(typeof (e.desc))
            // const tdDesc = document.createElement("td")
            // tdDesc.textContent = e.desc

            // const tdAmount = document.createElement("td")
            // tdAmount.textContent = `$${e.amount}`

            // const tdPaymentType = document.createElement("td")
            // var displayPaymentText = payment_type.options[payment_type.selectedIndex].text
            // tdPaymentType.textContent = e.paymentType

            // const tdPurchaseDate = document.createElement("td")
            // const date = new Date()
            // let gettingDateFormat = e.dateOfPurchase
        })
    }
}

buttonSubmit.addEventListener("click", addExpense)