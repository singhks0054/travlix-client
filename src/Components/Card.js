import React from 'react'
import style from './Card.module.css'
import Button from '../Components/Button'

export function CardText(props) {
  return (
    <section className={style.section_} style={{ background: 'rgb(167 183 196 / 56%)', borderRadius: '10px' }} >
      <h2>{props.title}</h2>
      <div>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <div className={style.desc}>{props.desc}</div>
      <div className={style.textbtn}><Button to={`/offer/${props._id}`}>BOOK NOW</Button> </div>
    </section >
  )
}

export default function Card(props) {
  return (
    <section className={style.section} style={{ background: `url(https://source.unsplash.com/768x400/?${props.img}`, backgroundSize: 'cover' }}>
      <span className={style.date}>{props.date}</span>
      <h3>{props.title}</h3>
      <div>{props.price}</div>
      <div>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <span className={style.btn}>
        <Button to={`/offer/${props._id}`}>SEE MORE</Button></span>
    </section>
  )
}
