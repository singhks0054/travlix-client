import React, { useState } from 'react'
import style from './Css/About.module.css'
import Button from '../Components/Button'
import Prac from '../Components/Prac'
import Modal from '../Components/Modal'
export default function About() {

  const [error, setError] = useState(true)
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
          <h1>WE HAVE THE BEST TOURS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum quam placerat non. Etiam venenatis nibh augue, sed eleifend justo tristique eu</p>
          <span className={style.btn}><Button to={'/offer'}>EXPLORE NOW</Button></span>
        </div>
      </section>
      <section className={style.sec3}>
        <h1>YEAR STATSICS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi libero, magnam omnis, id voluptates esse delectus necessitatibus voluptate incidunt, temporibus consequuntur ducimus. Eveniet, illum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi libero, magnam omnis, id voluptates esse delectus necessitatibus voluptate incidunt, temporibus consequuntur ducimus. Eveniet, illum.</p>
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
          <Prac till={255} title={'CLIENTS'} />
          <Prac till={1176} title={'CLIENTS'} />
          <Prac till={39} title={'CLIENTS'} />
          <Prac till={127} title={'CLIENTS'} />
        </div>
      </div>
    </main>
  )
}
