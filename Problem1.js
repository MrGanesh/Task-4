var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

// Problem 1: Get all countries from ASis contentinent region

request.onload = function(){
    var countryData = JSON.parse(this.response);
    for(var i in countryData){
        console.log(countryData);
    }
    var arr = countryData.filter(Cregion =>{
        if (Cregion.region === "Asia"){
            return Cregion;
        }
    } ); 
    for(var i in arr){
        console.log(arr[i].name);
    }

 

}