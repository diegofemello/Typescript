type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto: any, chave) => objeto[chave];

const animal1 = {
  name: 'Cão',
  color: ['Preto', 'Orange'],
  sound: 'Au',
};

const colors = obterChave(animal1, 'color');
const nameanimal = obterChave(animal1, 'name');

console.log(colors, nameanimal);

export default 1;
