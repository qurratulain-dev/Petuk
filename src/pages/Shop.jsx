import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Heading from '../components/Heading'
import ButtonsFilter from '../components/Shop_component/ButtonsFilter'
import ShopCard from '../components/Shop_component/ShopCard'
import { FoodData } from '../components/Shop_component/FoodData'

const Shop = () => {
  const [active, setActive] = useState('All')
  const items = active === 'All' ? FoodData : FoodData.filter((f) => f.category === active)

  return (
    <div className='bg-[#fcfcfc] pt-[20vh] min-h-screen'>
      <div className=' max-w-6xl mx-auto px-5 flex flex-col items-start'>
        <Heading title={"SHOP"} />
      </div>
      <ButtonsFilter active={active} onChange={setActive} />
      {/* layout animation: cards glide into place when the filter changes */}
      <motion.div layout className='max-w-6xl mx-auto px-5 py-5 grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <ShopCard key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Shop
