const darkTheme = document.querySelector("#dark-theme");
const main = document.querySelector("main");
const aside = document.querySelector("aside");
const nav = document.querySelector("nav");
const card = document.querySelector(".card");
const cashFlowAnalysis = document.querySelector(".cash-flow-analysis");
const allTransactions = document.querySelector(".all-transactions");
const preference = document.querySelector(".preference");
const logo = document.querySelector(".logo");
const section = document.querySelector("section");
const trackingCards = document.querySelector("#tracking-cards")

const currenetBalance = document.querySelector("#current-balance");
const totalIncome = document.querySelector("#total-income");
const totalExpense = document.querySelector("#total-expense");
const totalTransaction = document.querySelector("#total-transaction");
const totalTransactionCounting = document.querySelector("#total-transaction h1");

const addTransaction = document.querySelector("#add-transactionBtn");
const formContainer = document.querySelector(".form-container");
const formCloseBtn = document.querySelector("#form-closeBtn");
const userForm = document.querySelector("#user-form");
const tableBody = document.querySelector("#table-body");

const incomeValue = document.querySelector("#total-income h1");
const expenseValue = document.querySelector("#total-expense h1");
const currentBalanceValue = document.querySelector("#current-balance h1");




darkTheme.addEventListener("click", () => {
    console.log("myself shivraj")
    main.style.backgroundColor = "#111827";
    aside.style.backgroundColor = "#1f2937";
    aside.style.color = "white";
    nav.style.backgroundColor = "#1f2937";
    card.style.backgroundColor = "#1f2937"
    currenetBalance.style.backgroundColor = "#1f2937";
    totalTransaction.style.backgroundColor = "#1f2937";
    totalExpense.style.backgroundColor = "#1f2937";
    totalIncome.style.backgroundColor = "#1f2937";
    cashFlowAnalysis.style.backgroundColor = "#1f2937";
    allTransactions.style.backgroundColor = "#1f2937";
    preference.style.backgroundColor = "#1f2937";
    logo.style.color = "white";
    nav.style.color = "white";
    section.style.color = "white";


});


addTransaction.addEventListener("click", () => {
    formContainer.style.display = "flex";
});

formCloseBtn.addEventListener("click", () => {
    formContainer.style.display = "none";
});




const transactions = JSON.parse(localStorage.getItem("data")) || [];


userForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const transactionType = document.querySelector("#transaction-type").value;
    const description = document.querySelector("#description").value;
    const amount = (document.querySelector("#amount").value);
    const date = document.querySelector("#date").value;
    const category = document.querySelector("#category").value;

    const data = {
        transactionType,
        description,
        amount,
        date,
        category
    };

    transactions.push(data);

    
    localStorage.setItem("data", JSON.stringify(transactions));

    
    renderTransactions();


    formContainer.style.display = "none";

    
    userForm.reset();

});

function renderTransactions() {

    tableBody.innerHTML = "";

    let finalIncome = 0;
    let finalExpense = 0;

    transactions.forEach((item) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.description}</td>
            <td>${item.category}</td>
            <td>${item.amount}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        `;

        tableBody.appendChild(row);

        if (item.transactionType === "Income") {
            finalIncome += Number(item.amount);
        } else {
            finalExpense += Number(item.amount);
        }

    });

    totalTransactionCounting.textContent = transactions.length;
    incomeValue.textContent = finalIncome;
    expenseValue.textContent = finalExpense;
    currentBalanceValue.textContent = finalIncome - finalExpense;

}


renderTransactions();

const resetBtn =document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => {

    const confirmReset = confirm("Are you sure? All transaction data will be deleted.");

    if (confirmReset) {

        localStorage.removeItem("data");

        transactions.length = 0;

        renderTransactions();

        alert("All transaction data has been deleted successfully.");

    }

});

const logout = document.querySelector("#logout");
logout.addEventListener("click", () => {
     window.location.href = "login.html";
})

