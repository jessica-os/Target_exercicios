// Valores de faturamento mensal por estado
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};


function calcularPercentualRepresentacao(faturamentoPorEstado) {
    // Calcula o valor total mensal
    const valorTotalMensal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);

    const percentuais = {};
    for (let estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / valorTotalMensal) * 100;
        percentuais[estado] = percentual.toFixed(2);
    }

    return percentuais;

}

const percentuais = calcularPercentualRepresentacao(faturamentoPorEstado);
const resultadoDiv = document.getElementById("resultado-percentual");
for (let estado in percentuais) {
    const p = document.createElement("p");
    p.textContent = `${estado}: ${percentuais[estado]}%`;
    resultadoDiv.appendChild(p);
}