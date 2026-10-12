// Problem: Check whether a given year is a leap year.
// Example: 2024 => true

function isLeapYear(year) {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    }
    return false;
}

const years = [1900, 2000, 2024, 2025, 2028];

years.forEach((year) => {
    console.log(`${year} => ${isLeapYear(year)}`);
});

// Output:
// 1900 => false
// 2000 => true
// 2024 => true
// 2025 => false
// 2028 => true
