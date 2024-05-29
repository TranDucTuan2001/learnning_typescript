// Explicit types
// Khai báo kiểu dữ liệu trong typescript thì sử dụng dấu 2 chấm đằng sau tên biến.
let count: number = 123;
let studentName: string = 'Alice';
let isActive: boolean = true;
const numberList: number[] = [1, 2, 3];

// Infered types
// Typescript thông minh detect được kiểu dữ liệu tương ứng ngay cả khi mình không khai báo cụ thể
// kiểu dữ liệu.
let count = 123;
let studentName: string = 'Alice';
let isActive: boolean = true;
const numberList: number[] = [1, 2, 3];