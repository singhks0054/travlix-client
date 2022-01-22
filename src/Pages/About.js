import React, { useState, useEffect } from 'react'
import style from './Css/About.module.css'
import Button from '../Components/Button'
import Prac from '../Components/Prac'
import Modal from '../Components/Modal'
import axios from 'axios'
export default function About() {

  const [error, setError] = useState(false)
  const [heading, setHeading] = useState(null)
  const [desc, setDesc] = useState(null)
  const [num, setnum] = useState([])

  useEffect(() => {
    fetchData()
    async function fetchData() {
      const { data } = await axios.get('https://fierce-hollows-14162.herokuapp.com/about')
      setHeading(data[0].heading)
      setDesc(data[0].description)
      setnum([data[0].client, data[0].project, data[0].countries, data[0].coffees])
    }
  }, [])
  const errorHandler = (e) => {
    e.preventDefault();
    setError(null);
  }
  return (
    <main className={style.about}>
      <section className={style.main}>
        <h1>ABOUT US</h1>
      </section>
      {error && <Modal error={errorHandler} title={'An Error Occurred !'} message={'Something went wrong .'} />}
      <section className={style.sec2}>
        <img src="./images/greentree.webp" alt="" />
        <div>
          <h1>{heading}</h1>
          <p>{desc}</p>
          <span className={style.btn}><Button to={'/offer'}>EXPLORE NOW</Button></span>
        </div>
      </section>
      <section className={style.sec3}>
        <h1>YEAR STATSICS</h1>
        <p>The United Nations World Tourism Organization (UNWTO) estimates that internationally there were just 25 million tourist arrivals in 1950. 68 years later this number has increased to 1.4 billion international arrivals per year. This is a 56-fold increase.</p>
      </section>
      <section className={style.tile}>
        <h1>THAILAND</h1>
        <h2>FROM $ 999</h2>
        <div>
          <Button to={'/offer'} >EXPLORE NOW</Button>
        </div>
      </section>
      <div>
        <div className={style.counter}>
          <Prac till={num[0]} title={'CLIENTS'} />
          <Prac till={num[1]} title={'PROJECTS'} />
          <Prac till={num[2]} title={'COUNTRIES'} />
          <Prac till={num[3]} title={'COFFEES'} />
        </div>
      </div>
    </main>
  )
}
