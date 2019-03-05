/*
using Radio button

function convertToVnd() {
  let inputAmount = document.getElementById("amount");
  let amountValue = amount.value;
  let usdAmount = amountValue / 22000;
  let eurAmount = amountValue / 25000;
  let currencyArray = [usdAmount, eurAmount];
  let result = document.getElementById("result");
  //radio btn
  let currencyTypeBtn = document.getElementsByName("currencyName");

  for (var i = 0, length = currencyTypeBtn.length; i < length; i++) {
    if (currencyTypeBtn[i].checked) {
      result.innerHTML = `${amountValue} vnd is ${currencyArray[i]} $`;
      break;
    }
  }
} */

//using select box and objects;
const vnd = {
  usd: 23200,
  eur: 26288
}
const usd = {
  vnd: 0.000043,
  eur: 1.13
}
const eur = {
  vnd: 0.000038,
  usd: 0.88
}
const currencies = {
  vnd,
  usd,
  eur
}

function convertCurrency() {
  let e1 = document.getElementById("currencyFrom");
  let from = e1.options[e1.selectedIndex].text;

  let e2 = document.getElementById("currencyTo");
  let to = e2.options[e2.selectedIndex].text;

  let conversionRate = currencies[from][to];

  let inputAmount = document.getElementById("amount");
  let fromValue = inputAmount.value;
  let toValue = (fromValue / conversionRate).toLocaleString();

  let result = document.getElementById("result");
  result.innerHTML = fromValue + ' ' + from + ' is ' + toValue + ' ' + to; 
}

let convertBtn = document.getElementById("convertBtn");
convertBtn.addEventListener("click", convertCurrency);
