import { Tarefa } from "./Tarefa.js";

export class TarefaAgendada extends Tarefa {
    constructor(tituloTarefa, cliente, dataDaTarefa, descricaoDaTarefa) {
        super(tituloTarefa, cliente, dataDaTarefa, descricaoDaTarefa);
    }
}