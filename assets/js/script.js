var citySearch= document.querySelector('.citySearch');          //Declare values
var main= document.querySelector('#title');
var temperature= document.querySelector('.temperature');
var description= document.querySelector('.description');
var sky= document.querySelector('.sky');
var button= document.querySelector('.submit');

button.addEventListener('click', function(citySearch) {          //Function to display data for the input city
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(response => response.json())
    .then(data => {
        var temperatureValue= data['main']['temperature'];
        var citySearchValue= data['citySearch'];;
        var descriptionValue= data['weather'][0]['description'];

        main.innerHTML = citySearchValue;
        description.innerHTML= "Description - "+descriptionValue;
        temp.innerHTML = "Temperature - "+temperatureValue;
        input.value="";
    })
})