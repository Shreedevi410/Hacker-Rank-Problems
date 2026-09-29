function calculateTip(billAmount, tipPercent, people = 1) {
    if (!Number.isFinite(billAmount) || billAmount < 0) {
        throw new RangeError("Bill amount must be a non-negative number.");
    }

    if (!Number.isFinite(tipPercent) || tipPercent < 0) {
        throw new RangeError("Tip percentage must be a non-negative number.");
    }

    if (!Number.isInteger(people) || people < 1) {
        throw new RangeError("People must be a positive whole number.");
    }

    const tipAmount = Math.round(billAmount * tipPercent) / 100;
    const totalAmount = billAmount + tipAmount;

    return {
        tipAmount,
        totalAmount,
        amountPerPerson: totalAmount / people,
    };
}

const result = calculateTip(84.5, 18, 3);

console.log(`Tip: $${result.tipAmount.toFixed(2)}`);
console.log(`Total: $${result.totalAmount.toFixed(2)}`);
console.log(`Per person: $${result.amountPerPerson.toFixed(2)}`);