import React from 'react'
import Heading from '../Heading'
import client from '../../assets/client.webp'
import nature from '../../assets/nature.jpg'
import { FiLoader } from 'react-icons/fi'


const LatestNews = () => {
    return (
        <section className='bg-amber-50 '>
            <div className='max-w-6xl mx-auto px-5 py-10 flex flex-col justify-center items-center'>
                <Heading title={"Latest News"} />
                <div className='flex justify-center items-center gap-5 mt-10 text-white  flex-wrap'>
                    {
                        newsCardArray.map((item) => (
                            <div className='w-[250px] h-[300px] relative mb-20'>
                                <div >
                                    <img src={nature} alt="" className='rounded-xl object-cover'/>
                                </div>
                                <div className='absolute bottom-0'>
                                    <div key={item.id} className='p-3'>
                                        <div className='flex gap-2'>
                                            <img src={item.client} alt="client" className='h-5 w-5 rounded-full z-10 bg-orange-500' />
                                            <h2 className='text-[12px]'>{item.name}</h2>
                                        </div>
                                        <p className='text-sm my-2 font-semibold'>{item.para}</p>
                                        <button className='text-sm border border-white rounded-full px-2 py-1 '>{item.button}</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className='text-sm text-white bg-orange-500 px-4 py-2 rounded-full font-semibold flex justify-center items-center gap-2 '><FiLoader /> Load more posts</button>

            </div>
        </section>
    )
}

const newsCardArray = [
    {
        id: 1,
        image: client,
        name: "Cody Fisher",
        para: "15 things you need to know about pizza today",
        button: "interior"
    },
    {
        id: 2,
        image: client,
        name: "Cody Fisher",
        para: "15 things you need to know about pizza today",
        button: "interior"
    },
    {
        id: 3,
        image: client,
        name: "Cody Fisher",
        para: "15 things you need to know about pizza today",
        button: "interior"
    },
    {
        id: 4,
        image: client,
        name: "Cody Fisher",
        para: "15 things you need to know about pizza today",
        button: "interior"
    },
]
export default LatestNews
