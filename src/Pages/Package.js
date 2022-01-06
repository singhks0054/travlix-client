import React from 'react'
import Card from '../Components/Card'
import { CardText } from '../Components/Card'
import style from './Css/Package.module.css'
export default function Package() {
  return (
    <>
      <main className={style.package}>
        <h1>We Have The Best Tours </h1>
        <p>Renowned for their larger than life persona and extravagant lifestyle that included owning the best of luxury cars, majestic palaces and a treasure trove of world’s finest jewels, India’s maharajas lived a life that most people can only dream of. If you’re also fascinated by the king-sized lifestyle of India’s erstwhile royalty, then here is your once-in-a-lifetime opportunity to explore India like a true Indian maharaja.</p>
        <div className={style.cards}>
          <Card _id={'abc01'} date={'May 23rd - June 6th'} img={'australia'} title={'AUSTRALIA'} price={7999} />
          <Card _id={'abc02'} date={'May 23rd - July 3th'} img={'maldives'} title={'MALDIVES'} price={5999} />
          <Card _id={'abc03'} date={'May 23rd - MaY 31st'} img={'dubai'} title={'SINGAPORE'} price={4999} />
        </div>
      </main>
      <div className={style.carddiv}>

        <CardText _id={'abc01'} title={'MALDIVES DELUXE PACKAGE'} desc={"Indian culture is the heritage of social norms, ethical values, traditional customs, belief systems, political systems, artifacts and technologies that originated in or are associated with the ethno-linguistically diverse Indian subcontinent. The term also applies beyond India to countries and cultures whose histories are strongly connected to India by immigration, colonization, or influence, particularly in South Asia and Southeast Asia. India's languages, religions, dance, music, architecture, food and customs differ from place to place within the country. The rich heritage of India, one of the world's oldest civilizations, is an all-embracing confluence of religions, traditions and customs. The highlights of Indian heritage lie in the treasure of its art, architecture, classical dance, music, flora and fauna, and the innate secular philosophy of its people."} />
      </div>
    </>
  )
}
