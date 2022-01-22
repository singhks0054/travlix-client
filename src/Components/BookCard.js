import React, { useState, useContext } from 'react'
import axios from 'axios'
import Modal from './Modal'
import FModal from './FormModal'
import style from './BookCard.module.css'
import AuthContext from '../Store/AuthContext'
export default function BookCard(props) {
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [edit, setEdit] = useState(false)
  const authctx = useContext(AuthContext)


  const deleteHandler = async () => {
    const { data } = await axios.delete(`https://fierce-hollows-14162.herokuapp.com/booking/${props.id}`, {
      headers: {
        'Authorization': `Bearer ${authctx.token}`
      }
    })
    setError(true)
    setMessage(data)
  }

  const editHandler = () => {
    setEdit(true)
  }
  const cancelUpdate = (e) => {
    e.preventDefault()
    setEdit(false)
  }
  return (
    <>

      <tr className={style.tablerow}>

        <td>{props.destination}</td>
        <td>{props.from}</td>
        <td>{props.to}</td>
        <td>{props.adult}</td>
        <td>{props.child}</td>
        <td>{props.completed ? 'Yes' : 'No'}</td>
        <td> <i className="far fa-window-close" onClick={deleteHandler}></i></td>
        <td> <i className="far fa-edit" onClick={editHandler} ></i></td>
      </tr>
      <tr onClick={() => {
        setError(false)
        window.location.reload()
      }}>
        {error && <Modal title={'Booking Delete Status'} message={message} />}
      </tr>
      <tr >
        {edit && <FModal cancel={cancelUpdate} id={props.id} />}
      </tr >
    </>
  )
}
