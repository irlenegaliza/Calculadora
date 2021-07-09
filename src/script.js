var numValor1 = parseInt(prompt("Informe o primeiro valor: "));
var numValor2 = parseInt(prompt("Informe o segundo valor: "));

var opcaoOperacao = parseInt(prompt("Qual operação quer fazer:\n 1-somar \n 2-sub \n 3-mult \n 4-div "));

if(opcaoOperacao == 1){
  var resultado = numValor1 + numValor2;
  document.write("<h2>" + numValor1 + " + " + numValor2 + " = " + resultado + "   </h2>");
}
else if (opcaoOperacao == 2) {
  var resultado = numValor1 - numValor2;
  document.write("<h2>" + numValor1 + " - " + numValor2 + " = " + resultado + "   </h2>");
}
else if (opcaoOperacao == 3){
  var resultado = numValor1 * numValor2;
  document.write("<h2>" + numValor1 + " x " + numValor2 + " = " + resultado + "   </h2>");
}
else if (opcaoOperacao == 4){
  var resultado = numValor1 / numValor2;
  document.write("<h2>" + numValor1 + " / " + numValor2 + " = " + resultado + "   </h2>");
}
else {
  document.write("<h2>Opção Inválida</h2>");
}
/*
Escrevendo na tela - document.write();

// Como foi dado em aula
var primeiroValor = parseInt(prompt("Digite o primeiro valor: "));
var segundoValor = parseInt(prompt("Digite o segundo valor: "));
var primeiroValorInt = parseInt(primeiroValor);

var resultado = primeiroValor * segundoValor
document.write(resultado);
*/

/* Desafios da aula
1-Criar um programa que converta libra em dolar, ou graus Celsius para Fahrenheit;
2-Exibir o resultado da conversão na tela, no lugar da função alert.*/

/*CALCULADORA E LAÇOS CONDICIONAIS NO JAVASCRIPT
PARTICIPE E VÁ MAIS FUNDO
Nesta segunda aula da Imersão Dev, vamos criar uma calculadora, que realiza as principais operações! O código da aula inicial para você acompanhar está aqui:

https://codepen.io/imersao-dev/pen/fe7e8d7e1820a0883499c1b85d0ef8f3

Não se esqueça de fazer o fork desse projeto para a sua conta, e de marcar a hashtag da #imersaodev e #alura.

Nesta programa, vamos aprender o que são laços condicionais if e else, como comparar um valor com outro para executar um código ou não. Além disso, vamos aprender como escrever na tela com a função document.write.

*Conteúdo detalhado dessa aula
Interagir com usuário para receber os valores que serão calculados;
Criar a lógica para saber qual operação será executada;
Comparar o valor da operação escolhida para descobrir qual função será realizada;
Exibir uma mensagem de erro, caso a operação escolhida seja inválida;
Exibindo os valores escolhidos e o resultado da operação com document.write;

*Desafios dessa aula!
Exibir um pokemon na tela e pedir para o usuario escrever o nome desse pokemon. Exibir se acertou ou errou o nome.

*Links importantes para você acompanhar a aula
Codepen - editor de código online ()
Operadores boleanos (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)
Repositório do código final da aula 1(https://codepen.io/imersao-dev/pen/zYNOZRX)

*Links citados nessa aula
Mais sobre variáveis (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#vari%C3%A1veis)

Um igual, dois iguais e três iguais? QUE??? (https://pt.stackoverflow.com/questions/7/qual-a-diferen%C3%A7a-entre-os-operadores-e-em-javascript)

*Conteúdos extras:
-JavaScript segundo a documentação (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
-Primeiros passos na programação (https://hipsters.tech/primeiros-passos-na-programacao-a-imersao-dev-hipsters-ponto-tech-243/)
-O que é Javascript? (https://www.youtube.com/watch?v=NaVSbnnV75Q)
-Evolução do Javascript(https://www.youtube.com/watch?v=Bmw_6oOvO3s)*/