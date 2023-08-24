const newArry3 = [33, 501, 79, 78, 90, 101, 30];
const newarr3 = newArry3.filter((item) => {
  return item % 10 === 0;
});
// console.log(newarr3);
const arrFind = newArry3.find((item) => item % 10 === 0);
// console.log(arrFind);

const instructor = [
  { name: "nodi", age: 28, position: "Serior" },
  { name: "Akil", age: 26, position: "Jonior" },
  { name: "Salma", age: 21, position: "Serior" },
];

const myTeacher = instructor
  .filter((item) => item.position == "Serior")
  .map((item) => item.name);

console.log(myTeacher);
