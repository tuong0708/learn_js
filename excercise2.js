// Tự nghĩ ra 1 mảng trong thực tế.
smartphone = ['apple', 'samsung', 'opple', 'vsmart', 'redmi'];
console.log(smartphone[0]);
console.log(smartphone[1]);
console.log(smartphone[2]);
console.log(smartphone[3]);
console.log(smartphone[4]);

// In ra các phần tử trong mảng theo đúng thứ tự bằng 2 cách và ngược thứ tự bằng cách 1
// C1:
var smartphone = ['apple', 'samsung', 'opple', 'vsmart', 'redmi'];
for (var i = 0; i < smartphone; i += 1) {
  console.log(smartphone[i])
}

// C2:
var smartphone = ['apple', 'samsung', 'opple', 'vsmart', 'redmi'];
for (var smartphone of smartphone) {
  console.log(smartphone)
}

//ngược thứ tự bằng cách 1:
var smartphone = ['apple', 'samsung', 'opple', 'vsmart', 'redmi'];
for (var i = 4; i >= 0; i--) {
  console.log(smartphone[i])
}


// Thêm 1 phần tử mới vào mảng. (mới)
smartphone = ['apple', 'samsung', 'opple', 'vsmart', 'redmi', 'nokia'];

//Xóa 1 phần tử trong mảng ở vị trí đầu tiên.
smartphone = ['samsung', 'opple', 'vsmart', 'redmi', 'nokia'];

//Xóa 1 phần tử trong mảng ở vịt trí cuối cùng.
smartphone = ['apple', 'samsung', 'opple', 'vsmart', 'redmi',];

//Nghĩ thêm 1 mảng khác:
shoes = ['airforce1', 'adidas', 'nike', 'puma', 'convert', 'sneaker'];
console.log(shoes[0]);
console.log(shoes[1]);
console.log(shoes[2]);
console.log(shoes[3]);
console.log(shoes[4]);
console.log(shoes[5]);

// Hợp nhất (merge) 2 mảng lại với nhau. In ra tất cả các phần tử ở mảng hợp nhất.
const run = ['🚚', '🚛'];
const truck = ['🚙', '🚗'];
const oto = run.concat(truck);

console.log(run);
console.log(truck);
    