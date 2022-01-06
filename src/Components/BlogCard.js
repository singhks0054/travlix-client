import React from 'react'
import style from './BlogCard.module.css'
import { Link } from 'react-router-dom'
export default function BlogCard(props) {
  return (
    <main className={style.main}>
      <span className={style.detail}>{props.detail}</span>
      <img src='https://source.unsplash.com/800x400/?beach' alt="" />
      <div>by ABC Def | Uncatogirized | Comment</div>
      <Link to={`/news/${props._id}`}>Try these new dream destinations</Link>
      <p>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
      <Link to={`/news/${props._id}`}>READ MORE</Link>

    </main>
  )
}
