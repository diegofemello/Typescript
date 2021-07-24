/* eslint-disable */
// Tipos básicos
  var nome = 'Luiz';
  var idade = 25;
  var sexo = 'M';
  var aposentado = false;
  var dataNascimento: Date = new Date();
  var dataAposentacao: Date = new Date();
  var salario = 0;
  var salarioFixo = true;

  var arrayDeNumeros: number[] = [1, 2, 3, 4, 5];
  var arrayDeString: string[] = ['a', 'b', 'c', 'd', 'e'];
  var arrayDeBoolean: boolean[] = [true, false, true, false, true];
  var arrayDeObjeto: Object[] = [{ nome: 'Luiz' }, { nome: 'João' }];

  var pessoa2: { nome: string; idade: number; sexo: string; aposentado: boolean; dataNascimento: Date; dataAposentacao: Date; salario: number; salarioFixo: boolean; } = {nome, idade, sexo, aposentado, dataNascimento, dataAposentacao, salario, salarioFixo};

  // console.log(pessoa2)
  // console.log(arrayDeObjeto)

  function soma(a: number, b: number): number {
    return a + b;
  }

  var soma2: (x: number, y: number) => number = (x,y) => x + y;

  console.log(soma(5,7))



