// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var countryData=JSON.parse(request.response);

// a) Get all the countries from Asia continent /region using Filter function

// var asia=countryData.filter((element)=>element.region==="Asia")
// var country_names=asia.map((ele)=>ele.name.common)
//console.log(country_names)


// b) Get all the countries with a population of less than 2 lakhs using Filter function

// var population= countryData.filter((ele)=>ele.population < 200000)
// var countryNames=population.map((ele)=>ele.name)
// console.log(countryNames)
// }


// c) Print the following details name, capital, flag, using forEach function

// countryData.forEach((element) => console.log(element.name.common,element.capital,element.flag))
//     }


// d) Print the total population of countries using reduce function

// var total_pop = countryData.reduce((acc,cv)=> acc+cv.population,0)
// console.log("Total population of countries :",total_pop)
// }


// e) Print the country that uses US dollars as currency

// for (let j of countryData) {
//     if (j.currencies && j.currencies.USD) {
//       console.log(j.name.common, "uses US dollars");
//     }}

//optionalchaining ?
var US_Dollar = countryData.filter((ele)=>ele.currencies?.USD?.name === 'United States dollar')
var countryNam= US_Dollar.map((ele)=> ele.name.common)
console.log(countryNam)
}
// let usDollarCountries = res.filter((country) => {
//     return country.currencies && country.currencies.USD;
//   });
//   usDollarCountries.forEach(country => {
//   console.log(country.name.common);
//   });
