import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import hero from '../assets/hero.webp'

const Subscribe = () => {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('') // '', 'error', 'done'

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setStatus('error')
            return
        }
        setStatus('done')
        setEmail('')
    }

    return (
        <section className='bg-[#fcfcfc] py-20 md:px-20 px-5'>
            <div className='max-w-6xl mx-auto px-10 py-5 rounded-lg bg-amber-50 border-dashed  border-4 border-orange-500/50
            flex items-center gap-8'>
                <div className='basis-[40%] md:flex hidden'>
                    <motion.img
                        src={hero} alt="pizza pic"
                        animate={{ rotate: [-2, 2, -2] }}
                        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} />
                </div>
                <div className='md:basis-[60%] flex flex-col justify-center  p-5 md:p-0'>
                    <h2 className='text-3xl text-zinc-800 font-bold'>Subscribe For Pizza offer</h2>
                    <p className='text-sm text-zinc-500 my-5'>Lorem ipsum dolor sit amet perspiciatis, facere nisi cupiditate iste laudantium? Repellat, modi minus. Incidunt.</p>
                    <form onSubmit={handleSubmit} className='flex relative md:w-[30vw]'>
                        <motion.input
                            animate={status === 'error' ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                            transition={{ duration: 0.4 }}
                            type="text" placeholder='Enter you Email' autoComplete='off'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setStatus('') }}
                            className={`pl-5 py-2 text-sm text-zinc-500 border rounded-full focus:outline-none flex-1 ${status === 'error' ? 'border-red-500' : 'border-zinc-500'}`} />
                        <motion.button
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className='text-white bg-orange-500 px-4 py-2 rounded-full text-sm absolute right-0 top-px'>Subscribe</motion.button>
                    </form>
                    <div className='h-4 mt-5'>
                        <AnimatePresence mode="wait">
                            {status === 'done' ? (
                                <motion.p key="done" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                    className='text-green-600 text-[11px]'>Thanks for subscribing!</motion.p>
                            ) : status === 'error' ? (
                                <motion.p key="err" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                    className='text-red-500 text-[11px]'>Please enter a valid email.</motion.p>
                            ) : (
                                <motion.p key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className='text-zinc-500 text-[10px]'>Exclusive offer every week!</motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
