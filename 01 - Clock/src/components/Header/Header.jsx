import React from 'react'
import { NavLink,Link } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <>
      <div className='container bg-gray-950'>
        <div className="Logo">
          <Link
          to='/'
          >Clock</Link>
        </div>
        <div className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
             `
             ${isActive? 'text-slate-50' : 'text-slate-400'}
             `
            }
          >
            Digital
          </NavLink>
          <NavLink
            to="/analog"
            className={({ isActive }) =>
             `
             ${isActive? 'text-slate-50' : 'text-slate-400'}
             `
            }
          >
            Analog
          </NavLink>
          <NavLink
            to="/timer"
            className={({ isActive }) =>
             `
             ${isActive? 'text-slate-50' : 'text-slate-400'}
             `
            }
          >
            Timer
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Header