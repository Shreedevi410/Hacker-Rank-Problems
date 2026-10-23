const scores = [85, 92, 78, 90, 88];

const total = scores.reduce((sum, score) => sum + score, 0);
const average = total / scores.length;

let grade;

if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`Average score: ${average}`);
console.log(`Grade: ${grade}`);
