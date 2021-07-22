/* eslint-disable */


// Tipos básicos
const nome = 'Luiz';
const idade = 25;
const sexo = 'M';
const aposentado = false;
const dataNascimento: Date = new Date();
const dataAposentacao: Date = new Date();
const salario = 0;
const salarioFixo = true;

const arrayDeNumeros: number[] = [1, 2, 3, 4, 5];
const arrayDeString: string[] = ['a', 'b', 'c', 'd', 'e'];
const arrayDeBoolean: boolean[] = [true, false, true, false, true];
const arrayDeObjeto: Object[] = [{ nome: 'Luiz' }, { nome: 'João' }];

const pessoa: { nome: string; idade: number; sexo: string; aposentado: boolean; dataNascimento: Date; dataAposentacao: Date; salario: number; salarioFixo: boolean; } = {nome, idade, sexo, aposentado, dataNascimento, dataAposentacao, salario, salarioFixo};

// console.log(pessoa)
// console.log(arrayDeObjeto)

function soma(a: number, b: number): number {
    return a + b;
}

const soma2: (x: number, y: number) => number = (x,y) => x + y;

console.log(soma(5,7))
