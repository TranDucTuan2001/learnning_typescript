// Variables: const and let
/*1. When to use const
Dùng cho hằng số. UPPER_CASE
Dùng cho biến mà không có nhu cầu thay đổi giá trị. camelCase*/

// constants
const API_URL = 'https://api.com';
const BACKGROUND_URL = 'https://image.com'
const DEFAULT_SIZE = 12;
const SECONDS_PER_HOUR = 3600;

const channelName = 'Easy Frontend';
const studentId = 123;
const isActive = true;
const student = {};
student.name = 'Bob';
const numberList = [];
numberList.push(1);

/*2. When to use let
Dùng cho những biến có nhu cầu thay đổi bằng việc thực hiện phép gán. (re-assignment)*/ 

let count = 1;
count++;
for (let i = 0; i < 10; i++) {
console.log(i);
}
let numberList = [1, 2, 3];
numberList = [];