let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const A = a;
const B = b;
const C = c;

a = B;
b = C;
c = A;

console.log(a, b, c);