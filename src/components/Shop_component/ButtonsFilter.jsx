import React, { useState } from 'react'

const ButtonsFilter = () => {
    const [activetab, setActivetab]= useState('All')

  return (
    <div>
        <div className='max-w-6xl mx-auto px-5 py-5'>
                <div className='flex gap-5 flex-wrap justify-center items-center lg:justify-normal'>
                    {
                        tabButton.map((tab) => (
                            <button key={tab.id}
                            onClick={()=>{setActivetab(tab.tabName)

                            }}
                                className={`px-3 py-2 rounded-lg font-semibold transition duration-300 text-black
                                    ${activetab===tab.tabName
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-zinc-200  '
                                    }`}>
                                {tab.tabName}
                            </button>
                        ))
                    }
                </div>
            </div>
      
    </div>
  )
}
const tabButton = [
    {
        id: 1,
        tabName: "All"
    },
    {
        id: 2,
        tabName: "Lunch"
    },
    {
        id: 3,
        tabName: "Breakfast"
    },
    {
        id: 4,
        tabName: "Dinner"
    },
    {
        id: 5,
        tabName: "Soup"
    },
]
export default ButtonsFilter
