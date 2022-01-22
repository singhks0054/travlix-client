import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './Css/Offer.module.css'
import LabelForm from './LabelForm'
import OfferCard from '../Components/OfferCard'
export default function Offer() {

  const [offer, setOffer] = useState([])

  useEffect(() => {
    fetchData()

    async function fetchData() {
      const { data } = await axios.get('https://fierce-hollows-14162.herokuapp.com/offer')
      setOffer(data)
    }


  }, [])

  return (
    <main className={style.about}>
      <section className={style.main}>
        <h1>OUR OFFERS</h1>
      </section>
      <LabelForm navbar={false} />

      <div className={style.offercontainer} >
        <h2>OUR LATEST OFFERS</h2>
        <section className={style.offers} >
          {
            offer.map((offer) =>
              <OfferCard key={offer._id} _id={offer._id} price={offer.price} title={offer.title} description={offer.description} from={offer.from} to={offer.to} rating={offer.rating} />
            )
          }
        </section>
      </div>
    </main>
  )
}
