
var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();


request.onload = function(){
    var countryData = JSON.parse(this.response);

var country = function(countryName){
    return countryData.map(currency =>{
        currency.currencies.filter(element=> {
            if(element.code === "USD"){
                return element;
            }
        })
    })
}

for(var i in country){
    console.log(country[i].name);
}
}
