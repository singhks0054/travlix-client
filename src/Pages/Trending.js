import React from 'react'
import style from './Css/Trending.module.css'
import TrendCard from '../Components/TrendCard'

export default function Trending() {
  return (
    <div className={style.trending}>
      <h1>TRENDING NOW</h1>
      <div className={style.trend}>
        <TrendCard _id={'1ab01'} title={'AGRA'} detail={'JORDAN , NEWS'} price={3000} />
        <TrendCard _id={'1ab02'} title={'AGRA'} detail={'JORDAN , NEWS'} price={3000} />
        <TrendCard _id={'1ab03'} title={'AGRA'} detail={'JORDAN , NEWS'} price={3000} />
        <TrendCard _id={'1ab04'} title={'AGRA'} detail={'JORDAN , NEWS'} price={3000} />
        <TrendCard _id={'1ab05'} title={'AGRA'} detail={'JORDAN , NEWS'} price={3000} />
        <TrendCard _id={'1ab06'} title={'AGRA'} detail={'JORDAN , NEWS'} price={3000} />
        <TrendCard _id={'1ab07'} title={'AGRA'} detail={'JORDAN , NEWS'} price={3000} />
        <TrendCard _id={'1ab08'} title={'AGRA'} detail={'JORDAN , NEWS'} price={3000} />
      </div>
    </div>
  )
}
