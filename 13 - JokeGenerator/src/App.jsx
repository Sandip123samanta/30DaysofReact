import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState("")
  async function genJoke(){
    let res = await fetch('https://api.chucknorris.io/jokes/random')
    let data=await res.json();
    console.log(data)
    setJoke(data.value)
  }

  useEffect(()=>{
    genJoke()
  },[])

  return (
    <>
      <div className='flex flex-col justify-between items-center w-screen h-screen bg-slate-900'>
        <div className="header bg-slate-950 w-screen h-20 flex justify-center items-center">
          <p className='text-slate-50 text-3xl'>Jokes Generator</p>
        </div>
        <div className='w-2/5 h-3/5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center gap-6'>
          <h1 className='text-white font-bold text-2xl'>😂 It's Very Funny😂</h1>
          <div className='w-full h-3/5 p-3 flex items-center justify-center text-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <p className='text-white font-medium text-xl'>{joke}</p>
          </div>
          <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          onClick={genJoke}
          >Next Joke</button>
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
