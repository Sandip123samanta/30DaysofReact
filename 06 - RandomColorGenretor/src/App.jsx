import { useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {
  const [bgcolor, setColor] = useState("#1D4ED8")

  const handleClick = () =>{
    const randColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    setColor(randColor)
  }

  return (
    <>
      <div className="container flex flex-col items-center justify-between bg-gray-900 w-screen h-screen">
        <div className="header bg-slate-950 w-screen h-20 flex justify-center items-center">
          <p className='text-slate-50 text-3xl'>Color Generator</p>
        </div>

        <div className="ColorContainer w-1/5 h-3/5 rounded-lg overflow-hidden">
            <Button bgColor={bgcolor}/>
            <div class="w-full h-2/5 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                
                <div class="p-5 w-full h-full flex flex-col items-center text-center justify-around">
                    <p>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Click on the Code to copy</h5>
                    </p>
                    
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={handleClick}
                    >Click to Generate</button>
                </div>
            </div>
          
        </div>


        <div className='footer w-screen h-20 bg-slate-950 flex items-center justify-center flex-col'>
          <p className='text-slate-50'> Code with ❤️ by 
            <a href='https://github.com/Sandip123samanta' className='text-blue-500 font-medium'>Sandip Samanta</a>
          </p>
          <p>
            <a href='https://github.com/Sandip123samanta/30DaysofReact' className='text-blue-500 font-medium'>#30DaysofReact</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default App
