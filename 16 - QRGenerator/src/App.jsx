import { useState } from 'react'
import QRCode from "react-qr-code";
import * as htmlToImage from 'html-to-image';
import './App.css'

function App() {
  const [url, setUrl] = useState("https://thecurate.netlify.app")
  const [bgColor, setBgColor] = useState("#fff")
  const [fgColor, setFgColor] = useState("#000")


  const handleDownloadQRCode = () => {
    const qrCodeElement = document.getElementById('qr-code');
    htmlToImage.toPng(qrCodeElement)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'qr-code.png';
        link.click();
      });
  };

  return (
    <>
      <div className='flex flex-col justify-between items-center w-screen h-screen bg-slate-900'>
        <div className="header bg-slate-950 w-screen h-20 flex justify-center items-center">
          <p className='text-slate-50 text-3xl'>QR Generator</p>
        </div>
   
       <div className='w-1/5 h-6/7 flex flex-col items-center justify-between p-6 gap-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
       <div>
         <QRCode 
          id='qr-code'
          value={url}
          bgColor={bgColor}
          fgColor={fgColor}
          level='M'
          size={200}
          />
         </div>
         <div className='h-full flex flex-col items-center justify-center gap-6 w-full'>
            <div>
              <label className='text-white text-xl mb-3'>Enter the Url</label>
              <input 
              placeholder='https://thecurate.netlify.app'
              className='w-60 h-10 text-lg pl-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              type="text" 
              value={url}
              onChange={e => setUrl(e.target.value)}
              />
            </div>
            <div>
              <label className='text-white text-xl mb-3'>Set the background Color</label>
              <input 
              type="color" 
              className='w-60'
              value={bgColor}
              onChange={e => setBgColor(e.target.value)}
              />
            </div>
            <div>
              <label className='text-white text-xl mb-3'>Set the foreground Color</label>
              <input 
              type="color" 
              className='w-60'
              value={fgColor}
              onChange={e => setFgColor(e.target.value)}
              />
            </div>
            <button
            onClick={handleDownloadQRCode}
            className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
            >Download</button>
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
