import React, { useEffect, useState,useRef,useCallback } from 'react'
import randomColor from 'randomcolor'
import Button from './Button'
import { BiCopy } from 'react-icons/bi';

function Gradient() {

    const [color1,setColor1] = useState(randomColor())
    const [color2,setColor2] = useState(randomColor())
    const [direction,setDirection] = useState('to right')
    const [gradient,setGradient] = useState(`linear-gradient(${direction},${color1}, ${color2})`)
    const gradRef = useRef(null)

    useEffect(()=>{
        const container = document.querySelector('.container')
        let grad = `linear-gradient(${direction},${color1}, ${color2})`
        setGradient(grad)
        container.style.backgroundImage=gradient;
    },[color1,color2,direction])

    const clicked = (direction)=>{
        setDirection(direction);
    }

    const copyToClipboard = useCallback(() => {
        gradRef.current?.select();
        gradRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(gradient)
      }, [gradient])

      const handleChangeColor = (e) => {
        const { name, value } = e.target;
        if (name === "color1") {
          setColor1(value);
        } else if (name === "color2") {
          setColor2(value);
        }
      };

  return (
    <div className="container w-screen h-screen flex flex-col justify-between items-center">
        <div className="header bg-slate-950 w-screen h-20 flex justify-center items-center">
          <p className='text-slate-50 text-3xl'>Gradient Generator</p>
        </div>

        <div className="gradientContainer w-2/5 h-3/5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col items-center justify-around">
            <h1 className='text-2xl text-white'>Pick Your Gradient</h1>
            <div className="colorPicker flex gap-4 w-full items-center justify-center">
                <input 
                type='color'
                name='color1'
                value={color1}
                onChange={handleChangeColor} 
                className='w-1/5 px-1'
                />
                <input 
                type='color'
                name='color2'
                value={color2}
                onChange={handleChangeColor}
                className='w-1/5 px-1'
                />
            </div>
            <div className="gradDirection h-16">
                <label className='text-xl text-white mb-2'>Choose direction</label>
                <div className='mt-2'>
                    <Button handleClick={clicked} direction={"to right"}/>
                    <Button handleClick={clicked} direction={"to left"}/>
                    <Button handleClick={clicked} direction={"to top"}/>
                    <Button handleClick={clicked} direction={"to bottom"}/>
                </div>
            </div>
            <div className="gradCopy w-4/5 h-16 flex items-center justify-around">
                <input 
                type="text"
                className='bg-gray-50 border w-4/5 font-medium border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                value={gradient}
                ref={gradRef}
                />
                <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                onClick={copyToClipboard}
                ><BiCopy/></button>
            </div>
        </div>


        <div className='footer w-screen h-20 bg-slate-950 flex items-center justify-center flex-col'>
          <p className='text-slate-50'> Code with ❤️ by 
            <a href='https://github.com/Sandip123samanta' className='text-blue-500 font-medium'> Sandip Samanta</a>
          </p>
          <p>
            <a href='https://github.com/Sandip123samanta/30DaysofReact' className='text-blue-500 font-medium'>#30DaysofReact</a>
          </p>
        </div>
    </div>
  )
}

export default Gradient