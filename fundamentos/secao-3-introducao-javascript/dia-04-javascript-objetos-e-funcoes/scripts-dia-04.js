// objetos e funções!

// let player = {
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };
// }

// player.bestInTheWOrld = [2006, 2007, 2008, 2009, 2010, 2018];

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);
//   }

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for(let index in names) {
//     console.log('Olá ' + names[index])
//   }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for(let index in car) {
//     console.log(index, car[index])
//   }



// Adição

// function somaValores(a, b) {
//     return a + b
// }

// console.log(somaValores(10, 5))



// //Subtração

// function subtracao(numero1, numero2) {
//     let resultado = numero1 - numero2;
//     return resultado
// }

// console.log(subtracao(70, 20))



// //Multiplicacao

// function multiplicacao(n1=1, n2=1) {
//     let resultado = 0;
//     resultado = n1 * n2;
//     return resultado;
// }

// console.log(multiplicacao(5));



// //Divisão

// function divisao(a1, a2) {
//     let resDivisao = a1 / a2
//     return resDivisao;
// }

// console.log(divisao(40, 2))

// // Módulo

// function modulo(z1, z2) {
//     let resultado = z1 % z2
//     return resultado;
// }

// console.log(modulo(5, 2));

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// function numeroMaior(n1, n2) {
//     if(n1>n2) {
//         return "O número " + n1 + " é maior que " + n2 + "."
//     } else if(n2>n1) {
//         return "O número " + n1 + " é menor que " + n2 + "."
//     } else {
//         return "Os números são iguais"
//     }
// }

// console.log(numeroMaior(8, 8));


//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// function maiorDeTresNumeros(n1, n2, n3) {
//     if(n1 > n2 && n1 > n3) {
//         return "O número " + n1 + " é o maior dos três números."
//     } else if(n2 > n1 && n2 > n3) {
//         return "O número " + n2 + " é o maior dos três números"
//     } else if(n3 > n2 && n3 > n1) {
//         return "O número " + n3 + " é o maior dos três números"
//     } else {
//         return "Os três números são iguais"
//     }
// }

// console.log(maiorDeTresNumeros(7, 7, 7))



//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// function numeroPositivoOuNegativo(numero) {
//     if(numero > 0) {
//         return "positive"
//     }else if (numero < 0) {
//         return "negative"
//     } else {
//         return "zero"
//     }
// }

// console.log(numeroPositivoOuNegativo(0));



//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo.Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// function retornaTriangulo(ang1, ang2, ang3) {
//     if(ang1 + ang2 + ang3 === 180) {
//         return true
//     }else if(ang1 < 0 || ang2 < 0 || ang3 < 0) {
//         return "Inválido"
//     } else {
//         return false
//     }
// }

// console.log(retornaTriangulo(60, -50, 50));