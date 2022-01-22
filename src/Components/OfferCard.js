import React from 'react'
import { Link } from 'react-router-dom'
import style from './OfferCard.module.css'
export default function OfferCard(props) {
  return (
    <section className={style.offer}>
      <div className={style.img}>
        <img src="./images/nature.jpg" alt="" />
        <span className={style.title}>{props.title}</span>
      </div>
      <div className={style.textcon}>
        <div className={style.price}><span >{props.price} </span> Per Couple </div>
        <p>{props.description}</p>
        <div className={style.icon}>
          <img src="./images/boaat.webp" alt="" />
          <img src="./images/cycyle.webp" alt="" />
          <img src="./images/post.webp" alt="" />
          <img src="./images/compass.webp" alt="" />
        </div>
        <Link to={`/news/${props._id}`}>READ MORE</Link>
      </div>
    </section>
  )
}
