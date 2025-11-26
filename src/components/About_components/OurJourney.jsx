import React from 'react'
import { TiTick } from 'react-icons/ti'
import journey from '../../assets/journey.png'

const OurJourney = () => {
    return (
        <section>
            <div className='max-w-6xl mx-auto px-5 py-20 flex gap-10 justify-center items-center'>
            <div className='flex-1 flex flex-col'>
                    <img src={journey} alt="" className='h-[70vh] w-[70vw]  rounded-full' />
                </div>
                <div className='flex-1 flex flex-col'>
                    <h2 className='text-zinc-800 text-4xl font-bold tracking-tight'>Our Journey</h2>
                    <p className='text-sm text-zinc-500 my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis eveniet consectetur earum, rem voluptatem.</p>
                    <p className='text-[12px] text-zinc-500 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium fugiat sapiente cupiditate qui, alias dolor? Adipisci unde voluptatem excepturi tempora?</p>
                    <div className='flex flex-col my-5'>
                        {
                            wehateArray.map((item) => (
                                <div key={item.id}
                                    className='flex gap-3 items-center'>
                                    <div className='text-sm text-white bg-green-500 rounded-full'>{item.icon}</div>
                                    <p className='text-[12px] text-zinc-500 my-2'>{item.para}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>
        </section>
    )
}
const wehateArray = [
    {
        id: 1,
        icon: <TiTick />,
        para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
        id: 2,
        icon: <TiTick />,
        para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.amet consectetur adipisicing elit. "
    },
    {
        id: 3,
        icon: <TiTick />,
        para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing "
    },
    {
        id: 4,
        icon: <TiTick />,
        para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
    },
]
export default OurJourney
