// Generics
// Hiểu nôm na: kiểu dữ liệu mà có nhận tham số và trả về kiểu dữ liệu tương ứng.
interface Student {
  id: number;
  name: string;
}
const numberList: Array<number> = [1, 2, 3];
const wordList: Array<string> = ['easy', 'frontend'];
const studentList: Array<Student> = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// Thử định nghĩa kiểu generic tương tự như Array:
// Index signature là kiểu string --> các props khác phải compatible với type của index signature.

interface Student {
  id: number;
  name: string;
}
interface List<T> {
  length: number;
  [index: number]: T;
}
const numberList: List<number> = [1, 2, 3];
const wordList: List<string> = ['easy', 'frontend'];
const studentList: List<Student> = [
  { id: 1, name: 'easy' },
  { id: 2, name: 'frontend' },
];

// keyof operator
// typeof operator

console.log(typeof 'easy frontend'); // 'string'
console.log(typeof 123); // 'number'
console.log(typeof false); // 'boolean'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof function () {}); // 'function'
console.log(typeof window !== 'undefined'); // true on client, false on server;

// Mapped types
// Dùng index signature để định nghĩa kiểu dữ liệu có props lấy từ kiểu dữ liệu khác.

interface Student {
  id: number;
  name: string;
}
type MappedTypes = {
  [Key in keyof Student]: boolean;
};
