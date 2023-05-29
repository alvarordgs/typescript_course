export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //The readonlyarray returns an array that just can be read and not changed 
    lista() {
        return this.negociacoes;
    }
}
