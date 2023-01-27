//Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     }
//   }
//   imprimeIdade()



//Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;

  // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
//   const pessoa = {
//     nome: 'Henri',
//     idade: 20
//   }
// //   pessoa = {
// //     nome: 'Luna',
// //     idade: 19
// //   }

// pessoa.nome = 'Luna',
// pessoa.idade = '19'
  
// //   // Altere essa estrutura para corrigir o erro.
//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa.idade);


// Modifique a variável para que não ocorra Erro;

// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hamburguer';
// console.log(favoriteFood);

//Modifique as concatenações para template literals.

// const name = 'Adriana';
// const lastName = 'Soares';
// // console.log('Olá' + ',' + name + ' ' + lastName + '!');
// console.log(`Olá, ${name} ${lastName}!`)
// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// // console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
// console.log(`O resultado da soma de ${a} + ${b} é: ${a + b}`)

// Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

// function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

const numeroAleatorio = () => Math.random();

console.log(numeroAleatorio());



//  Transforme a função hello em uma arrow function;

// function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
//   console.log(hello(nome));

  const hello = (nome) => `Olá, ${nome}`;
  let nome = 'Ivan';
  console.log(hello(nome));



// 🚀 Transforme a função nomeCompleto em uma arrow function;

// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
let nome = 'Ivan';
let sobrenome = 'Pires'
console.log(nomeCompleto(nome, sobrenome));