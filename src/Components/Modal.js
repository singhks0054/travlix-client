import React from 'react'
import ReactDOM from 'react-dom';
import style from './Modal.module.css'






const Backdrop = props => {
  return (
    <div className={style.backdrop} onClick={props.error}> </div>
  );
}

const ErrorModal = props => {
  return (
    <section className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p >{props.message}</p>
      </div>
      <footer className={style.actions}>
        <button className={style.btn} onClick={props.error}>Okay</button>
      </footer>
    </section>
  );
}


export default function Modal(props) {
  return (
    <>
      {
        ReactDOM.createPortal(<Backdrop error={props.error} />, document.getElementById('backdrop'))
      }
      {
        ReactDOM.createPortal(<ErrorModal title={props.title} message={props.message} error={props.error} />, document.getElementById('modal'))
      }


    </>
  )
}
