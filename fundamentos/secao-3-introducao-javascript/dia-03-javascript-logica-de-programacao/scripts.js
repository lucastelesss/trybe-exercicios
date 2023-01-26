// exercícios do dia

// let quantidade = 0;

// for(let index = 2; index <= 150; index += 1) {
//   if (index % 3 === 0) {
//     quantidade = index;
//   }
// } 
//   if (quantidade = 50) {
//     console.log('Mensagem secreta, tem 50! É do Balacobaco');
//   } 



//   if (jogador1 == "pedra") {
//     if (jogador2 == "tesoura") {
//       console.log("Pedra ganha tesoura");
//    } else if (jogador2 == "papel"){
//        console.log("Papel ganha a Pedra");
//    } else if (jogador2 == "pedra") {
//       console.log("Empate");
//    }


// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// 10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1

// exercício course 3.3 

/*
 
 1 - Imprimir na tela o resultado da fatorial de 10
 2 - 
 
 */
let fatInicial = 4;
let fatorial = 1;

 for(let index = fatorial; index <= fatInicial; index += 1) {
fatorial = fatorial * (fatorial - index)
 }
 
 console.log(fatorial)

