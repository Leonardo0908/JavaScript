// Usando function para  fazer a conta de numero fatorial//
function fatorial(numero) {

	var resultado = 1;
	for(var i = 2; i <= numero; i++) {
		resultado *= i;
	}

	return resultado;
}

console.log(fatorial(7));
console.log(fatorial(5)); 

// Usando recursão no numero fatorial //
function fatorial(numero) {
	console.log("numero" + numero);
	if(numero == 0) {
		return 1;
	}


	return numero * fatorial(numero-1);
}
console.log(fatorial(5));