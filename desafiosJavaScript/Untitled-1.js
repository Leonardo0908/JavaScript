var x = Number (prompt("Digite o 1° número: "));
var sinal = prompt("Digite o sinal: ");
var y = Number (prompt("Digite o 2° número: "));

if (sinal == "+" ){
var soma = function(x, y) {
    return(x + y);
}
}
else if(sinal == "-"){
var sub = function(x, y) {
    return(x - y);
}
}
else if(sinal == "*"){
var mult = function(x, y) {
    return(x * y);
}
}
else if(sinal == "/"){
var div = function(x, y) {
    return(x / y);
}
}
var calculadora = function(x, y, operacao){
   return operacao(x, y);
}

calculadora(10, 20, mult);