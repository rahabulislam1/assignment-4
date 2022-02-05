//Problem-1: ana to vori
function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'Please give a number!';
    }
    else if (ana < 1) {
        return 'Please give a number greater than 0';
    }

    let vori = ana * 0.0625;
    return vori;
}
const totalAna = 16;
const getAnaToVori = anaToVori(totalAna);
console.log(getAnaToVori);





// Problem-2: pandaCost
function pandaCost(singara, somucha, jilapi) {
    if (typeof singara != 'number' || typeof somucha != 'number' || typeof jilapi != 'number') {
        return 'Please give a number!';
    }
    else if (singara < 0 || somucha < 0 || jilapi < 0) {
        return 'Please give a positive number';
    }

    let totalSingaraCost = singara * 7;
    let totalSomuchaCost = somucha * 10;
    let totalJilapiCost = jilapi * 15;

    let totalCost = totalSingaraCost + totalSomuchaCost + totalJilapiCost;
    return totalCost;
}

const singaraQuantity = 0;
const somuchaQuantity = 2;
const jilapiQuantity = 3;
const totalPandaCost = pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity)
console.log(totalPandaCost);




// Problem-3: picnicBudget
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





// Problem-4: oddFriends
function oddFriend(myFriends) {
    if (typeof myFriends != 'object') {
        return 'Please give an array';
    }

    for (const friend of myFriends) {
        if (friend.length % 2 != 0) {
            return friend;
        }
    }
}

let myFriends = ['Razu', 'Sadee', 'Misbah', 'Rahabul', 'Razib', 'Tashfia', 'Rashid'];
const getMyOddFriend = oddFriend(myFriends);
console.log(getMyOddFriend);