const submitBtn = document.querySelector(".submit")
submitBtn.addEventListener("click", addExpense)

function addExpense() {
    const description = document.querySelector("#description").value
    const amount = document.querySelector("#amount").value
    const type = document.querySelector("#payment-type").value
    const date = document.querySelector("#date").value


    if (description === '' || amount === '' || type === '' || date === '') {
        alert("Empty expenses detail ==> No expenses to track!")
    } else {
        const expenses = [description, amount, type, date]
        displayExpense(expenses)
    }
    const input = document.querySelectorAll('input')

    input.forEach(e => e.value = '')
}

function displayExpense(expenses) {
    const tBody = document.getElementById("t-body")
    const tRow = document.createElement('tr')

    tBody.appendChild(tRow)

    for (i = 0; i < expenses.length; i++) {
        const td = document.createElement('td')
        td.textContent = expenses[i]
        tRow.appendChild(td)

    }
    const deleteBtn = document.createElement('td')
    deleteBtn.classList.add('remove')
    deleteBtn.innerHTML = "&times;"
    tRow.appendChild(deleteBtn)

    deleteExpense(deleteBtn)

}

function deleteExpense(buttonRemove) {
    buttonRemove.addEventListener("click", (e) => e.target.parentElement.remove())
}
