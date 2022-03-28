// const clothes = ['jacket', 't-shirt'];
// clothes.length = 5;
// clothes[0];
// console.log(clothes);
// clothes.push(5);
// clothes.shift(1)
// console.log(clothes);
const obj  = {
    age: 'ajay',
    b: 20
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
const obj1 = {
    c: 'vijay',
    d: 50
}

console.log(obj1);
const result = Object.assign(obj1);
result.d=undefined;
console.log(result);
console.log(JSON.stringify(result));

