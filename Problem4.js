var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

//Problem 4: Print the total population of countries using reduce function

request.onload = function(){
    var countryData = JSON.parse(this.response);
    // for(var i in countryData){
    //     console.log(countryData[i].name);
    // }
  
    let totalPop = countryData.reduce((acc,ele)=>{
    
            
        return acc+ele.population;
        
    },0)
    

console.log(totalPop);
}
