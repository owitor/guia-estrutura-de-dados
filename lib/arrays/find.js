/**
 * 
O método find() em JavaScript busca o primeiro elemento em um array que corresponda a uma condição definida por uma função de callback. 
Ele percorre o array e aplica a função a cada elemento até encontrar o primeiro que se encaixe na condição, retornando esse elemento; se nenhum se adequar, retorna undefined. 
A complexidade de tempo do find() é linear (O(n)), onde 'n' é o número de elementos no array, pois itera pelos elementos uma vez e para quando uma correspondência é encontrada, 
tornando-o eficaz para encontrar um elemento específico em arrays de qualquer tamanho.
 */
if (!Array.prototype.dsFind) {
  Array.prototype.dsFind = function (callback, thisArg) {
    /**
     * Dentro do loop, chamamos a função de callback com callback.call(thisArg, this[i], i, this). Se a função retornar true, retornamos o elemento.
     */
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        return this[i];
      }
    }

    return undefined;
  };
}

const numeros = [10, 20, 30, 40, 50];

const primeiroMaiorQue30 = numeros.dsFind((element) => {
  return element > 30;
});

console.log(primeiroMaiorQue30); // Output: 40, o primeiro elemento maior que 30
