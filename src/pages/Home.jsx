import React from 'react'
import Hero from '../components/Hero'
import SelectedShops from '../components/SelectedShops'
import WeeklyPizzaCards from '../components/WeeklyPizza/WeeklyPizzaCards'
import FreshPizza from '../components/FreshPizza/FreshPizza'
import FastestDelivery from '../components/FastestDeliver/FastestDelivery'
import BestCheese from '../components/BestCheese'
import WeHate from '../components/WeHate'
import LatestNews from '../components/LatestNews_Blog/LatestNews'
import JoinPartner from '../components/JoinPartner'
import Subscribe from '../components/Subscribe'
import { Reveal } from '../components/motion/Reveal'

const Home = () => {
  return (
    <>
      <Hero />
      <SelectedShops />
      <Reveal><WeeklyPizzaCards /></Reveal>
      <FreshPizza />
      <FastestDelivery />
      <BestCheese />
      <Reveal><WeHate /></Reveal>
      <Reveal><LatestNews /></Reveal>
      <Reveal><JoinPartner /></Reveal>
      <Reveal><Subscribe /></Reveal>
    </>
  )
}

export default Home
