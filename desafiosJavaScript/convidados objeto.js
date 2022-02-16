var convidados = [];

var quantConvidados = Number(prompt("Digite a quantidade de convidados: "));

for(i = 1;i <= quantConvidados; i++ ) {
	nome = prompt("Digite o nome: ");
	idade = Number(prompt("Digite a idade: "));
	cpf = prompt("Digite o CPF: ");

 	convidados.push({nome: nome, idade: idade, cpf: cpf});
}

console.log(convidados);