function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shippingCost = 0;

    if (orderAmount > 1000) {
        discount = 0.2;
    } else if (orderAmount >= 500) {
        discount = 0.1;
    }

    let discountedAmount = orderAmount - (orderAmount * discount);

    if (discountedAmount > 50) {
        shippingCost = 0;
    } else {
        shippingCost = 10;
    }

    return discountedAmount + shippingCost;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let orderAmount = parseFloat(await getUserInput("Enter the order amount: "));
    console.log(`Final payable amount: $${calculateFinalAmount(orderAmount)}`);
    readline.close();
})();
