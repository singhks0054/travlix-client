import React from 'react'
import OfferCard from '../Components/OfferCard'
import style from './Css/Offers.module.css'
export default function Offers() {
  return (
    <main className={style.offer}>
      <h2>THE BEST OFFERS WITH ROOMS</h2>
      <section className={style.offercon}>
        <OfferCard _id={'abc01'} price={399} title={'HIMALAYAS'} />
        <OfferCard _id={'abc02'} price={549} title={'HIMALAYAS'} />
        <OfferCard _id={'abc03'} price={879} title={'HIMALAYAS'} />
        <OfferCard _id={'abc04'} price={249} title={'HIMALAYAS'} />
      </section>
    </main>
  )
}
