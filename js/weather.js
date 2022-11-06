const API_KEY = "c3dcc549fe17d760962c0e4f0d1cf195";

function geoOn(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const apUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
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
            //console.log(data)
        });
    fetch(apUrl)
        .then(response => response.json())
        .then((apData) => {
            const airPm2 = document.querySelector('.ap2to5');
            const airPm10 = document.querySelector('.ap10')
            
            const pm2Level = apData.list[0].components.pm2_5;
            const pm10Level = apData.list[0].components.pm10;
            
            if (pm2Level <= 15) {
                //console.log('good')
                airPm2.classList.add('best');
            } else if (15 < pm2Level <= 35) {
                airPm2.classList.add('normal');
            } else if (35 < pm2Level <= 75) {                
                airPm2.classList.add('bad');
            } else {
                airPm2.classList.add('worst');
            }
            
            if (pm10Level <=30) {
                airPm10.classList.add('worst');
            } else if (30 < pm10Level <=80) {
                airPm10.classList.add('normal');
            } else if (80 < pm10Level <= 150) {
                airPm10.classList.add('bad');
            } else {
                airPm10.classList.add('worst');
            }
        });
}

function geoOff() {
   alert('CANNOT FIND YOUR LOCATION');
}

navigator.geolocation.getCurrentPosition(geoOn, geoOff);                                                                       