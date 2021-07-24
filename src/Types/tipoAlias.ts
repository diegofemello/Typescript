type Idade = number;
type Person = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type corRGB = 'Vermelho' | 'Verde' | 'Azul';
type corCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type corPreferida = corRGB | corCMYK;

const person: Person = {
  idade: 30,
  nome: 'João',
  salario: 7000.55,
  corPreferida: 'Verde',
};

const person2: Person = {
  idade: 45,
  nome: 'Maria',
  salario: 5000.55,
};

export function setCorPreferida(person: Person, cor: corPreferida): Person {
  return {
    ...person,
    corPreferida: cor,
  };
}

setCorPreferida(person2, 'Ciano');

console.log(person, person2);
