/*Questão 01

Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.
Exemplo:
Entrada:
n = 6


Saída:
          *
         **
        ***
       ****
      *****
     ******

*/

//readline para input do  tamanho n desejado pelo usuário.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  //readline - input no console do  tamanho n desejado pelo usuário.
  
  readline.question(`Digite a quantidade de degraus: `, entrada => {

    var entrada = entrada;
    
    exibeNumero(entrada);

    readline.close()
})

let array = [];
function exibeNumero(entrada) {
    for (let i = 0; i < entrada; i++) {
        array.push(" ".repeat(entrada - i - 1) + "*".repeat(i + 1))
        //          ^^^^^^^^^^^^^^^^^^^^^^^^^^                ^^^
        //A ideia é primeiro escrever uma determinada quantidade de espaços e de seguida junta com uma quantidade de *
        // 
    }
    for (const entrada of array) {
        console.log(entrada)
    }
}
