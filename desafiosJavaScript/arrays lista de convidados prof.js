var convidados = [];

while(true) {
	var nome = prompt("Digite o nome do convidado ou S para sair");
	var idade = Number(prompt("Digite a idade do convidado"));
	var cpf = prompt("Digite o CPF do convidado");

	if (nome == "s") {
		break;
	} else {
		convidados.push({nome: nome, idade: idade, cpf: cpf});
	}
}
console.log(convidados);