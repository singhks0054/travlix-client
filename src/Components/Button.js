import React from 'react'
import { Link } from 'react-router-dom'
import style from './Button.module.css'
export default function Button(props) {
  return (
    <Link to={`${props.to}`} className={style.btn}>
      {props.children}
    </Link>
  )
}
