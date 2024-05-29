// Ðiều cần lưu ý khi làm việc với function
/*Default function return type
Base on return keyword, typescript can inference the return type.*/

function sayHello() {
  console.log('Hi Easy Frontend');
}
// ts: function sayHello(): void

function sum(a: number, b: number) {
  return a + b;
}
// ts: function sum(a: number, b: number): number

// Explicit return type

function sum(a: number, b: number): number {
  return a + b;
}
// ts: function sum(a: number, b: number): number

function sum(a: number, b: number): number {
  return a + b.toString();
}
// ts error: Type 'string' is not assignable to type 'number'

// Optional and default parameter
/*Add question mark ? to tell typescript this is an optional parameter.
Parameter cannot have question mark and initializer.*/

// optional parameter
// this is how ts understand
// function getLength(numberList?: number[] | undefined): number
function getLength(numberList?: number[]) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
// default parameter
// this is how ts understand
// function getLength(numberList?: number[]): number
function getLength(numberList: number[] = []) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
// ts error: Parameter cannot have question mark and initializer.ts(1015)
function getLength(numberList?: number[] = []) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
// Other type: void and never

// function noop(): void
function noop() {
  return;
}
// function noop(): void
function noop() {}

// The never type represents values which are never observed. In a return type, this means that the
// function throws an exception or terminates execution of the program.

type NewType = number & string; // never

function fail(msg: string): never {
  throw new Error(msg);
}

function fn(x: string | number) {
  if (typeof x === 'string') {
    // do something
  } else if (typeof x === 'number') {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

// Destructuring parameter

function createStudent(id: number, name: string, age: number) {
  console.log(id, name, age);
}
createStudent(1, 'Bob', 18);

function createStudent(student: { id: number; name: string; age: number }) {
  const { id, name, age } = student;
  console.log(id, name, age);
}
createStudent({
  id: 1,
  name: 'Bob',
  age: 18,
});
function createStudent({ id, name, age }: { id: number; name: string; age: number }) {
  console.log(id, name, age);
}
createStudent({
  id: 1,
  name: 'Bob',
  age: 18,
});

interface Student {
  id: number;
  name: string;
  age: number;
}
function createStudent({ id, name, age }: Student) {
  console.log(id, name, age);
}
createStudent({
  id: 1,
  name: 'Bob',
  age: 18,
} as Student);
