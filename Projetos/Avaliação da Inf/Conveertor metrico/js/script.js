function convert() {

    const meters = parseFloat(document.getElementById('meters').value);
    const unit = document.getElementById('unit').value;
    

    if (isNaN(meters) || meters < 0) {
        document.getElementById('result').innerText = 'Por favor, insira uma distância válida em metros.';
        return;
    }


    const conversionRates = {
        yards: 1.094,
        feet: 3.281,
        inches: 39.37,
        miles: 0.000621
    };


    const convertedValue = meters * conversionRates[unit];


    document.getElementById('result').innerText = `${meters} metros é igual a ${convertedValue.toFixed(4)} ${unit}.`;
}
