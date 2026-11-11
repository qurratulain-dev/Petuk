import React from 'react'
import cheese from '../assets/cheese.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BestCheese = () => {
    return (
        <section
            className='bg-[#fcfcfc] bg-fixed'
            style={{ backgroundImage: `url(${cheese})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className='px-5 py-20  my-10 text-center text-white max-w-2xl mx-auto'>
                <h2 className='text-3xl font-bold'> Best Cheese Pizza available in<br />your town by Petuk </h2>
                <p className=' my-5'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, praesentium. Veniam ullam iure nisi porro. </p>
                <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className='inline-block'>
                    <Link to='/shop' className='inline-block px-4 py-2 text-sm bg-orange-500 text-white rounded-full'>Visit Shop</Link>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default BestCheese
