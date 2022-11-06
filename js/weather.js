const API_KEY = "c3dcc549fe17d760962c0e4f0d1cf195";

function geoOn(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then(response => response.json()) // json 형태로 data fetch
        .then((data) => {   // data 변수에 ojb형태로 data 담기
            const weatherInfo = document.querySelector('.weather-info');
            const locationInfo = document.querySelector('.location-info');
            const weatherIcon = document.querySelector('.weather-icon');
            const weatherIconURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            
            weatherIcon.src = weatherIconURL;
            weatherInfo.innerText = data.weather[0].main;
            locationInfo.innerText = data.name;
            weatherInfo.append(weatherIcon);
            //console.log(weatherIcon)
        });
}

function geoOff() {
    console.log('CANNOT FIND YOUR LOCATION');
}

navigator.geolocation.getCurrentPosition(geoOn, geoOff);                                                                       