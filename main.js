const mm = [0,0,1,2,3,4,5,6,"hh", "9",80,100];
console.log(mm);
const removed = mm.splice(6, 7);
console.log(removed);

//
const arr = [1, 2, 3, 4, 5, 6, 7];
const filterOdd = (arr) => {
  return arr.filter((num) => num % 2 !== 0);
};
const arr1 = filterOdd(arr);

// Tim so lon thu 2
const arr3 = [4, 3, 1, 5, 6, 2, 11];
const arr4 = arr3.sort((a, b) => {
  return b - a;
});

//
const m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];
const m1 = m.filter((item) => typeof item === "number");
const m2 = m1.map((item) => item * item);
// 

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

