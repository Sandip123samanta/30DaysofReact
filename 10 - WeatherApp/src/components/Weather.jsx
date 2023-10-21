import React, { useEffect, useRef, useState } from 'react'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import search from '../assets/search.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'

function Weather() {

  const [temp,setTemp] = useState("")
  const [humidityValue,setHumidityValue] = useState("")
  const [windValue,setWindValue] = useState("")
  const [Icon,setIcon] = useState(cloud)

  const searchInfo = useRef("")

  const chooseIcon =(icon)=>{
    if(icon === "01d" || icon === "01n") setIcon(clear)
    else if(icon === "02d" || icon === "02n") setIcon(cloud)
    else if(icon === "03d" || icon === "03n") setIcon(drizzle)
    else if(icon === "04d" || icon === "04n") setIcon(drizzle)
    else if(icon === "09d" || icon === "09n") setIcon(rain)
    else if(icon === "10d" || icon === "10n") setIcon(rain)
    else if(icon === "13d" || icon === "13n") setIcon(snow)
    else setIcon(clear)
  }
  
  const searchfunc = async() => {
    if(searchInfo.current.value === ""){
      return
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInfo.current.value}&units=Metric&appid=0267749bd163c4794893b4e869f4a477`
    let response = await fetch(url)
    let data = await response.json()

    setTemp(data.main.temp)
    setHumidityValue(data.main.humidity)
    setWindValue(data.wind.speed)

    chooseIcon(data.weather[0].icon)
  }
    

  return (
    <div className="weatherCon w-96 h-3/5 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-around">
      <div className="search w-4/5 h-fit flex items-center justify-around">
        <input 
        type="text" 
        name="search" 
        ref={searchInfo}
        id="" 
        className='w-4/5 h-10 pl-3 rounded-3xl bg-gray-50 border border-gray-300 text-gray-900 text-xl focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        <button className="search-icon h-10 w-10 rounded-3xl flex items-center justify-center bg-white"
        onClick={searchfunc}
        >
          <img src={search} alt="" />
        </button>
      </div>
      <div className="weatherImg flex flex-col items-center justify-around text-2xl text-white font-bold">
        <div className='w-3/5 object-cover overflow-hidden'>
          <img className="w-full" src={Icon} alt="" />
        </div>
        <h1>{temp}°C</h1>
        <h1>{searchInfo.current.value}</h1>
      </div>
      <div className="weatherDetails w-full flex justify-center items-center">
         <div className="w-2/5 h-fit humidity flex gap-2 items-center">
            <img className="w-8" src={humidity} alt="" />
            <div className="humValue text-sm text-white">
              <h1>{humidityValue}%</h1>
              <h1>Humidity</h1>
            </div>
         </div>
         <div className="wind w-2/5 h-fit humidity flex gap-2 items-center">
            <img className='w-8' src={wind} alt="" />
            <div className="Wind text-sm text-white">
              <h1>{windValue}km/h</h1>
              <h1>Wind speed</h1>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Weather