var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

// Problem 3: Print the following details name, capital, flag using forEach function

request.onload = function(){
    var countryData = JSON.parse(this.response);

    var details = countryData.forEach(element => {
        console.log( "Country Name: ",element.name," ","Capital: ",element.capital," ","Flag: ", element.flag );
    });

    // for(var i in details){
    //     console.log(details[i]);
    // }
}