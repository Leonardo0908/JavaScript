var numeros = [10, 18, , 15, 2, 12, 21, 33, 100];		

var pares = function(item) {
	return !(item % 2);
}

var dobrados = function(item) { 
	  item * 2;
}

// filter + map + reduce
var numerosDobrados = numeros.filter(pares).map(dobrados);
console.log(numerosDobrados);
 
var carros = [{marca: "audi", cor: "preto"},
			  {marca: "audi", cor: "branco"},
			  {marca: "ferrri", cor: "vemelho"},
			  {marca: "ford", cor: "branco"},
			  {marca: "peugot", cor: "branco"}];

function groupBy(array, prop) {
	var value = array.reduce(function(total, item) {
		var key = item[prop];

		total[key] = (total[key] || []).concat(item);

		return total; 
	}, {});

	return value;
}				

var agrupados = groupBy(carros, "marca");
console.log(agrupados);