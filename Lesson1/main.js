// normal function
function log(name) {
  console.log(name);
}
function sum(a, b) {
  return a * b;
}
// Arrow function
const log1 = (name) => {
  console.log(name);
};
const logName = () => ({ name: "QTM" });
const sum1 = (a, b) => a * b;
// let and const
let name1 = "quang";
const name2 = "quang";
const arr1 = [1, 2, 3, 4];
const student = {
  name: "Hung",
  age: 15,
};
student.gender = "male";

// Spread Operator
const numberList = [1, 2, 3, 4, 5];
const numberList2 = [6, 7, 8, 9, 10];
const cloneNumberList = [...numberList, ...numberList2];

const student1 = {
  name: "Quang",
  age: "18",
};
const student2 = { ...student1 };
student2.gender = "male";

// map
const arrMap1 = [1, 2, 3, 4, 5]; // [2,4,6,8,10]
const arrMap2 = [];

arrMap1.forEach((item, index) => {
  arrMap2.push(item * 2);
});

const arrMap3 = arrMap1.map((item) => item * 2);

const arrMap4 = [
  { firstName: "Tran", lastName: "Quang" },
  { firstName: "Vu", lastName: "Anh" },
];

const arrMap5 = arrMap4.map((item, index) => {
  return `${item.firstName} ${item.lastName}`
})

console.log(arrMap5);

// ['Tran Quang', 'Vu Anh']
