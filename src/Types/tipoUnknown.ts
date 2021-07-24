let x: unknown;
x = 100;
x = 'Luiz';
x = 900;
x = '10';
const y = 800;
let c: number;

typeof x === 'number' ? console.log(x + y) : console.log('Não é número');

typeof x === 'number' ? (c = x + y) : (c = 0);
console.log(c);
