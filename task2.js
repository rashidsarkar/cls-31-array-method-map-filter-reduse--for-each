const nuber = [1, 3, 5, 7, 9];
const nuber2 = [1, 2, 5, 7, 9];
nuber.forEach((item, index, arr) => {
  if (item % 2 === 0) {
    arr[index] = item;
  } else {
    arr[index] = item + 1;
  }
});
// console.log(nuber);
// const nuber2 = [1, 3, 5, 7, 9];

const newArr = nuber2.map((item) => {
  if (item % 2 === 0) {
  } else {
    item += 1;
  }
  return item;
});
// console.log(newArr);

// const newArry3 = [33, 50, 79, 78, 90, 101, 30];
// const newarr3 = newArry3.filter((item) => {
//   item % 10 === 0;
// });
// console.log(newarr3);
