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
        <div className={style.price}><span > ${props.price} </span> Per Night </div>
        <p>The Himalayas, or Himalaya, are a mountain range in Asia separating the plains of the Indian subcontinent from the Tibetan Plateau. The range has some of the planet's highest peaks, Mount Everest.</p>
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
