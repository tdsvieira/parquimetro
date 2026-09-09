class Conta {
    #saldo;
    constructor() {
        this.#saldo = 0;
    }

    depositar(valor) {
        this.#saldo += valor;
    }
    sacar(valor) {
        this.#saldo -= valor;
    }
    get saldo() {
        return this.#saldo
    }


}
class Parquimetro {
    constructor(deposito) {
        this.deposito = deposito;

    }
    depositar() {
        const depositoDinheiro = parseFloat(document.getElementById('deposito').value);
        this.deposito.depositar(depositoDinheiro);
        this.mostrarValorDepositado(this.deposito.saldo);
        this.troco();
    }
    mostrarValorDepositado(saldoAtual) {
        let tempo = 0
        if (saldoAtual >= 3.00) {
            tempo = 120
        } else if (saldoAtual >= 1.75) {
            tempo = 60
        } else if (saldoAtual >= 1.00) {
            tempo = 30
        }

        if (tempo > 0) {
            document.getElementById('saldo').textContent = `Você tem R$ ${saldoAtual.toFixed(2)} depositados. Tempo disponível: ${tempo} minutos.`;
        } else {
            document.getElementById('saldo').textContent = `Você depositou R$ ${saldoAtual.toFixed(2)}. Valor mínimo para tempo é R$ 1,00.`;
        }
    }
    troco() {
        let saldoAtual = this.deposito.saldo;
        let tarifaCobrada = 0;
        if (saldoAtual >= 3.00) {
            tarifaCobrada = 3.00;
        } else if (saldoAtual >= 1.75) {
            tarifaCobrada = 1.75;
        } else if (saldoAtual >= 1.00) {
            tarifaCobrada = 1.00;
        }
        const trocoCalculado = saldoAtual - tarifaCobrada;

        document.getElementById('troco').textContent = `Seu troco é de R$ ${trocoCalculado.toFixed(2)}`;
    }
}
const conta = new Conta();
const parquimetro = new Parquimetro(conta);