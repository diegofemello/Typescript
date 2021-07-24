export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected fullLife: number,
  ) {}

  protected life = this.fullLife;

  atacar(personagem: Personagem): void {
    console.log(
      `${this.emoji} ${this.nome} ataca ${personagem.nome}, ${this.bordao()}`,
    );

    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.life -= forcaAtaque;
    console.log(
      '\x1b[31m%s\x1b[0m',
      `${this.nome} perdeu ${forcaAtaque} de vida e agora tem ${this.life}`,
    );
  }

  abstract bordao(): string;

  curarPersonagem(): void {
    this.life = this.fullLife;
    console.log('\x1b[34m%s\x1b[0m', `${this.nome} curou seu personagem`);
  }
}

export class Warrior extends Personagem {
  emoji = '\u{1F9DD}';
  bordao(): string {
    return 'WAAARRR!!!';
  }
}
export class Monster extends Personagem {
  emoji = '\u{1F9DF}';
  bordao(): string {
    return 'GRRRRWWWRR!!!';
  }
}

const warrior = new Warrior('Cicero', 100, 1000);
const monster = new Monster('SlowGM', 87, 1000);

warrior.atacar(monster);
warrior.atacar(monster);

monster.atacar(warrior);
monster.atacar(warrior);
warrior.curarPersonagem();
monster.atacar(warrior);
warrior.atacar(monster);
