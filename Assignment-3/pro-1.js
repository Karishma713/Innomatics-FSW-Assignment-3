function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";

    balance -= amount;
    return `Withdrawal successful. Remaining balance: $${balance}`;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let balance = parseFloat(await getUserInput("Enter your balance: "));
    let amount = parseFloat(await getUserInput("Enter amount to withdraw: "));
    let enteredPin = parseInt(await getUserInput("Enter your PIN: "));

    const pin = 7867;

    console.log(atmWithdrawal(balance, amount, pin, enteredPin));

    readline.close();
})();
