import React, { useEffect, useRef, useContext, useState } from 'react'
import ReactDOM from 'react-dom';
import style from './Modal.module.css'
import axios from 'axios'
import AuthContext from '../Store/AuthContext';

const Backdrop = props => {
  return (
    <div className={style.backdrop} onClick={props.error}> </div>
  );
}

const FormModal = props => {
  const authctx = useContext(AuthContext)
  const [bookData, setBookData] = useState([])
  const [error, setError] = useState('Update Your Booking')
  const dest = useRef(null)
  const from = useRef(null)
  const to = useRef(null)
  const adult = useRef(null)
  const child = useRef(null)


  useEffect(() => {
    fetchData()
    async function fetchData() {
      const { data } = await axios.get(`https://fierce-hollows-14162.herokuapp.com/booking/${props.id}`, {
        headers: {
          'Authorization': `Bearer ${authctx.token}`
        }
      })
      setBookData([data.destination])
    }
  }, [authctx.token, props.id])

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(dest.current.value, from.current.value, to.current.value, adult.current.value, child.current.value)
    try {
      const { data } = await axios.patch(`https://fierce-hollows-14162.herokuapp.com/booking/${props.id}`, {
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
      console.log(data);
    } catch (error) {
      setError('Invalid update')
    }
  }


  return (
    <section className={style.modal} >
      <header className={style.header}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>{error}</h2>
          <i className="far fa-window-close" style={{ fontSize: '1.5rem', color: 'white' }} onClick={props.cancel}  ></i>
        </div>
        <form onSubmit={submitHandler} className={style.fform}>
          <label name='destination'>Destination
            <input type="text" name='destination' ref={dest} placeholder={`${bookData[0]}`} style={{ textTransform: 'uppercase' }} /></label>
          <label name='in'>Check In
            <input type="date" name="in" id="" ref={from} /></label>
          <label name='out'>Check Out
            <input type="date" name="out" id="" ref={to} /></label>
          <label name='adult'>Adult
            <select name="adult" id="adult" ref={adult}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4 or MORE</option>
            </select></label>
          <label name='child'>Child
            <select name="child" id="child" ref={child} >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3 or MORE</option>
            </select></label>
          <button className={style.btn} >Update</button>
        </form>
      </header>

    </section >
  );
}


export default function FModal(props) {
  return (
    <>
      {
        ReactDOM.createPortal(<Backdrop error={props.error} />, document.getElementById('backdrop'))
      }
      {
        ReactDOM.createPortal(<FormModal cancel={props.cancel} id={props.id} />, document.getElementById('modal'))
      }


    </>
  )
}
