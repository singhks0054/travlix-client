import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Css/Header.module.css'
export default function Header(props) {
  const [openNav, setOpenNav] = useState(false)
  // const [closeNav, setCloseNav] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  const Handler = (e) => {
    e.preventDefault();
    setOpenNav(!openNav)
    setIsLogin(!isLogin)
  }

  return (
    <header className={style.navigation}>
      <div>
        <img src="./images/logo.webp" alt="" /> <span className={style.logo}>TRAVLIX</span>
      </div>
      <nav className={`${style.navlink} ${style.mobile}`}>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/about'>ABOUT US</NavLink>
        <NavLink to='/news'>NEWS</NavLink>
        <NavLink to='/offer'>OFFERS</NavLink>
        <NavLink to='/contact'>CONTACT</NavLink>
        <NavLink to='/login'>{isLogin ? 'USER' : 'LOG IN'}</NavLink>
      </nav>
      {
        openNav && <nav className={`${style.navlink} ${style.ismobile}`}>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='/about'>ABOUT US</NavLink>
          <NavLink to='/news'>NEWS</NavLink>
          <NavLink to='/offer'>OFFERS</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
          <NavLink to='/login'>{isLogin ? 'USER' : 'LOG IN'}</NavLink>
        </nav>
      }
      <div>
        <i className={`${style.open} ${openNav ? 'far fa-window-close' : 'fas fa-bars menubar'}`} onClick={Handler}></i>
      </div>
    </header >
  )
}
