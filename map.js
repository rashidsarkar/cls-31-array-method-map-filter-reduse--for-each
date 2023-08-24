let num2 = [56, 45, 78, 741, 21, 3, 584, 4, 6];
function dubleIt(num) {
  return num * 2;
}
const result = num2.map(dubleIt);
// console.log(result);
const output = num2.map((num) => num * 2);
console.log(output);
const numbers = [12, 10, 2, 6, 1, 5];
const dabol = numbers.map((item) => item * 2);
console.log(dabol);
const fiveAdd = numbers.map((item) => item + 5);
console.log(fiveAdd);
const friends = ["tom", "karim", "rongila"];
const leang = friends.map((item) => item[0]);
console.log(leang);
