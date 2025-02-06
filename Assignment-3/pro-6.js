function isEligibleForJob(age, experience, qualification) {
    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") {
        return "Eligible for the job";
    } else {
        return "Not eligible for the job";
    }
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
    let experience = parseInt(await getUserInput("Enter years of experience: "));
    let qualification = await getUserInput("Enter the qualification: ");
    console.log(isEligibleForJob(age, experience, qualification));
    readline.close();
})();
