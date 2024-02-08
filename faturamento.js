// Carregando o arquivo JSON e chamando a função de cálculo

fetch('faturamento.json')
    .then(response => response.json())
    .then(data => calcularFaturamento(data))
    .catch(error => console.error('Erro ao carregar o arquivo:', error));


function calcularFaturamento(faturamentoDiario) {
    // Calculando o menor e o maior valor de faturamento

    let menorFaturamento = Math.min(...faturamentoDiario.map(item => item.valor));
    let maiorFaturamento = Math.max(...faturamentoDiario.map(item => item.valor));

    // Calculando a média mensal, ignorando os dias sem faturamento
    let somaFaturamento = 0;
    let diasComFaturamento = 0;
    for (let item of faturamentoDiario) {
        if (item.valor > 0) {
            somaFaturamento += item.valor;
            diasComFaturamento++;
        }
    }
    let mediaMensal = somaFaturamento / diasComFaturamento;

    // Calculando o número de dias em que o faturamento diário foi superior à média mensal
    let diasAcimaDaMedia = faturamentoDiario.filter(item => item.valor > mediaMensal).length;

    // Exibindo os resultados na página HTML
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
                <p>Menor faturamento: ${menorFaturamento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <p>Maior faturamento:${maiorFaturamento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <p>Dias com faturamento acima da média:${diasAcimaDaMedia} dias</p>
            `;
}



