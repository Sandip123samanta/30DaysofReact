import React, { useEffect, useState } from 'react'
import './Analog.css'

function Analog() {

  const [hourDeg,setHourDeg] = useState(0);
  const [minDeg,setMinDeg] = useState(0);
  const [secDeg,setSecDeg] = useState(0);

  useEffect(()=>{
    
    const interval = setInterval(()=>{
      const date = new Date();
      
      setHourDeg((date.getHours() * 30) + (minDeg / 12))
      setMinDeg(date.getMinutes() * 6)
      setSecDeg(date.getSeconds() * 6)
    },1000)

    return ()=>clearInterval(interval)
  },[])

  return (
    <>
      <div className="clock_container bg-gray-900">
      <div className="clock">
         <div className="center-nut"></div>
         <div className="center-nut2"></div>
         <div className="indicators">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
         </div>
         <div className="sec-hand" >
            <div className="sec" style={{transform: `rotate(${secDeg}deg)`}}></div>
         </div>
         <div className="min-hand" >
            <div className="min" style={{transform: `rotate(${minDeg}deg)`}}></div>
         </div>
         <div className="hr-hand" >
            <div className="hr" style={{transform: `rotate(${hourDeg}deg)`}}></div>
         </div>
      </div>
      </div>
    </>
  )
}

export default Analog