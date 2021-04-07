//Exercícios Entrada Processamento Saida JS

/*

    1 - Elaborar um programa que leia o valor de um jantar. 
    Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago

    Ex:
        Valor do Jantar: R$ 80.00
        Taxa do Garçom: R$ 8.00
        Total a pagar: R$ 88.00

*/

var valorJantar = Number (prompt("Valor Jantar: "));
var taxaGarcon = valorJantar * 0.1;
var valorTotal = valorJantar + taxaGarcon;

alert(`Valor Jantar: ${valorJantar}`);
alert(`Taxa do Garçon: ${taxaGarcon}`);
alert(`Valor Total: ${valorTotal}`);
    






/*

    2 - Elaborar um programa que leia a duração de uma viagem em dias e horas.
    Calcule e informe a duraão total da viagem em número de horas.


    Ex:
        Nº Dias: 2
        Nº Horas: 5
        Total de Horas: 53

*/

var numDias = Number(prompt("Número de dias"))
var numHoras = Number(prompt("Número de horas")) 
var horasTotais = (numDias*24) + numHoras;

console.log (`Numero de dias: ${numDias}`);
console.log (`Numero de horas: ${numHoras}`);
console.log (`Total de Horas: ${horasTotais}`);

/*
    3 - Elaborar um programa que leia um número.
    Calcule e informe os seus vizinhos, ou seja, o número anterior e o número posterior  

    Exemplo:
        Número: 15
        Vizinhos: 14 e 16

*/

var numero = Number(prompt(`Número: `))
var anterior = numero - 1;
var posterior = numero + 1;

alert(`Anterior ${anterior}`)
alert(`Posterior ${posterior}`)

/*
    4 - Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la.
    Calcule e informe o valor a ser pago por cliente.

    Exemplo:
        Valor da conta: R$ 90.00
        Número de clientes: 3
        Valor por cliente: 30.00
*/
   
var valorconta = Number(prompt(`Valor da conta: `))
var numeroclient = Number(prompt(`Número de clientes: `))
var valorporclient = valorconta / numeroclient;

alert(`Valor por cliente: ${valorporclient}`)

/*
    5 - Elaborar um programa para uma loja, o qual leia o preço de um prouto e informe as opções de pagamento.
    Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.

    Exemplo:
        Preço: R$ 60.00
        À vista: R$ 54.00
        Ou 3x de R$: 20.00
*/
   
var preco = Number(prompt(`Preço: `));
var avista = preco * 0.9
var parcelado = preco / 3

    alert(`A vista: ${avista}`)
    alert(`Parcelado em 3x: ${parcelado}`)


/*
    6 - Elaborar um programa que leia 3 notas de um aluno em uma determinada disciplina.
    Calcule e informe a média das notas.

    Exemplo:
        1ª Nota: 7.5
        2ª Nota: 8.0
        3ª Nota: 6.4
        Média: 7.3
*/

var n1 = Number(prompt('Nota 1: '));
var n2 = Number(prompt('Nota 2: '));
var n3 = Number(prompt('Nota 3: '));
var media = (n1 + n2 + n3 ) / 3

alert(`Média das notas: ${media}`)
