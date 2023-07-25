"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcJuros = void 0;
const calcJuros = (type, capital, juros, indice, tempo) => {
    let value;
    if (indice.time === 'month' && tempo.time === 'year')
        tempo.value = tempo.value * 12;
    else if (indice.time === 'year' && tempo.time === 'month')
        tempo.value = tempo.value / 12;
    if (type === 'simples') {
        if (!capital) {
            value = juros / (indice.value * tempo.value);
        }
        else if (!juros) {
            value = capital * indice.value * tempo.value;
        }
        else if (!indice.value) {
            value = juros / (capital * tempo.value);
        }
        else if (!tempo.value) {
            value = juros / (capital * indice.value);
        }
    }
    else {
        if (!capital) {
            value = juros / (Math.pow(1 + indice.value, tempo.value) - 1);
        }
        else if (!juros) {
            value = capital * (Math.pow(1 + indice.value, tempo.value) - 1);
        }
        else if (!indice.value) {
            value = Math.log(1 + (juros / capital)) / Math.log(1 + tempo.value);
        }
        else if (!tempo.value) {
            value = Math.log(1 + (juros / capital * indice.value)) / Math.log(1 + indice.value);
        }
    }
    return value;
};
exports.calcJuros = calcJuros;
