// Type Alias vs Interface

// Object type
type Student = {
  readonly id: number;
  name: string;
  age?: number; // optional
};

interface Student {
  readonly id: number;
  name: string;
  age?: number; // optional
}

const studentA: Student = {
  id: 1,
  name: 'Alice',
};
const studentB: Student = {
  id: 2,
  name: 'Bob',
  age: 18,
};

// Union type
/*Tạm dịch kết hợp 2 hoặc nhiều kiểu dữ liệu lại với nhau để tạo ra một kiểu dữ liệu mới.
Cho phép giá trị có thể chấp nhận hoặc là kiểu dữ liệu này, hoặc là kiểu dữ liệu kia.*/
type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;
interface Student {
  id: number | string;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
}
let x: number | string = 1;
x = 'super'; // works
x = 123; // works
x = false; // ts error: Type 'boolean' is not assignable to type 'string |number'.ts(2322)

// Intersection type

interface BusinessPartner {
  name: string;
  credit: number;
}
interface Identity {
  id: number;
  name: string;
}
interface Contact {
  email: string;
  phone: string;
}
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

// interface way
interface Employee extends Identity, Contact {}
interface Customer extends BusinessPartner, Contact {}

type Customer = BusinessPartner & Contact;
let c: Customer = {
  name: 'ABC Inc.',
  credit: 1000000,
  email: 'sales@abcinc.com',
  phone: '(408)-897-5735',
};
type Employee = Identity & BusinessPartner & Contact;
let e: Employee = {
  id: 100,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)-897-5684',
  credit: 1000,
};

// Add new props
interface Student {
  id: number;
  name: string;
}
// declaration merging
// works, no error
interface Student {
  age?: number;
}
const alice: Student = {
  id: 1,
  name: 'Alice',
};
type Student = {
  id: number;
  name: string;
};
// ts error: Duplicate identifier 'Student'.
type Student = {
  age?: number;
};

/*Cách đặt tên type vs interface
Use PascalCase instead of camelCase. Use Student instead of student
Don't use prefix I. Use Student instead of IStudent*/

interface Product {
  id: string;
  title: string;
}
interface ProductProps {
  data: Product;
}
function Product({ data }: ProductProps) {}
