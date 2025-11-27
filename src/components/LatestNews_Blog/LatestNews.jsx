import React, {useState} from 'react'
import Heading from '../Heading'
import client from '../../assets/client.webp'
import nature from '../../assets/nature.jpg'
import { FiLoader } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { BlogData } from './BlogData.js';


const LatestNews = () => {
const [showAll,setShowAll]=useState(false)
const displayedNews=showAll?BlogData:BlogData.slice(0,4);

    return (
        <section className='bg-[#f9f9f9] '>
            <div className='max-w-6xl mx-auto px-5 py-10 flex flex-col justify-center items-center'>
                <Heading title={"Latest News"} />
                <div className='flex justify-center items-center gap-5 mt-10 text-white  flex-wrap'>
                    {
                        displayedNews.map((item) => (
                            <div className='w-[250px] h-[300px] relative mb-20'>
                                <div >
                                    <img src={nature} alt="" className='rounded-xl object-cover' />
                                </div>
                                <div className='absolute bottom-0'>
                                    <div key={item.id} className='p-3'>
                                        <div className='flex gap-2'>
                                            <img src={client} alt="client" className='h-5 w-5 rounded-full z-10 bg-orange-500' />
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
                <Link to="/blog">
                    <button onClick={()=>setShowAll(true)}
                    className='text-sm text-white bg-orange-500 px-4 py-2 rounded-full font-semibold flex justify-center items-center gap-2 '><FiLoader /> Load more posts</button>
                </Link>

            </div>
        </section>
    )
}

export default LatestNews
