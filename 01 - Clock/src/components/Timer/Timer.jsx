import React, { useEffect, useState, useRef } from 'react'
import './Timer.css'


function Timer() {

  const [time,setTime] = useState(0);
  const [running,setRunning] = useState(true);

  const timer = useRef()

  useEffect(()=>{
    if(running){
      timer.current = setInterval(()=> setTime(pre=>pre+1),1000)
    }
    return () => clearInterval(timer.current)
  },[running])

  const formet = (time) =>{
    let hour = Math.floor(time / 60 / 60 % 24);
    let min = Math.floor(time / 60 % 60);
    let sec = Math.floor(time % 60);

    hour = hour < 10 ? "0"+hour : hour;
    min = min < 10 ? "0"+min : min;
    sec = sec < 10 ? "0"+sec : sec;

    return hour+ " : "+min+" : "+sec;

  }

  return (
    <>
      <section className='stopwatch bg-gray-900'>
      <div className="watch block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p className='timer text-slate-50'>{formet(time)}</p>
        <div className="actions">
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={()=>setTime(0)}>Restart</button>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={()=>{
            if(running) clearInterval(timer.current)
            setRunning(!running) 
          }}>{running ? "Stop" : "Resume"}</button>
        </div>
      </div>
      </section>
    </>
  )
}

export default Timer