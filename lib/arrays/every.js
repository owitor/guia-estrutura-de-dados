/**
 * O método every() em JavaScript é uma função de array que verifica se todos os elementos de um array atendem a uma condição especificada por uma função de callback.
 * Sua eficiência é considerada boa, pois tem uma complexidade de tempo linear O(n), onde 'n' é o número de elementos no array,
 * o que significa que seu desempenho aumenta proporcionalmente ao tamanho do array.
 * Ele é útil para verificar se uma condição é verdadeira para todos os elementos do array, retornando true somente se todos passarem na verificação,
 * o que pode ser útil em várias situações de programação.
 */

if (!Array.prototype.dsEvery) {
  Array.prototype.dsEvery = function (callback, thisArg) {
    /**
     * Dentro do loop, chamamos a função de callback com callback.call(thisArg, this[i], i, this). Se a função retornar false para algum elemento, retornamos false imediatamente,
     * indicando que a condição não foi atendida. Essa implementação personalizada verifica se todos os elementos do array atendem a uma condição especificada pela função de callback.
     */
    for (let i = 0; i < this.length; i++) {
      if (!callback.call(thisArg, this[i], i, this)) {
        return false;
      }
    }

    /**
     * Se o loop terminar sem encontrar um elemento que não atenda à condição, retornamos true, indicando que todos os elementos passaram na condição.
     */
    return true;
  };
}
/**
 * Exemplo de uso do método dsEvery()
 */

const numeros = [12, 15, 18, 20, 25];

const todosMaioresQue10 = numeros.dsEvery((element) => {
  return element > 10;
});

console.log(todosMaioresQue10); // true
