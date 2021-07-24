export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number'
    ? a + b
    : `${a} + ${b} Não pode ser somado`;
}

console.log(add(6, 2));
console.log(add('3434234', 2));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

export class Papagaio implements Animal {
  tipo: 'animal' = 'animal';
  constructor(public cor: string) {}
}

function mostraNome(obj: PessoaOuAnimal) {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal!', obj.cor);
  }
}

mostraNome(new Aluno('Fulano'));
mostraNome(new Papagaio('Azul'));
