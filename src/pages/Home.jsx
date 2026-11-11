import Hero from '../components/Hero'
import Marquee from '../components/sections/Marquee'
import Stats from '../components/sections/Stats'
import Testimonials from '../components/sections/Testimonials'
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
      <Marquee />
      <SelectedShops />
      <Stats />
      <Reveal>
        <WeeklyPizzaCards />
      </Reveal>
      <FreshPizza />
      <FastestDelivery />
      <BestCheese />
      <Reveal>
        <WeHate />
      </Reveal>
      <Testimonials />
      <Reveal>
        <LatestNews />
      </Reveal>
      <Reveal>
        <JoinPartner />
      </Reveal>
      <Reveal>
        <Subscribe />
      </Reveal>
    </>
  )
}

export default Home
