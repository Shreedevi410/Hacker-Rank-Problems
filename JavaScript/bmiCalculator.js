function calculateBmi(weightKg, heightCm) {
    if (!Number.isFinite(weightKg) || weightKg <= 0) {
        throw new RangeError("Weight must be a positive number in kilograms.");
    }

    if (!Number.isFinite(heightCm) || heightCm <= 0) {
        throw new RangeError("Height must be a positive number in centimeters.");
    }

    const heightMeters = heightCm / 100;
    const bmi = weightKg / (heightMeters * heightMeters);
    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal range";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity range";
    }

    return { bmi, category };
}

const result = calculateBmi(68, 172);
console.log(`BMI: ${result.bmi.toFixed(1)}`);
console.log(`Category: ${result.category}`);