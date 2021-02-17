import { Cliente } from "./Cliente.js";
import { TarefaAgendada } from "./TarefaAgendada.js";
import { TarefaSimples } from "./TarefaSimples.js";

const tarefaUm = new TarefaAgendada("Tarefa Agenda", new Cliente("Artur", "123"), new Date(), "Txt da tarefa");
const tarefaDois = new TarefaSimples('Tarfe Simples', new Cliente('Artur 2', '456'), 'Descricao simples');


//console.log();
console.log(tarefaDois);
tarefaDois.editar("Titulo alterado", "agr essa é a nova descricao");
console.log(tarefaDois);