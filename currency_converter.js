//Write your code here
const input = require('sync-input');
console.log("Welcome to Currency Converter!\n1 USD equals  1 USD\n1 USD equals  113.5 JPY\n1 USD equals  0.89 EUR\n1 USD equals  74.36 RUB\n1 USD equals  0.75 GBP");
let currencies = {
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    USD: 1,
    GBP: 0.75
};
const convert = (initialC) => {
    let currency = input("To: > ").toUpperCase();
    if(currency in currencies){
        let amount = input("Amount: > ");
        if(amount >= 1){
            let result = (amount / currencies[initialC]) * currencies[currency];
            console.log(`Result: ${amount} ${initialC} equals ${result.toFixed(4)} ${currency}`);
        }
        else if(isNaN(amount)){
            console.log("The amount has to be a number");
        }
        else{
            console.log("The amount can not be less than 1");
        }
    }
    else{
        console.log("Unknown currency");
    }
}


const checkCurrency = () => {
    let initialC = input("From: > ").toUpperCase();
    switch(initialC){
        case "USD":
            convert("USD");
            break;
        case "JPY":
            convert("JPY");
            break;
        case "EUR":
            convert("EUR");
            break;
        case "RUB":
            convert("RUB");
            break;
        case "GBP":
            convert("GBP");
            break;
        default:
            console.log("Unknown currency");
            checkCurrency();
            break;
    }
}
const convertCurrencies = () => {
    console.log("What do you want to convert?");
    checkCurrency();
}


while(true){
    let option = input("What do you want to do?\n1-Convert currencies 2-Exit program\n");
    if(option == 1){
        convertCurrencies();
    }
    else if(option == 2){
        console.log("Have a nice day!");
        break;
    }
    else{
        console.log("Unknown input");
    }
}