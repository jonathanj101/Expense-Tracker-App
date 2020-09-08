const tr = document.querySelector(".t-body__t-row")
const description = document.querySelector("#description")
const amount = document.querySelector("#amount")
const payment_type = document.querySelector("#payment-type")
const purchaseDate = document.querySelector("#date")
const buttonSubmit = document.querySelector(".submit")



function expenseDetail() {
    const tdDesc = document.createElement("td")
    const tdAmount = document.createElement("td")
    const tdPaymentType = document.createElement("td")
    const tdPurchaseDate = document.createElement("td")

    var displayPaymentText = payment_type.options[payment_type.selectedIndex].text

    tdDesc.textContent = description.value
    tdAmount.textContent = `$${amount.value}`
    tdPaymentType.textContent = displayPaymentText.value

    const date = new Date()

    let gettingDateFormat = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

    tdPurchaseDate.textContent = gettingDateFormat

    tr.appendChild(tdDesc)
    tr.appendChild(tdAmount)
    tr.appendChild(tdPaymentType)
    tr.appendChild(tdPurchaseDate)
}

buttonSubmit.addEventListener("click", expenseDetail)

