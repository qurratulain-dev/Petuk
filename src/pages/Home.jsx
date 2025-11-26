import React from 'react'
import Hero from '../components/Hero'
import SelectedShops from '../components/SelectedShops'
import WeeklyPizzaCards from '../components/WeeklyPizza/WeeklyPizzaCards'
import FreshPizza from '../components/FreshPizza/FreshPizza'
import FastestDelivery from '../components/FastestDeliver/FastestDelivery'
import BestCheese from '../components/BestCheese'
import WeHate from '../components/WeHate'
import LatestNews from '../components/LatestNews/LatestNews'
import JoinPartner from '../components/JoinPartner'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <>
    <Hero />
    <SelectedShops />
    <WeeklyPizzaCards />
    <FreshPizza />
    <FastestDelivery />
    <BestCheese />
    <WeHate />
    <LatestNews />
    <JoinPartner />
    <Subscribe />
  </>
  )
}

export default Home
