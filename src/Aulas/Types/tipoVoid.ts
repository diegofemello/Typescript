function semRetorno(...args: string[]): void {
  console.log(args.join(''));
}

semRetorno('Luiz ', 'Santos ', 'Silva ');

const person = {
  nome: 'Luiz',
  sobrenome: 'Santos',

  exibirNomeCompleto(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

person.exibirNomeCompleto();

export { person };
