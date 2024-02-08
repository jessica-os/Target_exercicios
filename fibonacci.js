function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === numero;


}
let numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));

if (verificaFibonacci(numero)) {
    alert(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    alert(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
