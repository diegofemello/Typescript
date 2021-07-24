type TemNome = { nome: string };
type TemSobreNome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoaa = TemNome & TemSobreNome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Interseccao = AB & AC & AD;

const pessoaa: Pessoaa = {
  idade: 30,
  nome: 'Fulano',
  sobrenome: 'de Tal',
};

console.log(pessoaa);

export { pessoaa };
