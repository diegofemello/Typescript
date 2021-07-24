export abstract class TipoPessoa {
  protected abstract nome: string;
  protected abstract sobrenome: string;
  protected abstract idade: number;
  protected abstract nomeCompleto(): string;
}

export class Pessoa extends TipoPessoa {
  constructor(
    protected nome: string,
    protected sobrenome: string,
    protected _idade: number,
  ) {
    super();
  }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  protected get idade(): number {
    return this._idade;
  }
}

const pessoa = new Pessoa('Luiz', 'Santos', 25);
console.log(pessoa.nomeCompleto());
