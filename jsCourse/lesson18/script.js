let balance = 100;
let stock = 50;
let price = 5;
let quantity = 8;

function checkStock(stock) {
    if (stock > 0) {
        return true;
    }
    else {
        return false;
    }
}

let a = checkStock(stock);
console.log(a);

function reduceStock(quantity) {
    if (a = true) {
        return stock - quantity;
} else {
    return "do nothing";
}
}

let b = reduceStock(quantity);
console.log(b);

function increaseBalance(quantity) {
    if (a = true) {
        return balance + (quantity * price);
    }
    else {
        return "do nothing";
    }
}

let c = increaseBalance(quantity);
console.log(c);


function fullTransaction(quantity) {
    if (quantity > stock) {
        return "Unable to complete transaction"
    }
    else {
        stock - quantity;1
        balance + (quantity * price);
        stock - quantity;
    }
}