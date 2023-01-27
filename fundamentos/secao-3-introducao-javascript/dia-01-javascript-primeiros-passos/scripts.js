// const myName = "Lucas";
// const birthCity = "São Bento do Sul";
// let birthYear = 1999;

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// birthYear = 2030

// console.log(birthYear);

// birthCity = 2030;

// console.log(birthCity);

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientAge);

// patientId = '50';

// console.log(typeof patientId);

// const base = 5;
// const heigth = 8;
// const area = base * heigth;
// console.log(area)
// const perimeter = base + base + heigth + heigth;
// console.log(perimeter);

// const notaCandidata = 59;

// if(notaCandidata >= 80) {
//     console.log("Parabéns. você faz pate do grupo das pessoas aprovadas")
// } else if(notaCandidata < 80 && notaCandidata >= 60) {
//     console.log("Você está na nossa lista de espera")
// } else {
//     console.log("Infelizmente você reprovou")
// }

// let comida = 'pão de queijo';
// const bebida = 'cafézinho';
// if (bebida === 'cafézinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

// const currentHour = 4;
// let message;

// if(currentHour >= 22) {
//     message = 'Não deveríamos comer nada, é hora de dormir”'
// } else if(currentHour >= 18 && currentHour < 22) {
//     message = 'Rango da noite, vamos jantar :D'
// } else if(currentHour >= 14 && currentHour < 18) {
//     message = 'Vamos fazer um bolo pro café da tarde?'
// }else if (currentHour >= 11 && currentHour < 14) {
//     message = 'Hora do almoço!!!'
// } else if (currentHour >= 4 && currentHour < 11) {
//     message = 'Hmmm, cheiro de café recém-passado'
// }

// console.log(message);

// let weekDay = 'Domingo'

// if(weekDay === 'segunda-feira' || 'terça-feira' || 'quarta-feira' || 'quinta-feira' || 'sexta-feira') {
// console.log("Oba, mais um dia de aprendizado na Trybe >:D")
// } else {
//     console.log("FINALMENTE, descanso merecido UwU")
// }

let num1 = 7;
let num2 = 5;

if (num1 == num2) {
    console.log(num1 + num2)
} else {
    console.log(num1 * num2)
} 

// Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.

// Salário bruto - INSS e - IR.
let salarioBruto = 3000
let salarioDeduzidoINSS = 0;

let inss8 = (salarioBruto * (8/100))
let inss9 = (salarioBruto * (9/100))
let inss11 = (salarioBruto * (11/100))
let inssMaximo = 570.88



if(salarioBruto <= 1556.94) {
    salarioDeduzidoINSS = salarioBruto - inss8

} else if(salarioBruto <= 2594.92) {
    salarioDeduzidoINSS = salarioBruto - inss9
} else if(salarioBruto <= 5189.82) {
    salarioDeduzidoINSS = salarioBruto - inss11
} else {
    salarioDeduzidoINSS = salarioBruto - inssMaximo
}

