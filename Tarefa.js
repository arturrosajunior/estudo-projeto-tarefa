export class Tarefa {
    constructor(tituloTarefa, cliente, dataDaTarefa, descricaoDaTarefa) {
        if (this.constructor == Tarefa) {
            throw new Error('Não crie um objeto do tipo rtarefa, especifique os tipos');
        }
        this.tituloTarefa = tituloTarefa;
        this._cliente = cliente;
        this.dataDaTarefa = dataDaTarefa;
        this.descricaoDaTarefa = descricaoDaTarefa;
    }

    get cliente() {
        return this._cliente;
    }

    editar(novoTitulo, novaDescricao) {
        this.tituloTarefa = novoTitulo;
        this.descricaoDaTarefa = novaDescricao;
    }
}