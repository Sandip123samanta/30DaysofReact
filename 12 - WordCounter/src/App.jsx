import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [val,setVal] = useState(0)
  const [word,setWord] = useState(0)
  const [sentance,setSentance] = useState(0)

  function handleChange(e){
    const word=e.target.value.match(/\b[-?\w]+\b/g)
    if(word){
      setWord(word.length);
    }
    else{
      setWord(0)
    }

    if (word) {
      var sentences = e.target.value.split(/[.|!|?]/);
      setSentance(sentences.length - 1);
    } else {
      setSentance(0);
    }

  setVal(e.target.value.length)    
  }

  return (
    <>
      <div className='bg-slate-900 w-screen h-screen flex flex-col items-center justify-between'>
        <div className="header bg-slate-950 w-screen h-20 flex justify-center items-center">
          <p className='text-slate-50 text-3xl'>Word Counter</p>
        </div>
        
        <div className="cardContainer w-1/5 h-3/5 flex flex-col items-center justify-center gap-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div className='w-full h-2/5 p-3'>
              <textarea 
              className='w-full h-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
              placeholder='Enter text ....'
              onChange={handleChange}
              ></textarea>
           </div>
           <div className='w-full h-2/5 flex flex-col gap-2 text-xl font-bold text-white p-6'>
              <h1>Number of Letters: {val}</h1>
              <h1>Number of Words: {word}</h1>
              <h1>Number of Sentance: {sentance}</h1>
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
