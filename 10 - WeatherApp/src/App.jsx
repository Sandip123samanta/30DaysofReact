import { useState } from 'react'
import './App.css'
import Weather from './components/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container w-screen h-screen flex flex-col items-center justify-between bg-slate-900">
        <div className="header bg-slate-950 w-screen h-20 flex justify-center items-center">
          <p className='text-slate-50 text-3xl'>Weather App</p>
        </div>
        <Weather />
        <div className='footer w-screen h-20 bg-slate-950 flex items-center justify-center flex-col'>
          <p className='text-slate-50'> Code with ❤️ by 
            <a href='https://github.com/Sandip123samanta' className='text-blue-500 font-medium'> Sandip Samanta</a>
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
