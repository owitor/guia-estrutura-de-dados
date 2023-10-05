/**
 * A função shift() em JavaScript é uma operação essencial para modificar arrays, mas sua complexidade de tempo é O(n),
 * o que significa que o tempo de execução aumenta linearmente com o número de elementos no array,
 * já que todos os elementos subsequentes precisam ser deslocados uma posição à esquerda após a remoção do primeiro elemento.
 */

if (!Array.prototype.dsShift) {
  Array.prototype.dsShift = function () {
    if (this.length === 0) {
      return undefined;
    }

    /**
     * Se o array não estiver vazio, o método captura o primeiro elemento com a linha:
     */
    const firstElement = this[0];

    /**
     * Em seguida, o método desloca todos os elementos subsequentes para a esquerda em uma posição,
     * substituindo o elemento anterior com o próximo elemento, até que o último elemento seja alcançado.
     */
    for (let index = 0; index < this.length - 1; index++) {
      this[index] = this[index + 1];
    }

    /**
     * Após a conclusão do loop, o método reduz o comprimento do array em 1 usando `this.length--`.
     * Isso reflete a remoção bem-sucedida do primeiro elemento.
     */
    this.length--;

    return firstElement;
  };
}

/**
 * Neste exemplo, temos uma listaDeTarefas que contém várias tarefas.
 * Utilizamos o método dsShift() duas vezes para marcar tarefas como concluídas.
 * A primeira vez que chamamos dsShift(), ele remove e exibe a primeira tarefa da lista.
 * Depois, chamamos dsShift() novamente para marcar outra tarefa como concluída.
 */
let listaDeTarefas = [
  'Comprar mantimentos',
  'Limpar a casa',
  'Trabalhar no projeto',
  'Fazer exercícios',
  'Ler um livro',
];

console.log('Tarefa Concluída:', listaDeTarefas.dsShift());
console.log('Lista Atualizada:', listaDeTarefas);

console.log('Tarefa Concluída:', listaDeTarefas.dsShift());
console.log('Lista Atualizada:', listaDeTarefas);
