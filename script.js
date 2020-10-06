const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const AmountEl_one = document.getElementById("amount-one");
const AmountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//fetch exchange rates and update the DOM
const calculate = () => {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    const rate =data.rates[currency_two];
    rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
    AmountEl_two.value = (AmountEl_one.value * rate).toFixed(2);
  })
}



//Event Listeners
currencyEl_one.addEventListener('change', calculate);
AmountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
AmountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
})
calculate();