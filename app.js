
 
const API_KEY = config.Mykey ;

const form = document.querySelector("form");
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")







const getwheather =  async(city) => {
    weather.innerHTML =  "  <h2> loading data..... </h2> " ;

    url = `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${API_KEY}&units=metric`
    
    const response = await fetch(url)

    const data = await  response.json();
     return showdata(data);
     
}



const showdata = (data) => { 

    if(data.cod == 404){ weather.innerHTML = "  <h2> city not found </h2>  "};
    weather.innerHTML = `<div> <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""> </div>
    <div>
        <h2> ${data.main.temp} ℃</h2>
        <h1>${data.weather[0].main}</h1>
    </div>
    <div >
    <p> feels like : ${data.main.feels_like} ℃ </p>
        <p> humididty : ${data.main.humidity} %</p>
       
    </div>
    
`

console.log(data)

}



form.addEventListener(
    "submit",
    function(event){
        event.preventDefault();
        getwheather(search.value)
    }
 );