// console.log('connected');
const API_KEY = `52d0a34282aaae99c27e93159b7e6dcd`;
const searchTemperature = () =>{
    const city = document.getElementById('city-name').value;
    // city.value = '';
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    //  console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data))
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemparature = temparature =>{
    setInnerText('city', temparature.name);
    setInnerText('temparature', temparature.main.temp);
    setInnerText('condition', temparature.weather[0].main);
    // set weather icon
    const url = `https://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url)
}