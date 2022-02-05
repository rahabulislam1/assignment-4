function pandaCost(singara, somucha, jilapi) {
    if (typeof singara != 'number' || typeof somucha != 'number' || typeof jilapi != 'number') {
        return 'Please give a number!';
    }
    else if (singara < 1 || somucha < 1 || jilapi < 1) {
        return 'Please give a positive number';
    }

    let totalSingaraCost = singara * 7;
    let totalSomuchaCost = somucha * 10;
    let totalJilapiCost = jilapi * 15;

    let totalCost = totalSingaraCost + totalSomuchaCost + totalJilapiCost;
    return totalCost;
}

const singaraQuantity = 1;
const somuchaQuantity = 2;
const jilapiQuantity = 3;
const totalPandaCost = pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity)
console.log(totalPandaCost);