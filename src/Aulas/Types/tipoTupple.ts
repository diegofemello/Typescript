const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, ...string[]] = [1];

dadosCliente3[0] = 99;
dadosCliente3[1] = 'Babu';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

const array1: readonly string[] = ['a', 'b', 'c'];
const array2: ReadonlyArray<string> = ['a', 'b', 'c'];

console.log(array1);
console.log(array2);
