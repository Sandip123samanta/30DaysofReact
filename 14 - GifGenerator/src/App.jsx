import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [gifurl, setGifUrl] = useState("")
  const [title,setTitle]=useState("")
  const apikey = 'e6s7VF6AiIJERV2U6jqhOwtMQJkj2E5T'
  let url = `https://api.giphy.com/v1/gifs/random?api_key=e6s7VF6AiIJERV2U6jqhOwtMQJkj2E5T&tag=laugh`

  async function loadGif(){
    let gif = await fetch(url);
    let data = await gif.json();
    let randUrl = data.data.images.original.url;
    setGifUrl(randUrl)
    setTitle(data.data.title)
  }

  function downloadFile(){
    fetch(gifurl).then(res=>res.blob()).then(file=>{
      let tempUrl = URL.createObjectURL(file)
      let aTag = document.createElement('a')
      aTag.href = tempUrl
      aTag.download="my-image.jpg"
      document.body.appendChild(aTag)
      aTag.click()
      aTag.remove()
    })
  }

  useEffect(()=>{
    loadGif()
  },[])

  return (
    <>
      <div className='flex flex-col justify-between items-center w-screen h-screen bg-slate-900'>
        <div className="header bg-slate-950 w-screen h-20 flex justify-center items-center">
          <p className='text-slate-50 text-3xl'>Gifs Generator</p>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className='imageContainer relative'>
            <img className="image rounded-t-lg" src={gifurl} alt="" />
            <button
            className='download absolute top-0 left-3 text-white font-xl'
            onClick={downloadFile}
            >download</button>
          </div>
          <div className="p-5">
            <a href={gifurl}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
             <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             onClick={loadGif}
             >
                Read more
              </button>
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
