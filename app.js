const api = {
    
    baseurl: "http://localhost/weatherapp/result.php"

}



//getResults("thurrock")
getTime();

function getResults(query) {
    fetch(`${api.baseurl}`
    )
        .then(weather => {
            return weather.json();
        })
        .then(localStorageData)
        ;
}

function localStorageData(weather){
    console.log(weather);
    var timenow = new Date();
    var datefromdata = weather[0].datetime;
    var datatime = new Date(datefromdata);
    
    var diff = timenow-datatime;
    console.log(diff);

   
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("city", `${weather[0].city}`);
        localStorage.setItem("temp", `${weather[0].temperature}`);
        localStorage.setItem("weather_type", `${weather[0].weather_type}`);
        localStorage.setItem("weather_type_desc", `${weather[0].weather_type_desc}`);
        localStorage.setItem("temp_min", `${weather[0].temp_min}`);
        localStorage.setItem("temp_max", `${weather[0].temp_max}`);
        localStorage.setItem("humidity", `${weather[0].humidity}`);
        localStorage.setItem("time",`${weather[0].datetime}`);
        // Retrieve
        // document.getElementById("result").innerHTML = localStorage.getItem("firstname");
        //  document.getElementById("first").innerHTML = localStorage.getItem("lastname");
      } 
    
      displayResults();
      
}
{/* Check browser support */}



function displayResults() {
    //console.log(weather);
    let city = document.querySelector(".location .city");
    city.innerText = localStorage.getItem("city");


    let temp = document.querySelector('.current .temp');
    temp.innerHTML = localStorage.getItem("temp");

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = localStorage.getItem("weather_type") +`,`+localStorage.getItem("weather_type_desc");

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = localStorage.getItem("temp_min")+`°c /`+ localStorage.getItem("temp_max")+`°c`;

    let humidity = document.querySelector('.humidity');
    humidity.innerText = `Humidity:`+localStorage.getItem("humidity")+`%`;

    var weatherType = localStorage.getItem("weather_type");;
    console.log(weatherType);

    if(weatherType=="Clouds"){
        document.body.style.backgroundImage = "url('./assets/clouds.jpg')";
        //document.body.style.backgroundColor = "#f3f3f3";
    }
    if(weatherType=="Clear"){
        document.body.style.backgroundImage = "url('./assets/clear.jpg')";
        //document.body.style.backgroundColor = "#f3f3f3";
    }
    if(weatherType=="Rain"){
        document.body.style.backgroundImage = "url('./assets/rain.jpg')";
        //document.body.style.backgroundColor = "#f3f3f3";
    }
    
}

function backgroundImage(weather){
    console.log(weather);
    var weatherType = `${weather.weather[0].main}, ${weather.weather[0].main}`;
    console.log(weatherType)
}

function getTime()
{
    let timrCur = document.querySelector(".location .currentTime");
    var curTime = new Date();
    console.log(curTime);
    console.log(curTime.toLocaleString('en-GB', { timeZone: 'GB' }))
    timrCur.innerText = curTime.toLocaleString('en-GB', { timeZone: 'GB' });
}

