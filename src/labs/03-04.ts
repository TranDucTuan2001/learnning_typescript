// Enum in Typescript
/*
What: Tập hợp các giá trị cùng nhóm.
Why: Dễ dàng quản lý và truy xuất.
When: Sử dụng cho data một chiều, định nghĩa enum --> rồi sử dụng.*/

// Number enum

enum Status {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}
enum Status {
  PENDING = 3, // 3
  IN_PROGRESS, // 4
  DONE, // 5
  CANCELLED, // 6
}
enum Status {
  PENDING = 3,
  IN_PROGRESS = 5,
  DONE = 8,
  CANCELLED = 10,
}
enum Status {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}
// can assign any number to your enum variable
const stats1: Status = Status.PENDING;
const stats2: Status = 1;
const stats3: Status = -1;
// number enum --> support reverse mapping
console.log(Status[0]); // 'PENDING'
console.log(Status['DONE']); // 2

/*String enum
Don't have reverse mapping for string enum.*/
enum MediaTypes {
  JSON = 'application/json',
  XML = 'application/xml',
}
fetch('https://example.com/api/endpoint', {
  headers: {
    Accept: MediaTypes.JSON,
  },
}).then((response) => {
  // ...
});

/*When to use enum
Static data on Frontend, not the data from API response.
Not required to reverse map.
Prefer union types for data returned from API.*/
