// let a = 5;
// let b = 7;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);


// const num1 = 3;
// const num2 = 5;

// if(num1 > num2) {
//     console.log(num1)
// } else {
//     console.log(num2)
// }

// const num1 = 40;
// const num2 = 11;
// const num3 = 9;

// if(num1 > num2 && num1 > num3) {
//     console.log(num1)
// } else if(num2 > num1 && num2 > num3) {
//     console.log(num2)
// } else if(num3 > num1 && num3 > num2) {
//     console.log(num3)
// }

// let param = 0;

// if(param > 0) {
//     console.log("Positive")
// } else if(param < 0) {
//     console.log("Negative")
// } else {
//     console.log("zero")
// }

// let ang1 = 60;
// let ang2 = 60;
// let ang3 = 61;

// let trianguloValido;

// if(ang1 + ang2 + ang3 == 180) {
//     console.log(ang1 + ang2 + ang3 == 180)
// } else {
//     console.log(ang1 + ang2 + ang3 == 180)
// }

let peca = "CAVALO";

switch(peca.toLowerCase()) {
    case "torre":
        console.log("lado, frente e trás");
        break;
    case "cavalo":
        console.log("forma de L");
        break;
    case "bispo":
        console.log("diagonal");
        break;
    case "rei":
        console.log("Uma casa para qualquer lado");break;                
    case "rainha":
        console.log("quantas casas quiser para qualquer lado");
        break; 
    case "peão":
        console.log("uma casa para frente e uma diaginal quando houver uma peça rival");
        break; 
   default:
        console.log("Peça inválida");
}    