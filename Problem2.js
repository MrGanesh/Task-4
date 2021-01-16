var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

// Problem 2: Get all countries with population less then 2 lack using filter function
request.onload = function(){
    var countryData = JSON.parse(this.response);

var population = countryData.filter(Cregion =>{
    if (Cregion.population<=200000){
        return Cregion;
    }
} ); 
for(var i in population){
    console.log(population[i].name);
}
}