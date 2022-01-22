import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../Store/AuthContext'
import style from './Css/User.module.css'
import BookCard from '../Components/BookCard'
export default function User() {
  const authctx = useContext(AuthContext)
  const [userInfo, setUserInfo] = useState([])
  const [booking, setBooking] = useState([])
  useEffect(() => {
    fetchData()
    async function fetchData() {
      try {
        const { data } = await axios.get('https://fierce-hollows-14162.herokuapp.com/user/me', {
          headers: {
            'Authorization': `Bearer ${authctx.token}`
          }
        })
        setUserInfo([data.name, data.email, data.address, data.number])
      } catch (error) {
        authctx.logout()
        throw new Error('token expired')
      }
    }
    fetchbData()
    async function fetchbData() {
      try {
        const { data } = await axios.get('https://fierce-hollows-14162.herokuapp.com/booking', {
          headers: {
            'Authorization': `Bearer ${authctx.token}`
          }
        })
        setBooking(data)
      } catch (error) {
        authctx.logout()
        throw new Error('No Booking Found')
      }
    }
  }, [authctx])

  const logoutHandler = async (e) => {
    try {
      const data = await axios.post('https://fierce-hollows-14162.herokuapp.com/user/logout', {
        headers: {
          'Authorization': `Bearer ${authctx.token}`
        }
      })
      console.log(data)
    } catch (error) {
      localStorage.removeItem('token')
      authctx.logout()
      throw new Error('token expired')
    }
  }
  const logoutHandlerAll = async (e) => {
    try {
      e.preventDefault()
      const data = await axios.post('https://fierce-hollows-14162.herokuapp.com/user/logoutall', {
        headers: {
          'Authorization': `Bearer ${authctx.token}`
        }
      })
      console.log(data)
    } catch (error) {
      authctx.logout()
      localStorage.removeItem('token')
      throw new Error('token expired')
    }
  }
  const bookingtHandler = (e) => {
    e.preventDefault();
    fetchData()
    async function fetchData() {
      try {
        const { data } = await axios.get('https://fierce-hollows-14162.herokuapp.com/booking', {
          headers: {
            'Authorization': `Bearer ${authctx.token}`
          }
        })
        setBooking(data)
      } catch (error) {
        authctx.logout()
        throw new Error('No Booking Found')
      }
    }
  }

  return (
    <main className={style.main}>


      <div className={style.profile}> <img src="./images/logo.webp" alt="" /></div>
      <div className={style.link}>
        <span>{userInfo.userName}</span>
        <span>{userInfo.userEmail}</span>
      </div>
      <section className={style.user}>
        <div>NAME : {userInfo[0]}</div>
        <div>EMAIL : {userInfo[1]}</div>
        <div>ADDRESS : {userInfo[2]}</div>
        <div>NUMBER : {userInfo[3]}</div>
        <button onClick={logoutHandler} className={style.btn} >Logout</button>
        <button onClick={logoutHandlerAll} className={style.btn} >Logout All</button>
      </section>

      <section className={style.booking}>
        <div className={style.link}>
          <span>Your Bookings</span>
        </div>

        <button onClick={bookingtHandler} className={style.btn} >Get Bookings</button>

        <table className={style.table}>
          <thead className={style.head}>
            <tr>
              <th>Destination</th>
              <th>From</th>
              <th>To</th>
              <th>Adult</th>
              <th>Child</th>
              <th>Completed</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((book) => <BookCard key={book._id} id={book._id} destination={book.destination} from={book.from} to={book.to} adult={book.adult} child={book.child} completed={book.completed} />)}
          </tbody>
        </table>


      </section>

    </main>
  )
}
