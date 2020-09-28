const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
//const dateEl_one = document.getElementById('history-day');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
const update = document.getElementById('update');
const display = document.querySelector('.display');

const buttonDate = document.querySelector('.buttonDate');
buttonDate.addEventListener('click', () => {
const ratesByDate = `v3.exchangerate-api.com/archive/05247209bb3c5b32859735c2/usd${display.value}`});

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
 

  fetch(`https://pro.exchangerate-api.com/v6/05247209bb3c5b32859735c2/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
     //console.log(data);
      const rate = data.conversion_rates[currency_two];
      document.querySelector('.update').innerText = (data.time_last_update_utc).slice(0, 25);
      
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      
      
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);

    });
}


// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();