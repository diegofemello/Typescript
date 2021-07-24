export class Carro {
  name = 'Carro';
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  parar(): void {
    this.motor.parar();
  }
  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligando...');
  }
  acelerar(): void {
    console.log('Motor está Acelerando...');
  }
  parar(): void {
    console.log('Motor está Parando...');
  }
  desligar(): void {
    console.log('Motor está Desligando...');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
