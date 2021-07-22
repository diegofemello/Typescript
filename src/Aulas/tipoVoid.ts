function semRetorno(...args: string[]): void {
  console.log(args.join(''));
}

semRetorno('Luiz ', 'Santos ', 'Silva ');

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Santos',

  exibirNomeCompleto(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNomeCompleto();

export { pessoa };
