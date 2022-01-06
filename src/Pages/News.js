import React from 'react'
import BlogCard from '../Components/BlogCard'
import style from './Css/News.module.css'
import TrendCard from '../Components/TrendCard'
import { Link } from 'react-router-dom'
export default function News() {
  return (
    <section className={style.news}>
      <section className={style.main}>
        <h1>THE BLOG</h1>
      </section>
      <section className={style.blog}>
        <div>
          <BlogCard detail={'01 , DEC 2017'} />
          <BlogCard detail={'01 , DEC 2017'} />
          <BlogCard detail={'01 , DEC 2017'} />
        </div>
        <aside>
          <div className={style.archi}>
            <h2>Archives</h2>
            <Link to='/news/abc'>MAY 2019</Link>
            <Link to='/news/abc'>JUNE 2019</Link>
            <Link to='/news/abc'>JULY 2019</Link>
          </div>
          <div className={style.archi}>
            <h2>Categories</h2>
            <Link to='/news/abc'>Travel</Link>
            <Link to='/news/abc'>Exotic Destinations</Link>
            <Link to='/news/abc'>City Breaks</Link>
            <Link to='/news/abc'>Lifestyle  Travel</Link>
            <Link to='/news/abc'>Uncategorized</Link>
          </div>
          <div className={style.archi}>
            <h2>Latest Post</h2>
            <TrendCard detail={'TREND '} />
            <TrendCard detail={'TREND '} />
            <TrendCard detail={'TREND '} />
          </div>
        </aside>
      </section>
    </section>
  )
}
