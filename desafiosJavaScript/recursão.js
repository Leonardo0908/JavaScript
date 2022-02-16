function potencia(base, expoente) {
	var resultado = 1; 
	for (var cont = 0; cont < expoente; cont++) {
		resultado *= base;
	}


	return resultado;
}
console.log(potencia(2, 2));

function potencia(base, expoente) {
	if(expoente == 0) {
		return 1;
	}

	return base * potencia(base, expoente-1);
}

console.log(potencia(2, 3));