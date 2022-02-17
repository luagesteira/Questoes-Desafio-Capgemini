/*# Questão 03
Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser realocadas para formar a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que encontre o número de pares de substrings que são anagramas.
Exemplo:
Exemplo 1)
Entrada:
ovo


Saída:
3


Explicação:
A lista de todos os anagramas pares são: [o, o], [ov, vo] que estão nas posições [[0, 2], [0, 1], [1, 2]] respectivamente. 


Exemplo 2)
Entrada:
ifailuhkqq


Saída:
3


Explicação:
A lista de todos os anagramas pares são: [i, i], [q, q] e [ifa, fai] que estão nas posições [[0, 3]], [[8, 9]] e [[0, 1, 2], [1, 2, 3]]. */




const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  //readline para input da string desejada pelo usuário.
  //readline - input no consoleda string desejada pelo usuário.
  
  readline.question(`Digite a palavra/string: `, str => {

    var str = str;
    console.log('São '  , checkAnagrams(str), ' pares de substring');

    readline.close()
})

//nosso método auxiliar para encontrar todas as substrings de uma determinada string
function getAllSubstrings(str) {
    let i, j, result = [];
  
    for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
        result.push(str.slice(i, j))
      }
    }
    return result
  }

// verificar se duas strings são pares anagramaticos
  function isAnagram(str1, str2) {
    const hist = {}
  
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i]
      if (hist[char]) {
        hist[char]++
      } else {
        hist[char] = 1
      }
    }
  
    for (let j = 0; j < str2.length; j++) {
      const char = str2[j]
      if (hist[char]) {
        hist[char]--
      } else {
        return false
      }
    }
  
    return true
  }
  
  // verificar se um par é anagramatico e contar 
  //array contendo todas as substrings da string original

  function countAnagrams(currentIndex, arr) {
    const currentElement = arr[currentIndex]
    const arrRest = arr.slice(currentIndex + 1)
    let counter = 0
  
    for (let i = 0; i < arrRest.length; i++) {
      if (currentElement.length === arrRest[i].length && isAnagram(currentElement, arrRest[i])) {
        counter++
      }
    }
    console.log(currentElement);
   return counter
  }

  // combinar todos os itens 
  //verificando  se há duplicatas para saber se continua, se não houvesse letras duplicadas, então não é possível ter um anagrama.
  function checkAnagrams(s) {
    const duplicatesCount = s.split('').filter((v, i) => s.indexOf(v) !== i).length
  
    if (!duplicatesCount) return 0
    let anagramsCount = 0
  
    const arr = getAllSubstrings(s)
  
    for (let i = 0; i < arr.length; i++) {
      anagramsCount += countAnagrams(i, arr)

      
    }
  
    return anagramsCount
  }

