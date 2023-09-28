Array.prototype.dsShift = function () {
    if (this.length === 0) {
        return undefined;
    }

    let firstElement = this[0]
    for (let index = 0; index < this.length - 1; index++) {
        this[index] = this[index + 1];
    }

    this.length--;

    return firstElement;
}


let listaDeTarefas = [
    "Comprar mantimentos",
    "Limpar a casa",
    "Trabalhar no projeto",
    "Fazer exercícios",
    "Ler um livro"
];

console.log("Tarefa Concluída:", listaDeTarefas.dsShift());
console.log("Lista Atualizada:", listaDeTarefas);

console.log("Tarefa Concluída:", listaDeTarefas.dsShift());
console.log("Lista Atualizada:", listaDeTarefas);