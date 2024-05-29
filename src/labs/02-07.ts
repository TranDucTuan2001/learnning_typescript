// Destructuring

// Object destructuring
interface Student {
  id: number;
  name: string;
  age: number;
  gender: string;
}
const bob = {
  id: 1,
  name: 'Bob',
  age: 18,
  gender: 'male',
};
// OLD WAY
const id = bob.id;
const name = bob.name;
// NEW WAY
const { id, name } = bob;

const bob = {
  id: 1,
  name: 'Bob',
  age: 18,
  gender: 'male',
};
// OLD WAY
const id = bob.id;
const rest = {
  name: bob.name,
  age: bob.age,
  gender: bob.gender,
};
// NEW WAY WITH REST OPERATOR
const { id, ...rest } = bob;

// Clone object with spread operator
const bob1 = {
  id: 1,
  name: 'Bob 1',
  age: 18,
  gender: 'male',
};
const bob2 = {
  ...bob1,
  name: 'Bob 2',
};
bob1 === bob2; // false;

// Array destructuring

const fullName = 'Easy Frontend';
const wordList = fullName.split(' '); // ['Easy', 'Frontend']
// OLD WAY
const firstName = wordList[0];
const lastName = wordList[1];
// NEW WAY
const [firstName, lastName] = wordList;

// Array with rest operator
const [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining);
// 1, 2, [3, 4]

// Clone array with spread operator
const numberList = [1, 2, 3, 4];
const newList1 = [...numberList]; // [1, 2, 3, 4]
const newList2 = [...numberList, 5, 6]; // [1, 2, 3, 4, 5, 6]

// Clone array of objects (BE CAREFUL!!!)
interface Student {
  id: number;
  name: string;
  age: number;
  gender: string;
}
const studentList: Student[] = [
  { id: 1, name: 'Alice', age: 11, gender: 'female' },
  { id: 2, name: 'Bob', age: 12, gender: 'male' },
];
const newList = [...studentList];
newList[0].name = 'Alice Alice';
console.log(studentList[0].name); // ???

// Swap two items
let x = 5;
let y = 10;
// OLD WAY
let temp = x;
x = y; // 10
y = temp; // 5
// NEW WAY
[y, x] = [x, y];
