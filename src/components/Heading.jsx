import React from 'react'
import { motion } from 'framer-motion'

const Heading = ({ title }) => {
    return (
        <div className='text-center py-5'>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='text-3xl font-bold mb-2'
            >
                {title}
            </motion.h2>
            {/* the three orange bars grow out from the centre */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } } }}
                className='flex justify-center items-center gap-2'
            >
                {['w-8', 'w-2', 'w-8'].map((w, i) => (
                    <motion.span
                        key={i}
                        variants={{ hidden: { scaleX: 0, opacity: 0 }, show: { scaleX: 1, opacity: 1 } }}
                        className={`${w} h-1 bg-orange-500 rounded-full`}
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default Heading
