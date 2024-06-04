let box=document.querySelector("input");
let search=document.querySelector(".search")
let temp=document.querySelector(".temp")
let sun=document.querySelector(".sun")
let hum=document.querySelector(".humi")
let ws=document.querySelector(".ws")

search.addEventListener("click",(e)=>{
   checkWeather(box.value)
})

let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let apiKey="463ee5211212e1f3a88451355ee9ace4"

async function checkWeather(city){
    let response=await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status==404)
        {
           document.querySelector(".error").style.display="block"
           document.querySelector(".weat").style.display="none"
        }
     else
    {
    let data=await response.json();
    
    temp.textContent=`${data.main.temp}°C`
    document.querySelector(".cy").textContent=city
    hum.textContent=`${data.main.humidity}%`
    ws.textContent=`${data.wind.speed}km/hr`

    console.log(data)
    if(data.weather[0].main==`Clear`)
        sun.src=`./images/sun2-removebg-preview.png `
    else if(data.weather[0].main==`Clouds`)
        sun.src=`./images/sun_with_cloud-removebg-preview.png`  
    else 
        sun.src=`./images/download-removebg-preview.png`
  
        document.querySelector(".weat").style.display="block"
        document.querySelector(".error").style.display="none"
    }
}




