import { useState, useRef,useCallback } from 'react'
import './App.css'
import { SketchPicker } from 'react-color'

function App() {
  const [color, setColor] = useState('#030710')

  const appStyle = {
    background: color,
  }

  const handleOnChange = (color)=>{
    setColor(color.hex);
  }

  const passref = useRef(null)

  const copyToClipboard = useCallback(()=>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,51)
    window.navigator.clipboard.writeText(color)
  },[color])

  return (
    <>
      <div style={appStyle} className={`w-screen h-screen flex items-center flex-col justify-between`}>
      <div className="Header bg-slate-950 w-screen h-20 flex justify-center items-center">
        <p className='text-slate-50 text-3xl'>Color Picker</p>
      </div>

          <SketchPicker 
          color={color}
          onChangeComplete={handleOnChange}
          />
           <div className="pickColor flex items-center justify-between w-2/5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <label htmlFor="" className='text-white text-xl'>Pick your color here</label>
           <input 
           type="text"
           className='block w-2/5 p-3 pl-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
           value={color}
           ref={passref}
          />
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={copyToClipboard}
          >Copy</button>
           </div>
          
           <div className='footer w-screen h-20 bg-slate-950 flex items-center justify-center flex-col'>
      <p className='text-slate-50'> Code with ❤️ by <a href='https://github.com/Sandip123samanta' className='text-blue-500 font-medium'>Sandip Samanta</a></p>
        <p><a href='https://github.com/Sandip123samanta/30DaysofReact' className='text-blue-500 font-medium'>#30DaysofReact</a></p>
      </div>
      </div>
    </>
  )
}

export default App
