enum Cores {
  VERDE = 10,
  VERMELHO,
  AMARELO = 50,
  ROXO = 'ROXO',
  AZUL = 9,
  BRANCO,
}

console.log(Cores);
console.log(Cores.AMARELO);
console.log(Cores[10]);

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.AMARELO);
