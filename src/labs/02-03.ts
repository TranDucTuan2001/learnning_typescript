/*1. strict flag là gì?
Bật strict=true sẽ bật tất cả options liên quan tới strict lên true.
Mặc định các options liên quan tới strict là false, nhưng recommend sử dụng true
Config của từng option sẽ ưu tiên cao hơn so với "strict". Tức strict=true, mà
noImplicitAny=false thì giá trị cuối cùng vẫn là noImplicitAny=false.*/ 

/*2. Option: noImplicitAny
Khi typescript không thể xác định được kiểu dữ liệu của một biến nào đó, thì biến đó sẽ được mang
kiểu dữ liệu any
Khi bật lên true, nó sẽ báo lỗi nếu trường hợp này xảy ra, ngược lại bỏ qua lỗi này. */

/*Option: strictNullChecks
Khi bật lên true thì sẽ báo lỗi khi null/undefined được sử dụng không đúng. Ví dụ như gọi những
hàm của number, string, array, ... chẳng hạn.
Khi config false thì sẽ bỏ qua, nhưng có rủi ro xảy ra lỗi lúc runtime.*/ 

/*4. Option: alwaysStrict
Khi bật lên true thì typescript sẽ luôn parse files ở chế độ strict mode và sẽ có "use strict" ở đầu file
javascript được tạo ra.*/ 