import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //The readonlyarray returns an array that just can be read and not changed 
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}