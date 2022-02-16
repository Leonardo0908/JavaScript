var numeros = [];
var quantNumeros = Number(prompt("Digite quantos numeros: "));

var resultado = 0;

for(i = 0;i < quantNumeros ; i++) {
	numeros[i] = Number(prompt("Digite um valor: "));

	resultado += numeros[i];
}

resultado /= quantNumeros;

console.log(resultado);