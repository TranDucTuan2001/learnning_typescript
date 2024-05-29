/*So sánh khác kiểu dữ liệu với ==, thì sẽ được chuyển về number để so sánh. (**)
Với 3 dấu === thì sẽ giữ nguyên giá trị để so sánh.*/ 

2 == '2';
2 === '2';
// ts error: This condition will always return 'false' since the types'number' and 'string' have no overlap. ts(2367)

/*3. So sánh object
object, array và function là tham chiếu.
Khi so sánh 2 tham chiếu, thì địa chỉ của tham chiếu được so sánh, chứ không phải giá trị thật sự.*/ 
const studentA = { id: 1, name: 'Alice' };
const studentB = studentA;
studentA === studentB; // true;
studentA === { id: 1, name: 'Alice' }; // false

// usually, we just compare the id of two objects
const studentA = { id: 1, name: 'Alice' };
const studentB = { id: 1, name: 'Alice' };
studentA.id === studentB.id; // true

let student; // undefined
// fetch data
student = {
id: 1,
name: 'Alice',
}
// check truthy
if (student) {}

let student = {};
// fetch data
student = {
id: 1,
name: 'Alice',
}
if (student?.id) {}

/*null vs undefined
Something hasn't been initialized : undefined.
Something is currently unavailable: null
null is equal to undefined if using ==*/ 

null == undefined; // true;
null == 0; // false
null >= 0; // true
if (something == null) {} // either null or undefined
if (something) {} // any truthy value
if (!something) {} // any falsy value

// Check if a global variable existed
if (typeof window !== 'undefined') {
    // if window object is available or not
    // do something on client side
    }

    JSON.stringify({
        id: null,
        name: undefined,
        });
        // will return "{\"id\":null}"
        // undefined is removed from the JSON 💡