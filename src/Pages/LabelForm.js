import React, { useContext, useRef, useState } from 'react'
import axios from 'axios'
import style from './Css/LabelForm.module.css'
import AuthContext from '../Store/AuthContext'
import Modal from '../Components/Modal'
import { Link } from 'react-router-dom'
export default function LabelForm(props) {

  const authctx = useContext(AuthContext)
  const [message, setmessage] = useState('')
  const [error, setError] = useState(false)
  const dest = useRef(null)
  const from = useRef(null)
  const to = useRef(null)
  const adult = useRef(null)
  const child = useRef(null)
  const submitHandler = async (e) => {
    e.preventDefault()
    if (!authctx.token) {
      setError(true)
      setmessage('Please Authenticate first !')
      return
    }
    const { data } = await axios.post('https://fierce-hollows-14162.herokuapp.com/booking', {
      from: from.current.value,
      to: to.current.value,
      destination: dest.current.value,
      adult: adult.current.value,
      child: child.current.value
    }, {
      headers: {
        'Authorization': `Bearer ${authctx.token}`
      }
    })
    setError(true)
    setmessage(data)
  }
  return (
    <main className={style.main}>
      <span onClick={() => {
        setError(false)
      }}>
        {error && <Modal title={'Booking Status'} message={message} />}</span>
      {props.navbar && <div className={style.navbar} >
        <Link to='/offer/hotel' > <img src="./images/bag.webp" alt="img" /> HOTELS</Link>
        <Link to='/offer/car' > <img src="./images/bus.webp" alt="img" /> CAR RENTALS</Link>
        <Link to='/offer/flight' > <img src="./images/flight.webp" alt="img" /> FLIGHTS</Link>
        <Link to='/offer/trips' > <img src="./images/trips.webp" alt="img" /> TRIPS</Link>
        <Link to='/offer/cruises' > <img src="./images/cru.webp" alt="img" /> CRUISES</Link>
        <Link to='/offer/activities' > <img src="./images/activity.webp" alt="img" /> ACTIVITIES</Link>
      </div>}
      <form className={style.form} onSubmit={submitHandler} >
        <div>Destination
          <input type="text" name='destination' ref={dest} /></div>
        <div>Check In
          <input type="date" name="in" id="" ref={from} /></div>
        <div>Check Out
          <input type="date" name="out" id="" ref={to} /></div>
        <div>Adult
          <select name="adult" id="adult" ref={adult}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4 or MORE</option>
          </select></div>
        <div>Child
          <select name="child" id="child" ref={child}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3 or MORE</option>
          </select></div>
        <button className={style.btn} >Book Now</button>
      </form>
    </main>
  )
}
