/**
 * A função pop() em JavaScript é essencial para remover eficientemente o último elemento de um array,
 * com complexidade de tempo constante O(1), tornando-a uma escolha valiosa para situações de alto desempenho,
 * independentemente do tamanho do array.
 *
 *
 */

if (!Array.prototype.dsPop) {
  Array.prototype.dsPop = function () {
    if (this.length === 0) {
      return undefined;
    }

    /**
     * Se o array não estiver vazio, o método captura o último elemento utilizando:
     */
    const removedItem = this[this.length - 1];

    /**
     * Após capturar o último elemento, o método efetua a remoção, reduzindo o comprimento do array em 1 por meio de:
     */
    this.length = this.length - 1;

    return removedItem;
  };
}

/**
 * Neste exemplo é criado o array meuArray com 5 elementos e, em seguida,
 * é chamado o método dsPop() para remover o último elemento do array.
 * O resultado é o elemento 2, que é o último elemento do array.
 */
let meuArray = [4, 6, 1, 3, 2];
console.log(meuArray.dsPop());
