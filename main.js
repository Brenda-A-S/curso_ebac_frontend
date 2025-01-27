class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibirInfo() {
        return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2).replace('.', ',')}`;
    }
}

class Eletronico extends Produto {
    constructor(nome, preco, garantia) {
        super(nome, preco);
        this.garantia = garantia;
    }

    exibirInfo() {
        return `${super.exibirInfo()} (Garantia: ${this.garantia} anos)`;
    }
}

class Alimenticio extends Produto {
    constructor(nome, preco, validade) {
        super(nome, preco);
        this.validade = validade;
    }

    exibirInfo() {
        return `${super.exibirInfo()} (Validade: ${this.validade})`;
    }
}

class Vestuario extends Produto {
    constructor(nome, preco, tamanho, cor) {
        super(nome, preco);
        this.tamanho = tamanho;
        this.cor = cor;
    }

    exibirInfo() {
        return `${super.exibirInfo()} (Tamanho: ${this.tamanho}, Cor: ${this.cor})`;
    }
}

const celular = new Eletronico("Smartphone 2025", 5500.00, 2);
const chocolate = new Alimenticio("Chocolate Meio Amargo", 12.50, "10/12/2025");
const camiseta = new Vestuario("Camiseta Polo", 79.90, "M", "Azul");

console.log(celular.exibirInfo());
console.log(chocolate.exibirInfo());
console.log(camiseta.exibirInfo());

const erro =new Error()

console.log(typeof erro)