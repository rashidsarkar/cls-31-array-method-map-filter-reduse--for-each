const pepole = [
  { name: "Salma", age: 21 },
  { name: "Mina", age: 24 },
  { name: "Rongila", age: 23 },
];

const pepoleAge = pepole.reduce((sum, item) => sum + parseInt(item.age), 0);
console.log(pepoleAge);
