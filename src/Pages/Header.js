import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT US</Link>
        <Link to='/news'>NEWS</Link>
        <Link to='/offer'>OFFERS</Link>
        <Link to='/contact'>CONTACT</Link>
        <Link to='/user'>{isLogin ? 'USER' : 'LOG IN'}</Link>
      </nav>
      {
        openNav && <nav className={`${style.navlink} ${style.ismobile}`}>
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT US</Link>
          <Link to='/news'>NEWS</Link>
          <Link to='/offer'>OFFERS</Link>
          <Link to='/contact'>CONTACT</Link>
          <Link to='/user'>{isLogin ? 'USER' : 'LOG IN'}</Link>
        </nav>
      }
      <div>
        <i className={`${style.open} ${openNav ? 'far fa-window-close' : 'fas fa-bars menubar'}`} onClick={Handler}></i>
      </div>
    </header >
  )
}
