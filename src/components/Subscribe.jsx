import React from 'react'
import hero from '../assets/hero.webp'


const Subscribe = () => {
    return (
        <section className='bg-[#fcfcfc] py-20 md:px-20 px-5'>
            <div className='max-w-6xl mx-auto px-10 py-5 rounded-lg bg-amber-50 border-dashed  border-4 border-orange-500/50
            flex items-center gap-8'>
                <div className='basis-[40%] md:flex hidden'>
                    <img src={hero} alt="pizza pic" />
                </div>
                <div className='md:basis-[60%] flex flex-col justify-center  p-5 md:p-0'>
                    <h2 className='text-3xl text-zinc-800 font-bold'>Subscribe For Pizza offer</h2>
                    <p className='text-sm text-zinc-500 my-5'>Lorem ipsum dolor sit amet perspiciatis, facere nisi cupiditate iste laudantium? Repellat, modi minus. Incidunt.</p>
                    <form className='flex relative md:w-[30vw]'>
                        <input type="text" placeholder='Enter you Email' autoComplete='off'
                        className='pl-5 py-2 text-sm text-zinc-500 border border-zinc-500 rounded-full focus:outline-none flex-1'/>
                        <button className='text-white bg-orange-500 px-4 py-2 rounded-full text-sm absolute right-0 top-px'>Subscribe</button>
                    </form>
                    <p className='text-zinc-500 text-[10px] mt-5'>Exclusive offer every week!</p>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
