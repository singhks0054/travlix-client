import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OfferCard from '../Components/OfferCard'
import style from './Css/Offers.module.css'
export default function Offers() {
  const [offer, setOffer] = useState([])

  useEffect(() => {
    fetchData()
    async function fetchData() {
      const { data } = await axios.get('https://fierce-hollows-14162.herokuapp.com/offer')
      setOffer(data)
    }
  }, [])


  return (
    <main className={style.offer}>
      <h2>THE BEST OFFERS WITH ROOMS</h2>
      <section className={style.offercon}>
        {
          offer.map((offer) =>
            <OfferCard key={offer._id} _id={offer._id} price={offer.price} title={offer.title} description={offer.description} from={offer.from} to={offer.to} rating={offer.rating} />
          )
        }
      </section>
    </main>
  )
}
