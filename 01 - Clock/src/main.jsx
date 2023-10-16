import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Digital from './components/Digital/Digital.jsx'
import Analog from './components/Analog/Analog.jsx'
import Timer from './components/Timer/Timer.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Digital/>}></Route>
      <Route path='/analog' element={<Analog/>}></Route>
      <Route path='/timer' element={<Timer/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
