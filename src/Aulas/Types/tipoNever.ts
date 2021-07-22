function criaErro(): never {
  throw new Error('Erro qualquer');
}

console.log(criaErro());
