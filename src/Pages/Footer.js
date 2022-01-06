import React from 'react'
import { Link } from 'react-router-dom'
import TrendCard from '../Components/TrendCard'
import style from './Css/Footer.module.css'
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <Link to='/' className={style.logo}> <img src="./images/logo.webp" alt="" /> <span>TRAVELIX</span> </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, alias voluptate placeat adipisci at molestias nesciunt quas repellat, atque excepturi earum commodi quia officiis? Inventore!</p>
      </div>
      <div>
        <h2>BLOG POSTS</h2>
        <TrendCard title={'Agra'} detail={'JORDAN'} />
        <TrendCard title={'Agra'} detail={'JORDAN '} />
        <TrendCard title={'Agra'} detail={'JORDAN '} />
      </div>
      <div>
        <h2>TAGS</h2>
        <Link to='/' className={style.link}>AUSTRALIA</Link>
        <Link to='/' className={style.link}>DUBAI</Link>
        <Link to='/' className={style.link}>CANADA</Link>
        <Link to='/' className={style.link}>INDIA</Link>
      </div>
      <div>
        <h2>CONTACT INFO</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quas. Consequatur perferendis in, aliquid deleniti, voluptatum error veniam quod incidunt repellat illum recusandae sint minima.</p>

        <div className={style.icons}>
          <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.snapchat.com"><i className="fab fa-snapchat-ghost"></i></a>
        </div>

      </div>
    </footer>
  )
}
