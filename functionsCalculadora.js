var num1;
var num2;
var operador;

function pedirValores(){
    num1 = parseFloat(prompt("Digite o primeiro numero"));
    num2 = parseFloat(prompt("Digite o segundo numero"));
    operador = prompt("Digite que operação fazer (usando os simbolos: +, -, * ou /");
}

pedirValores();

function somar(n1, n2){
    return n1 + n2;
}
const subtrair = (n1, n2)=>{
    return n1 - n2;
}


switch (operador) {
    case "+":
        alert(somar(num1, num2));
        break;
    case "-":
        const resultado = subtrair(num1, num2);
        alert(resultado);
        break;
    case "*":
        alert(num1 * num2);
        break;
    case "/":
        alert(num1 / num2);
        if ((num1 % num2) != 0){
            alert(num1 % num2);
        }
        break;
    default:
        alert("Operação inválida");
}