function picnicBudget(numberOfPerson) {

    if (typeof numberOfPerson != 'number') {
        return 'Please give a number!';
    }
    else if (numberOfPerson < 1) {
        return 'Please give a number greater than 0';
    }

    else if (numberOfPerson <= 100) {
        let totalCost = numberOfPerson * 5000;
        return totalCost;
    }
    else if (numberOfPerson <= 200) {
        let mod = numberOfPerson % 100;
        let totalCost = 500000 + (mod * 4000);
        return totalCost;
    }
    else {
        let restPerson = numberOfPerson - 200;
        let totalCost = 500000 + 400000 + (restPerson * 3000);
        return totalCost;
    }
}
const totalPerson = 210;
const totalPicnicBudget = picnicBudget(totalPerson);
console.log(totalPicnicBudget);