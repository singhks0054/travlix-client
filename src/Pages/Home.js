import React from 'react'
import classes from './Css/Home.module.css'
import Button from '../Components/Button'
export default function Home() {
  return (
    <main className={classes.main}>
      <section className={classes.maintext}>
        <div className={classes.bold}>DISCOVER</div>
        <div className={classes.italic}>the world</div>
        <Button to={'offer'} title={'EXPLORE NOW'} >EXPLORE NOW</Button>
      </section>
    </main>
  )
}