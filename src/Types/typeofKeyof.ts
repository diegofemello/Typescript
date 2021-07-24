type CoresObj = typeof coresObj;
type CoresKeys = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
  branco: 'white',
};

function traduzirCor(cor: CoresKeys, cores: CoresObj): string {
  const str = `${cor} na lingua inglesa se chama ${cores[cor]}`;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(traduzirCor('branco', coresObj));
