export class CarrinhoDeCompras {
  private readonly _produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  get produtos(): Produto[] {
    return this._produtos;
  }

  removerProdutos(): void {
    this.produtos.pop();
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((total, produto) => total + produto.preco, 0);
  }

  status(): string {
    const status =
      this.quantidadeProdutos() === 0
        ? 'vazio'
        : `com ${this.quantidadeProdutos()} itens e o valor total é de ${this.valorTotal()}`;
    return `O carrinho está ${status}`;
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 20.5);
const produto3 = new Produto('Caneta', 5.7);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProdutos());
carrinhoDeCompras.removerProdutos();
console.log(carrinhoDeCompras.status());
console.log(carrinhoDeCompras.produtos);