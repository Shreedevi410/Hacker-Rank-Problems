// New JavaScript practice code
// This program calculates the average score and determines the grade.

function calculateAverage(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        throw new Error('Please provide a non-empty array of scores.');
    }

    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

const marks = [78, 85, 92, 88, 67, 95];
const average = calculateAverage(marks);
const finalGrade = getGrade(average);

console.log('Marks:', marks);
console.log('Average score:', average.toFixed(2));
console.log('Final grade:', finalGrade);
