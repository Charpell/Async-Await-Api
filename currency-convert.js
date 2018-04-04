// USD CAD 23
// 23 USD is worth 28 CAD. You can spend these in the following countries

const axios = require('axios');

const getExchangeRate = async (from, to) => {
  const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);
  return response.data.rates[to]
}

const getCountries = async (currencyCode) => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
  return response.data.map((country) => country.name)
}


// Using Asyn and Await
const convertCurrency = async (from, to, amount) => {
  const countries = await getCountries(to);
  const rate = await getExchangeRate(from, to);
  const exchangeAmount = amount * rate;

  return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`  
}

convertCurrency('CAD', 'USD', 100).then((status) => {
  console.log(status)
})





