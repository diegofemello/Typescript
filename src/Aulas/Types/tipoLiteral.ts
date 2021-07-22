let x = 10;
x = 0b1010;
const y = 10;

const person = {
  name: 'John',
  sobrenome: 'Doe' as const,
  age: 30,
};

function escolhaCor(cor: 'Vermelho' | 'Verde' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Verde'));
export default 1;
