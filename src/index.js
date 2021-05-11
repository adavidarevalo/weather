import style from "./style.css";
// Date
var month = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var days = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var f=new Date();

//search-nav button
document.getElementById("search-nav").
addEventListener("click",()=>{
  document.getElementById("search-nav-menu").classList.add("block")
})
//back country 
document.getElementById("faStreetView").addEventListener("click", ()=>{
  navigator.geolocation.getCurrentPosition()
})
//locations now
navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)
  //Api weather location
  const fetchDataMain = async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=7daaca17f73b8537056bf2d813d49c18`)
      const data = await res.json()
      console.log(data)
      //tranform Kelvin to centigrade
      let tranformationKelvin= (data.current.temp - 273.15) 
      //Print in the Dom
      document.getElementById("mainWeather").innerHTML=`
      <h1>${data.timezone}</h1>
      <p>${days[f.getDay()] + ", " + f.getDate() + " de " + month[f.getMonth()] + " de " + f.getFullYear()}</p>
      <p class="weather-Value">${Math.floor(tranformationKelvin)}<span>ºC</span></p>
      <p class="tyte-weather">${data.current.weather[0].main}</p>
      `
      //Main Day
    for (let i = 0; i < 8; i++) {
      let grades = Math.floor(data.daily[i].temp.day-273.15);
      let type = data.daily[i].weather[0].main;
      let min = Math.floor(data.daily[i].temp.min-273.15);
      let max = Math.floor(data.daily[i].temp.max-273.15);
      function dayReal(){
        if(days[i] !== days[f.getDay()]){
          return days[i]
        } else {
          return "Today"
        };
      }
      let day = dayReal();
      document.getElementById(`mainDay${i}`).innerHTML=`
      <div>
        <h2>${day}</h2>
        <p class="weather-Value">${grades}<span>ºC</span></p>
        <p class="weather-Value">${type}</p>
        <p class="weather-Value">Min-temp: ${min}<span>ºC</span></p>
        <p class="weather-Value">Max-temp: ${max}<span>ºC</span></p>
      </div>
      `
    }
    } catch (error) {
      console.log(error)
    }
  }
  fetchDataMain();
});

//search-nav-menu button close
document.getElementById("faTimesCircle").addEventListener("click",()=>{
  document.getElementById("search-nav-menu").classList.remove("block")
})

//Api weather search
  const fetchData = async () => {
    try {
      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+document.getElementById("searchNavInput").value+'&appid=7daaca17f73b8537056bf2d813d49c18')
      const data = await res.json()
      console.log(data)
      console.log(data.name)
      console.log(data.weather.main)
      //tranform Kelvin to centigrade
      let tranformationKelvin= (data.main.temp - 273.15) 
      //background gradient
      function backgroundGradient(a){
        if(a < 0){
          document.getElementById("header").style.background="linear-gradient(to right, #4286f4, #373B44)";
        } else if(a<10){
          document.getElementById("header").style.background="linear-gradient(to right, #6dd5ed, #2193b0)";
        } else if (a<20){
          document.getElementById("header").style.background="linear-gradient(to right, #6dd5ed, #2193b0)";
        } else if(a<30){
          document.getElementById("header").style.background="linear-gradient(to right, #ffd194, #70e1f5)";
        } else if (a<40){
          document.getElementById("header").style.background="linear-gradient(to right, #EDDE5D, #F09819)";
        } else if(a<50){
          document.getElementById("header").style.background="linear-gradient(to right, #F9D423, #FF4E50)";
        } else if(a<60){
          document.getElementById("header").style.background="linear-gradient(to right, #F09819, #FF512F)";
        }
      }
      console.log(backgroundGradient(Math.floor(tranformationKelvin)))
      //Print in the Dom
      document.getElementById("mainWeather").innerHTML=`
      <h1>${data.name}</h1>
      <p>${days[f.getDay()] + ", " + f.getDate() + " de " + month[f.getMonth()] + " de " + f.getFullYear()}</p>
      <p class="weather-Value">${Math.floor(tranformationKelvin)}<span>ºC</span></p>
      <p class="tyte-weather">${data.weather[0].main}</p>
      <p>Min-Temp: ${Math.floor(data.main.temp_min- 273.15)}<span>ºC</span></p>
      <p>Max-Temp: ${Math.floor(data.main.temp_max- 273.15)}<span>ºC</span></p>
      `
      // Date and Hours
      var date = new Date();
      onsole.log(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    } catch (error) {
      console.log(error)
    }
  }

//search country
document.getElementById("search-nav-button").addEventListener("click", ()=>{
  fetchData();
  document.getElementById("search-nav-menu").classList.remove("block")
})
