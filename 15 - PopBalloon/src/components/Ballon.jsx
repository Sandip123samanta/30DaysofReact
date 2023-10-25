import React, { useRef } from 'react'

function Ballon({count,setCount,color}) {
    
    const poppIT = (e)=>{
        let cls = e.target.classList
        let classes = [...cls]
        if(classes.includes('popped')) return
        e.target.style.backgroundColor = 'transparent'
        e.target.textContent = '🎈'
        e.target.classList.add('popped')
        setCount(count+1)
        
        if(count === 9){
            setTimeout(()=>{
                const show = document.querySelector('.main')
                show.innerHTML=`🎉 You got all the balloons!'`
            },1000)
        }
    }
  return (
    <div 
    
    className='w-20 h-20 rounded-full'>
        <div 
        onMouseOver={poppIT}
        style={{backgroundColor: color}}
        className='w-20 h-20 rounded-full text-2xl'></div>
    </div>
  )
}

export default Ballon