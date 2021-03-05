const weatherData = {
    tempUnit: 'C',
    windSpeedUnit:'m/s',
    days: [
        { day:'Mon', temp:-10, windDirection:'north-east', windSpeed:10 , type:'snow'},
        { day:'Tue', temp:0, windDirection:'north-west', windSpeed:15 , type:'windy'},
        { day:'Wed', temp:5, windDirection:'south', windSpeed:10 , type:'thunderstorm'},
        { day:'Thu', temp:10, windDirection:'west', windSpeed:7 , type:'rain'},
        { day:'Fri', temp:12, windDirection:'east', windSpeed:6 , type:'overcast'},
        { day:'Sat', temp:11, windDirection:'north', windSpeed:5 , type:'partially cloudy'},
        { day:'Sun', temp:25, windDirection:'south-west', windSpeed:2 , type:'sunny'},
    ]
}
function displayWeather() {
    let day = document.getElementsByClassName("day");
    let weatherImg = document.getElementsByClassName("weather-img")
    let temp = document.getElementsByClassName("temp");
    for (let i = 0; i < weatherData.days.length; i++) {
        day.item(i).innerHTML = weatherData.days[i].day;
        temp.item(i).innerHTML = (weatherData.days[i].temp + " " + weatherData.tempUnit + "°");
        switch (weatherData.days[i].type) {
            case 'windy':
                weatherImg.item(i).src = 'assets/images/weather_icons/001-wind-1.png'
                break;
            case 'snow':
                weatherImg.item(i).src = 'assets/images/weather_icons/008-snow-1.png'
                break;
            case 'sunny':
                weatherImg.item(i).src = 'assets/images/weather_icons/050-sun.png'
                break;
             case 'overcast':
                weatherImg.item(i).src = 'assets/images/weather_icons/049-clouds.png'
                break;
            case 'partially cloudy':
                weatherImg.item(i).src = 'assets/images/weather_icons/020-moon-3.png'
                break;
            case 'rain':
                weatherImg.item(i).src = 'assets/images/weather_icons/040-rain.png'
                break;
            case 'thunderstorm':
                weatherImg.item(i).src = 'assets/images/weather_icons/012-rain-2.png'
                break;
        }
    }
}
displayWeather();
function openWidget(id) {
    let widget = document.getElementsByClassName('weather-widget').item(0);
    let weekDay = document.getElementById(id);
    let day = document.getElementById('day');
    let temp = document.getElementById('temp');
    let type = document.getElementById('type');
    let speed = document.getElementById('wind-speed');
    let direction = document.getElementById('wind-direction');
    let weatherImg = document.getElementById('weather-img');
    day.innerHTML = weekDay.getElementsByClassName("day").item(0).textContent;
    temp.innerHTML = weekDay.getElementsByClassName("temp").item(0).textContent;
    weatherImg.src = weekDay.getElementsByClassName("weather-img").item(0).getAttribute("src");
    for (let i=0; i < weatherData.days.length; i++){
        if (id == weatherData.days[i].day) {
            type.innerHTML = weatherData.days[i].type;
            speed.innerHTML = (weatherData.days[i].windSpeed + ' ' + weatherData.windSpeedUnit);
            direction.innerHTML = weatherData.days[i].windDirection;
            switch (weatherData.days[i].windDirection) {
                case 'south':
                    document.getElementById('wind-arrow').style.transform = 'rotate(180deg)';
                    break;
                case 'east':
                    document.getElementById('wind-arrow').style.transform =  'rotate(90deg)';
                    break;
                case 'west':
                    document.getElementById('wind-arrow').style.transform = 'rotate(270deg)';
                    break;
                case 'south-east':
                    document.getElementById('wind-arrow').style.transform = 'rotate(135deg)';
                    break;
                case 'south-west':
                    document.getElementById('wind-arrow').style.transform = 'rotate(225deg)';
                    break;
                case 'north-east':
                    document.getElementById('wind-arrow').style.transform = 'rotate(45deg)';
                    break;
                case 'north-west':
                    document.getElementById('wind-arrow').style.transform = 'rotate(315deg)';
                    break;
                default:
                    document.getElementById('wind-arrow').style.transform = "unset"
            }
        }
    }
    let checkBox = document.getElementsByClassName('convert-spd').item(0);
    let speedCurrent = parseInt (document.getElementById("wind-speed").textContent);
    if (checkBox.checked == true) {
        document.getElementById("wind-speed").innerHTML = (Math.round((speedCurrent * 18) / 5) + ' ' + 'km/h');
    }
    else {}
    widget.style.display = 'block';
}
function closeWidget(){
    let widget = document.getElementsByClassName('weather-widget').item(0);
    widget.style.display = 'none';
}
function convertToFahrenheit(){
    let checkBox = document.getElementsByClassName('convert-temp').item(0);
    let temp = document.getElementsByClassName('temp');
    let tempWidget = parseInt (document.getElementById('temp').textContent);
    let tempC = 0;
    if (checkBox.checked == true) {
        for (let i = 0; i< temp.length; i++){
           tempC = parseInt (temp.item(i).textContent);
           temp.item(i).innerHTML = Math.round(tempC * 9 / 5 + 32) + " °F";
        }
        document.getElementById('temp').innerHTML = Math.round (tempWidget * 9 / 5 + 32) + " °F";
    }
    else {
        for (let i = 0; i < weatherData.days.length; i++) {
            temp.item(i).innerHTML = (weatherData.days[i].temp + " " + weatherData.tempUnit + "°");
        }
        document.getElementById('temp').innerHTML = (Math.round ((parseInt(document.getElementById('temp').textContent) - 32) * 5 / 9) + " " + weatherData.tempUnit + "°");
    }
}
function convertToKm() {
    let checkBox = document.getElementsByClassName('convert-spd').item(0);
    let speed = parseInt (document.getElementById("wind-speed").textContent);
    if (checkBox.checked == true) {
        document.getElementById("wind-speed").innerHTML = (Math.round((speed * 18) / 5) + ' ' + 'km/h');
    }
    else {
        document.getElementById("wind-speed").innerHTML = (Math.round((speed * 5) / 18) + ' ' + weatherData.windSpeedUnit);
    }
}
