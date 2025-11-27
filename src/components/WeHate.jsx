import React from 'react'
import wehate from '../assets/wehate.jpg'
import { TiTick } from 'react-icons/ti'
import { MdOutlinePhoneInTalk } from 'react-icons/md'
const WeHate = () => {
    return (
        <section className='bg-[#fcfcfc]'>
            <div className='max-w-6xl mx-auto px-10 py-20 flex gap-10 flex-col-reverse md:flex-row'>
                <div className='flex-1 flex flex-col'>
                    <h2 className='text-zinc-800 text-3xl font-bold'>We Hate Late!</h2>
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
                <div className='flex-1 flex flex-col relative'>
                    {/* pic call box */}
                    <div className='flex justify-center items-center gap-2 bg-white -rotate-12 rounded shadow-lg p-3 md:w-[20vw] absolute  -top-5'>
                    <MdOutlinePhoneInTalk className='text-5xl text-orange-500'/>
                        <div >
                            <p className='text-zinc-500 text-sm font-light capitalize'>call for order</p>
                            <p className='text-zinc-800 text-2xl font-bold'>1(789)00123</p>
                        </div>
                    </div>
                    <img src={wehate} alt="" className='h-[70vh] w-[80vw] rounded-full'/>
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
export default WeHate
