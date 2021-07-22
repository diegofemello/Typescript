const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: any;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveC = 'Valor C';
objetoA.chaveD = 'Valor D';

console.log(objetoA);
