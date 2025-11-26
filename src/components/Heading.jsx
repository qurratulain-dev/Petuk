import React from 'react'

const Heading = ({ title }) => {
    return (
        <div className='text-center py-5'>
            <h2 className='text-3xl font-bold mb-2'>{title}</h2>
            <div className='flex justify-center items-center gap-2'>
                <span className='w-8 h-1 bg-orange-500 rounded-full animate-pulse'></span>
                <span className='w-2 h-1 bg-orange-500 rounded-full animate-pulse delay-150'></span>
                <span className='w-8 h-1 bg-orange-500 rounded-full animate-pulse delay-300'></span>
            </div>
        </div>
    )
}

export default Heading
