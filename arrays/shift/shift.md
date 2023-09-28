# Método shift() do Javascript:

É uma função incorporada essencial em JavaScript usada para modificar arrays. Sua função principal é remover o primeiro elemento de um array e retorná-lo como resultado da operação. No entanto, por trás dessa aparente simplicidade, ele realiza uma série de ações coordenadas que impactam significativamente o comportamento e o desempenho de um array.

A complexidade de tempo `Big O (O(n))` significa que o tempo de execução aumenta linearmente com o número de elementos no array. Por quê? Porque, após a remoção do primeiro elemento, todos os outros precisam ser deslocados uma posição para a esquerda. Isso envolve um loop interno que percorre todos os elementos, movendo-os um por um. Em essência, ele é uma operação de tempo linear.

Comparativamente, outras operações de array, como `push()` e `pop()`, têm complexidade de tempo constante `(O(1))` para inserção e remoção no final do array. Isso significa que o tempo de execução dessas operações não depende do tamanho do array; elas são tão rápidas para um pequeno array quanto para um grande.

Para sair da teoria, vamos implementar a função dsShift(), que simula o funcionamento da função `shift()`:

1. **Verificação do Array Vazio**:
    - O método começa verificando se o array está vazio usando a seguinte condição:

        ```javascript
        if (this.length === 0) {
            return undefined;
        }
        ```
    - Se o array estiver vazio (ou seja, `this.length` é igual a zero), a função retorna `undefined`, comportando-se consistentemente com o `shift()` padrão.

2. **Captura do Primeiro Elemento**:
    - Se o array não estiver vazio, o método captura o primeiro elemento com a linha:

        ```javascript
        let firstElement = this[0];
        ```

    - O valor do primeiro elemento é armazenado na variável `firstElement` para posterior retorno.

3. **Loop de Reorganização dos Elementos**:

    - Em seguida, inicia-se um loop `for` que percorre o array. Ele começa no índice 0 (o primeiro elemento) e continua até `this.length - 1`, que é o último índice antes da redução do comprimento do array.
    - Dentro do loop, cada elemento é substituído pelo próximo elemento à direita, efetivamente movendo todos os elementos uma posição para a esquerda:
        ```javascript

        this[index] = this[index + 1];

        ```

4. **Redução do Comprimento do Array**:
    - Após a conclusão do loop, o método reduz o comprimento do array em 1 usando `this.length--`. Isso reflete a remoção bem-sucedida do primeiro elemento.

5. **Retorno do Primeiro Elemento Removido**:
    - Por fim, o método retorna o valor do primeiro elemento removido, que foi armazenado na variável `firstElement`. Isso permite que o valor seja utilizado em outras partes do código.


6. **Resultado final da implementação:**:

```javascript
Array.prototype.dsShift = function () {
    if (this.length === 0) {
        return undefined; 

    let firstElement = this[0]; 
    for (let index = 0; index < this.length - 1; index++) {
        this[index] = this[index + 1]; 
    }

    this.length--;

    return firstElement;
}
```

#### Exemplificando:

```javascript
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

```

Neste exemplo, temos uma listaDeTarefas que contém várias tarefas. Utilizamos o método dsShift() duas vezes para marcar tarefas como concluídas. A primeira vez que chamamos dsShift(), ele remove e exibe a primeira tarefa da lista. Depois, chamamos dsShift() novamente para marcar outra tarefa como concluída. 

### Concluíndo:

Ao explorar o funcionamento interno do método `shift()` em JavaScript e suas complexidades de tempo, fica evidente que sua eficácia varia conforme o contexto. Portanto, é importante considerar alternativas sempre que estiver lidando com grandes conjuntos de dados e priorizando o desempenho. Avaliar as necessidades do seu programa ajudará na escolha da melhor abordagem de manipulação de arrays. A flexibilidade e a capacidade de adaptação a contextos específicos são essenciais para tomar decisões informadas e otimizar seu código em projetos futuros. Compreender as complexidades de tempo associadas ao método `shift()` será valioso nesse processo.