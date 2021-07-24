export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    private _nome: string,
    private _sobrenome: string,
    private _idade: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get sobrenome(): string {
    return this._sobrenome;
  }

  set sobrenome(sobrenome: string) {
    this._sobrenome = sobrenome;
  }

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    this._idade = valor;
  }

  get cpf(): string {
    return this._cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  set cpf(valor: string) {
    this._cpf = valor.replace(/\D/g, '');
  }

  getNomeCompleto(): string {
    return this._nome + ' ' + this._sobrenome;
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, this.idadePadrao, this.cpfPadrao);
  }
}

export class Cliente extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    private _telefone: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  get telefone(): string {
    return this._telefone;
  }

  set telefone(telefone: string) {
    this._telefone = telefone;
  }

  getDadosCliente(): string {
    return (
      'Nome: ' +
      this.getNomeCompleto() +
      '\n' +
      'Idade: ' +
      this.idade +
      '\n' +
      'CPF: ' +
      this.cpf +
      '\n' +
      'Telefone: ' +
      this.telefone
    );
  }
}

export class Aluno extends Pessoa {}

const pessoa = new Pessoa('Pessoa', 'Santos', 21, '123.456.789-014344');
pessoa.sobrenome = 'OutroSobrenome';
// console.log(pessoa);

// const aluno = new Aluno('Aluno', 'Santos', 21, '123.456.789-01323232');
// console.log(aluno.getNomeCompleto(), aluno.idade);

// const cliente = new Cliente(
//   'Cliente',
//   'Santos',
//   21,
//   '123.456.789-01',
//   '21 992287892'
// console.log(cliente.getDadosCliente());

// const pessoaSemIdadeSemCPF = Pessoa.criaPessoa('Diego', 'Mello');
// console.log(pessoaSemIdadeSemCPF);
