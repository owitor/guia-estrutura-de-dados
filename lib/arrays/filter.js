/**
 * O método filter() do JavaScript possui uma complexidade de tempo linear O(n), onde 'n' representa o número de elementos no array original.
 * Isso significa que seu desempenho aumenta proporcionalmente ao tamanho do array, pois ele itera por todos os elementos uma vez,
 * aplicando uma função de callback para decidir se cada elemento deve ou não ser incluído no novo array resultante.
 * Essa eficiência o torna uma escolha adequada para filtrar elementos com base em uma condição, independentemente do tamanho do array, o que o torna uma opção eficaz em termos de desempenho.
 *
 */

if (!Array.prototype.dsFilter) {
  Array.prototype.dsFilter = function (callback, thisArg) {
    /**
     * Criamos um novo array vazio, que será preenchido com os elementos que passarem na condição especificada pela função de callback.
     */
    const newArray = [];

    /**
     * Dentro do loop, chamamos a função de callback com callback.call(thisArg, this[i], i, this). Se a função retornar true, adicionamos o elemento ao novo array.
     */
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        newArray.push(this[i]);
      }
    }

    /**
     * Retornamos o novo array preenchido com os elementos que passaram na condição.
     */
    return newArray;
  };
}

const numeros = [1, 2, 3, 4, 5, 6];

const numerosPares = numeros.dsFilter((element) => {
  return element % 2 === 0;
});

console.log(numerosPares); // Output: [2, 4, 6]
