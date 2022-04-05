class Aluno {
    private _matricula: string;
    private _nome: string;
    private _notas_prova: [number, number, number, number];
    private _notas_trabalho: [number, number];
    constructor(matricula: string, nome: string, notas_prova: [number, number, number, number], notas_trabalho: [number, number] ) {
        this._matricula = matricula;
        this._nome = nome;
        this._notas_prova = notas_prova;
        this._notas_trabalho = notas_trabalho;
    }
    public sumOfGrades() {
        const sumOfEssaysGrades = this._notas_prova.reduce((prev, curr) => prev + curr, 0);
        const sumOfOtherGrades = this._notas_trabalho.reduce((prev, curr) => prev + curr, 0);
        return sumOfEssaysGrades + sumOfOtherGrades
    }
    public mediaOfGrades() {
        const sumOfEssaysGrades = this._notas_prova.reduce((prev, curr) => prev + curr, 0);
        const sumOfOtherGrades = this._notas_trabalho.reduce((prev, curr) => prev + curr, 0);
        return (sumOfEssaysGrades + sumOfOtherGrades) / 6
    }
}

class Cliente {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }

}


class itemPedido {
    private _orderName: string;
    private _cost: number;
    constructor(orderName: string, cost: number) {
        this._orderName = orderName;
        this._cost = cost;
    }
    get cost() {
        return this._cost
    }
}


class Pedido {
    private _client: Cliente;
    private _order: itemPedido[];
    private _paymentmethod: string;
    private _discount : number | undefined;
    constructor(client: Cliente, order: itemPedido[], paymentMethod: string, discount?: number) {
        this._client = client;
        this._order = order;
        this._paymentmethod = paymentMethod;
        this._discount = discount;
    }
    totalPrice() {
        const value = this._order.map((elem) => elem.cost);
        return value.reduce((prev, curr) => prev + curr, 0 );
    }
    totalPriceWithDiscount() {
        if(this._discount){
            const value = this._order.map((elem) => elem.cost);
            const valueWithDiscount = value.reduce((prev, curr) => prev + curr, 0) * (1- this._discount)
            return valueWithDiscount
        }
        const value = this._order.map((elem) => elem.cost);
        return value.reduce((prev, curr) => prev + curr, 0 );
    }

}

class Data {
    private _ano: number;
    private _mes: number;
    private _dia: number;
    constructor(ano: number, mes: number, dia: number) {
        if (ano < 2022 && ano >= 1900 && mes >= 1 && mes <= 12 && dia >= 1 && dia <=31) {
        this._ano = ano;
        this._mes = mes;
        this._dia = dia;
        }
        else {
            this._ano = 1900;
            this._mes = 1;
            this._dia = 1;
        }
    }
    getMonthName() {
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return months[this._mes - 1]
    }
    compareData(data: Data) {
        const dateEqual =  data._ano === this._ano && data._mes === this._mes && data._dia === this._dia
        if(dateEqual) return 0
        if(data._ano > this._ano) return -1
        if(this._ano > data._ano) return 1
        if(data._mes > this._mes) return -1
        if(this._mes > data._mes) return 1
        if(data._dia > this._dia) return -1
        return 1 
    }
}