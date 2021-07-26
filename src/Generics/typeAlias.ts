interface PersonProtocol<T = string, U = number> {
  name: T;
  lastname: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  name: T;
  lastname: T;
  age: U;
};

const aluno1: PersonProtocol<string, number> = {
  name: 'Fulano',
  lastname: 'de Tal',
  age: 21,
};

const aluno2: PersonProtocol2<string, number> = {
  name: 'Ciclano',
  lastname: '123',
  age: 21,
};

console.log(aluno1);
console.log(aluno2);

export default 1;
