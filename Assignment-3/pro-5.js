function calculateTicketPrice(age, showTime) {
    let price = 12; // Standard price

    // Apply discount for Matinee show (before 5 PM)
    if (showTime < 17) {
        price *= 0.8; // 20% discount for Matinee show
    }

    // Apply discount for Senior citizens (above 60)
    if (age > 60) {
        price *= 0.7; // 30% discount for seniors
    }

    // Apply discount for Children (below 12)
    if (age < 12) {
        price *= 0.6; // 40% discount for children
    }

    return price;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

(async function () {
    let age = parseInt(await getUserInput("Enter the age: "));
    let showTime = parseInt(await getUserInput("Enter the show time in 24-hour format (e.g., 14 for 2 PM): "));
    console.log(`Final ticket price: $${calculateTicketPrice(age, showTime).toFixed(2)}`);
    readline.close();
})();
