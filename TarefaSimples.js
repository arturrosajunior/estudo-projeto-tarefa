import { Tarefa } from "./Tarefa.js";

export class TarefaSimples extends Tarefa {
    constructor(tituloTarefa, cliente, descricaoDaTarefa) {
        super(tituloTarefa, cliente, '', descricaoDaTarefa);
    }
}