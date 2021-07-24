export class Empresa {
  readonly nome: string;
  protected colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(
        `Nome: ${colaborador.nome} ${colaborador.sobrenome} | Idade: ${colaborador.idade}`,
      );
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    readonly nome: string,
    readonly sobrenome: string,
    readonly idade: number,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Diego', 'Mello', 24);
const colaborador2 = new Colaborador('Dayse', 'Mello', 28);
const colaborador3 = new Colaborador('Richard', 'Mello', 8);

empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);
empresa1.adicionarColaborador({
  nome: 'Breno',
  sobrenome: 'Mello',
  idade: 1,
});

const colaboradorRemovido = empresa1.popColaborador();
if (colaboradorRemovido)
  console.log(colaboradorRemovido.nome + ' foi removido.');

empresa1.mostrarColaboradores();
