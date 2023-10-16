import React from 'react'
import { useState } from "react";
import './Digital.css'


function Digital() {
  let date = new Date()

  const [hour,setHour] = useState("")
  const [min,setMin] = useState("")
  const [sec,setSec] = useState("")
  const [amorpm, setAmPm] = useState('')

  setInterval(() => {
   date = new Date()
   let hour = date.getHours();
   let min = date.getMinutes();
   let sec = date.getSeconds();
   let d = hour< 12 ? "AM" : "PM";
   hour = hour > 12 ? hour - 12 : hour;

   hour = hour == 0 ? hour = 12: hour;

   hour = hour< 10 ? "0"+hour : hour;
   min = min< 10 ? "0"+min : min;
   sec = sec< 10 ? "0"+sec : sec;

   setHour(hour)
   setMin(min)
   setSec(sec)
   setAmPm(d)
  }, 1000);

  return (
    <>
      <section className='bg-gray-900'>
    <div className="container bg-gray-800">
      <div className="time">
        <div className="time-colon">
          <div className="time-text">
            <span className="num hour_num">{hour}</span>
            <span className="text">Hours</span>
          </div>
          <span className="colon">:</span>
        </div>
        <div className="time-colon">
          <div className="time-text">
            <span className="num min_num">{min}</span>
            <span className="text">Minutes</span>
          </div>
          <span className="colon">:</span>
        </div>
        <div className="time-colon">
          <div className="time-text">
            <span className="num sec_num">{sec}</span>
            <span className="text">Seconds</span>
          </div>
          <span className="am_pm">{amorpm}</span>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Digital