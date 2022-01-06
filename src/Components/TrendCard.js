import React from 'react'
import { Link } from 'react-router-dom'
import style from './TrendCard.module.css'
export default function TrendCard(props) {
  return (
    <div className={style.card}>
      <img src="./images/x3.webp" alt="" />
      <div className={style.text}>
        <Link to={`/offer/${props._id}`}>{props.title}</Link>
        <p> FROM {props.price}</p>
        <h5>{props.detail}</h5>
      </div>
    </div>
  )
}
