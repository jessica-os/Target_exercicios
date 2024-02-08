function inverterString(string) {
    let novaString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }
    return novaString;
}

const textoOriginal = "Olá, mundo!";
const textoInvertido = inverterString(textoOriginal);

document.querySelector('.original').innerHTML = textoOriginal
document.querySelector('.invertida').innerHTML = textoInvertido


