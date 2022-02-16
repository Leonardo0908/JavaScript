var convidados = [];

var quantiConvidados = Number(prompt("Diga a quntidade de convidados: "));

for(i = 0;i < quantiConvidados; i++) {
	var nome = prompt("Diga o nome do convidado:");
	var idade = Number(prompt("Diga a idade do convidado:"));

	convidados({nome: nome, idade: idade });
}

console.log(convidados);
