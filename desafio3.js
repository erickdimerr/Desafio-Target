const fatDia = [1000, 2000, 1500, 3000, 2500, 4000, 0, 0, 5000, 6000]; // Exemplo

let menorValor = fatDia[0];
let maiorValor = fatDia[0];
let soma = 0;
let diasFat = 0;

for (let i = 0; i < fatDia.length; i++) {
  let valor = fatDia[i];

  if (valor > 0) {

    if (valor < menorValor) {
      menorValor = valor;
    }

    if (valor > maiorValor) {
      maiorValor = valor;
    }

    soma += valor;
    diasFat++;
  }
}

let media = soma / diasFat;
let diasAcimaMedia = 0;

for (let i = 0; i < fatDia.length; i++) {
  if (fatDia[i] > media) {
    diasAcimaMedia++;
  }
}

console.log("Menor valor de faturamento:", menorValor);
console.log("Maior valor de faturamento:", maiorValor);
console.log("Número de dias com faturamento acima da média:", diasAcimaMedia);