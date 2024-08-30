const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;

const totalFat = sp + rj + mg + es + outros;

const percentual = (valor) => (valor / totalFat) * 100;

console.log(`Percentual de SP: ${percentual(sp).toFixed(2)}%`);
console.log(`Percentual de RJ: ${percentual(rj).toFixed(2)}%`);
console.log(`Percentual de MG: ${percentual(mg).toFixed(2)}%`);
console.log(`Percentual de ES: ${percentual(es).toFixed(2)}%`);
console.log(`Percentual de Outros: ${percentual(outros).toFixed(2)}%`);