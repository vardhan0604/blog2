import React from 'react'
import "./Nav.css"
const Nav = () => {
  return (
    <div className='Nav'>
        <div className='Nav-logo'>LOGO</div>
        <div className='Nav-in'><input type="text" placeholder='search fav artlices/events/news'/></div>
        <div className='Nav-btn'>
            <span>Creat acoount</span>
            <a href="">It's free!</a>
        </div>
    </div>
  )
}

export default Nav