/**
 * O método concat() em JavaScript combina arrays sem modificar os originais, criando um novo array vazio e copiando elementos sequencialmente. 
 * É uma cópia superficial, apenas referências de objetos são copiadas, refletindo modificações nos originais. 
 * Possui eficiência com complexidade de tempo O(n), onde 'n' é o total de elementos concatenados, pois copia cada elemento, tornando-o eficaz para combinar arrays independentemente do tamanho
 * 
 */
if (!Array.prototype.dsConcat) {
    Array.prototype.dsConcat = function (...arrays) {
        
        /**
         * Aqui, criamos uma cópia do array atual (o array em que o método dsConcat foi chamado). Usamos o método slice() para criar essa cópia. 
         * Isso é importante porque não queremos modificar o array original, apenas criar um novo array que conterá os elementos concatenados.
         */
        const novoArray = this.slice();

        /**
         * Começamos um loop for...of que percorre cada um dos arrays passados como argumento para o método dsConcat.
         */
        for (const array of arrays) {
            /**
             * Para cada array, usamos outro loop for...of para percorrer cada elemento do array.
             */
            for (const elemento of array) {
                /**
                 * Para cada elemento, usamos o método push() para adicioná-lo ao novoArray.
                 */
                novoArray.push(elemento);
            }
        }

        /**
         * Por fim, retornamos o novoArray.
         */
        return novoArray;
    }
}


/**
 * Exemplo de uso
 */
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

/**
 * Aqui, chamamos o método dsConcat() no array1 e passamos array2 e array3 como argumentos.
 */
const novoArray = array1.dsConcat(array2, array3);

/**
 * Exibimos o novoArray que contem todos os arrays concatenados.
*/
console.log(novoArray);