const calcJuros = (type, capital, juros, indice, tempo) => {
    let value;

    if (indice.time === 'month' && tempo.time === 'year') tempo.value = tempo.value * 12;

    else if (indice.time === 'year' && tempo.time === 'month') tempo.value = tempo.value / 12;

    if (type === 'simples') {
        if (!capital) {
            value = juros / (indice.value * tempo.value);
        } else if (!juros) {
            value = capital * indice.value * tempo.value;
        } else if (!indice.value) {
            value = (juros / (capital * tempo.value)) * 100;
        } else if (!tempo.value) {
            value = (juros / (capital * indice.value)) * 100;
        }
    }

    else {
        if (!capital) {
            value = juros / (Math.pow(1 + indice.value, tempo.value) - 1);
        } else if (!juros) {
            value = capital * (Math.pow(1 + indice.value, tempo.value) - 1);
        } else if (!indice.value) {
            value = Math.log(1 + (juros / capital)) / Math.log(1 + tempo.value);
        } else if (!tempo.value) {
            value = Math.log(1 + (juros / capital * indice.value)) / Math.log(1 + indice.value);
        }
    }


    return (value);
}

console.log('Caso 1: Juros de R$' + calcJuros('simples', 10000, undefined, {
    time: 'month',
    value: 0.03
}, {
    time: 'month',
    value: 11
}));
console.log('caso 2: ' + calcJuros('simples', undefined, 1701, {
    time: 'year',
    value: 0.18
}, {
    time: 'year',
    value: 3
}), 'é o capital inicial');
console.log('caso 3: Indice percentual de ' + calcJuros('simples', 11750.5, 2350.1, {
    time: 'month',
    value: undefined
}, {
    time: 'month',
    value: 8.5
}));
console.log('caso 4: ' + calcJuros('simples', 72500, 19575, {
    time: 'month',
    value: 1.5
}, {
    time: 'month',
    value: undefined
}) + ' meses');
