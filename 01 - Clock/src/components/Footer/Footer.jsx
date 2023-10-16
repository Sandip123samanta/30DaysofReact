import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


function Footer() {
  return (
    <>
      <div className="footer bg-gray-950">
        <p className='text-slate-50'> Code with ❤️ by <Link to='https://github.com/Sandip123samanta' className='text-blue-500 font-medium'>Sandip Samanta</Link></p>
        <p><Link to='https://github.com/Sandip123samanta/30DaysofReact' className='text-blue-500 font-medium'>#30DaysofReact</Link></p>
      </div>
    </>
  )
}

export default Footer