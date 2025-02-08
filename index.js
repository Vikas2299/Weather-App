const apiKey = '85e892e81a77d85ee9e27f82c74e5fd7';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°F';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' mph';

    ChangeWeatherIcon(data)
 
}

async function ChangeWeatherIcon(data) {
    switch(data.weather[0].main) {
        case 'Haze':
            weatherIcon.src = 'images/clear.png';
            break;
        case 'Rain':
            weatherIcon.src = 'images/rain.png';
            break;

        case 'Drizzle':
            weatherIcon.src = 'images/drizzle.png';
            break;

        case 'Snow':
            weatherIcon.src = 'images/snow.png';
            break;

        case 'Clouds':
            weatherIcon.src = 'images/clouds.png';
            break;

        case 'Mist':
            weatherIcon.src = 'images/mist.png';
            break;

        case 'Clear':
            weatherIcon.src = 'images/clear.png';
            break;
    }
}


searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})

searchBox.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        checkWeather(searchBox.value);
    }
    
})

