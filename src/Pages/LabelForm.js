import React from 'react'
import Button from '../Components/Button'
import style from './Css/LabelForm.module.css'
import { Link } from 'react-router-dom'
export default function LabelForm() {
  return (
    <main className={style.main}>
      <div className={style.navbar} >
        <Link to='/offer/hotel' > <img src="./images/bag.webp" alt="img" /> HOTELS</Link>
        <Link to='/offer/car' > <img src="./images/bus.webp" alt="img" /> CAR RENTALS</Link>
        <Link to='/offer/flight' > <img src="./images/flight.webp" alt="img" /> FLIGHTS</Link>
        <Link to='/offer/trips' > <img src="./images/trips.webp" alt="img" /> TRIPS</Link>
        <Link to='/offer/cruises' > <img src="./images/cru.webp" alt="img" /> CRUISES</Link>
        <Link to='/offer/activities' > <img src="./images/activity.webp" alt="img" /> ACTIVITIES</Link>
      </div>
      <form className={style.form}>
        <div>Destination
          <input type="text" name='destination' /></div>
        <div>Check In
          <input type="date" name="in" id="" /></div>
        <div>Check Out
          <input type="date" name="out" id="" /></div>
        <div>Adult
          <select name="adult" id="adult">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4 or MORE</option>
          </select></div>
        <div>Child
          <select name="child" id="child">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3 or MORE</option>
          </select></div>
        <Button to={'/offer'} >SEARCH</Button>
      </form>
    </main>
  )
}
