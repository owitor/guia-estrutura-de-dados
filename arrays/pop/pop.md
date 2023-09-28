# Método pop():

É uma função essencial do JavaScript, frequentemente utilizada na manipulação de arrays. Sua função principal é remover o último elemento de um array e retorná-lo como resultado da operação. No entanto, por trás dessa aparente simplicidade, o `pop()` possui características importantes que o tornam uma ferramenta valiosa em programação.

Uma das características mais notáveis é sua **eficiência**. Ele opera com complexidade de tempo `Big O (O(1))`, independentemente do tamanho do array. Isso significa que a remoção do último elemento é tão rápida para arrays pequenos quanto para arrays grandes, tornando-o ideal para situações em que o desempenho é uma consideração crítica.

Para sair da teoria, vamos implementar a função dsPop(), que simula o funcionamento da função `pop()`:

1. **Verificação do Array Vazio**:
    - O método começa verificando se o array está vazio usando a seguinte condição:

        ```javascript
        if (this.length === 0) {
            return undefined;
        }
        ```
    - Se o array estiver vazio, a função retorna undefined, indicando que não há elementos a serem removido


2. **Captura do Último Elemento:**:
    - Se o array não estiver vazio, o método captura o último elemento utilizando:
    
        ```javascript
        let removeItem = this[this.length - 1];
        ```

    - Isso significa que ele acessa o elemento no índice [this.length - 1], que é o último elemento do array.

3. **Captura do Último Elemento:**:

    - Após capturar o último elemento, o método simula a remoção reduzindo o comprimento do array em 1 com:

       ```javascript
        this.length = this.length - 1;
        ```

4. **Retorno do Último Elemento Removido:**:
    - Finalmente, o método retorna o elemento que foi removido, que foi armazenado na variável removeItem.


        ```javascript
        return removeItem;
         ```

5. **Resultado final da implementação:**:

    ```javascript
    Array.prototype.dsPop = function () {
    
    if (this.length === 0) {
        return undefined;
    }

    let removeItem = this[this.length - 1];

    this.length = this.length - 1

    return removeItem;
     ```



### Concluíndo:

Ao explorar o método pop(), percebemos qu é uma função eficiente e crucial em JavaScript para remover o último elemento de um array. Sua capacidade de operar em tempo constante `(O(1))`, independentemente do tamanho do array, o torna uma ferramenta valiosa para a manipulação eficaz de dados em programação. É uma escolha confiável quando o desempenho é uma prioridade, proporcionando uma maneira simples e rápida de gerenciar arrays.