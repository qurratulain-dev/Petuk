import React from 'react'
import cheese from '../assets/cheese.jpg'

const BestCheese = () => {
    return (
        <section
            className='bg-[#fcfcfc] bg-fixed'
            style={{ backgroundImage: `url(${cheese})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='px-5 py-20  my-10 text-center text-white max-w-2xl mx-auto'>
                <h2 className='text-3xl font-bold'> Best Cheese Pizza available in<br />your town by Petuk </h2>
                <p className=' my-5'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, praesentium. Veniam ullam iure nisi porro. </p>
                <button className='px-4 py-2 text-sm bg-orange-500 text-white rounded-full'>
                    Visit restaurants</button>
            </div>
        </section>
    )
}

export default BestCheese
