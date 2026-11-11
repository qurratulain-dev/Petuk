import React from 'react'
import { motion } from 'framer-motion'

const ButtonsFilter = ({ active, onChange }) => {
  return (
    <div className='max-w-6xl mx-auto px-5 py-5'>
      <div className='flex gap-3 flex-wrap justify-center items-center lg:justify-normal'>
        {tabButton.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`relative px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${active === tab ? 'text-white' : 'text-black bg-zinc-200 hover:bg-zinc-300'}`}
          >
            {/* orange pill slides between the tabs */}
            {active === tab && (
              <motion.span
                layoutId="shop-tab"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className='absolute inset-0 bg-orange-500 rounded-lg'
              />
            )}
            <span className='relative z-10'>{tab}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

const tabButton = ["All", "Breakfast", "Lunch", "Dinner", "Pizza", "Snacks"]

export default ButtonsFilter
