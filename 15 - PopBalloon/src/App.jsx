import { useState } from 'react'
import './App.css'
import Ballon from './components/Ballon'

function App() {
  const [count,setCount] = useState(0)
  
  return (
    <>
      <div className='flex flex-col justify-between items-center w-screen h-screen bg-slate-900'>
        <div className="header bg-slate-950 w-screen h-20 flex justify-center items-center">
          <p className='text-slate-50 text-3xl'>Pop Balloons</p>
        </div>
       
       <div className='main w-2/5 h-3/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center gap-4 text-xl font-bold text-white'>
          <div className='w-full h-2/5 flex justify-around items-center'>
            <Ballon color="red" count={count} setCount={setCount}/>
            <Ballon color="blue" count={count} setCount={setCount}/>
            <Ballon color="green" count={count} setCount={setCount}/>
            <Ballon color="white" count={count} setCount={setCount}/>
            <Ballon color="yellow" count={count} setCount={setCount}/>
          </div>
          <div className='w-full h-2/5 flex justify-around items-center'>
            <Ballon color="yellow" count={count} setCount={setCount}/>
            <Ballon color="green" count={count} setCount={setCount}/>
            <Ballon color="blue" count={count} setCount={setCount}/>
            <Ballon color="white" count={count} setCount={setCount}/>
            <Ballon color="red" count={count} setCount={setCount}/>
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
    </>
  )
}

export default App
