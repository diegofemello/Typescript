export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this._ferramenta === null) {
      console.log(`Não há ferramenta para escrever...`);
      return;
    }
    this._ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Impressora extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está imprimindo...`);
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo..`);
  }
}

const escritor = new Escritor('José');
const caneta = new Caneta('Caneta');
const impressora = new Impressora('Impressora');

escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = null;
escritor.escrever();
