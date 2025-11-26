import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlinePhoneInTalk } from 'react-icons/md'

const ContactCards = () => {
    return (
        <section>
            <div className='max-w-6xl mx-auto px-10 py-10'>
                <div className='flex justify-center items-center gap-10'>
                    {
                        contactCardsArray.map((item) => (
                            <div className=' flex flex-1 flex-col justify-center items-center p-10 border-2 border-dashed border-orange-300'>
                                <h2 className='font-bold text-2xl text-zinc-500'>{item.name}</h2>
                                <div>{item.icon}</div>
                                <p>{item.p1}</p>
                                <p>{item.p2}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

const contactCardsArray = [
    {
        id: 1,
        name: "Phone Number",
        icon: <MdOutlinePhoneInTalk />,
        p1: "+123 123 4567",
        p2: "+123 123 4567",
    },
    {
        id: 2,
        name: "Email Address",
        icon: <HiOutlineMail />,
        p1: "themeix@gmail.com",
        p2: "support@themeix.com",
    },
    {
        id: 3,
        name: "Our Location",
        icon: <CiLocationOn />,
        p1: "12 Pak street road",
        p2: "New york 11568, USA",
    },
]
export default ContactCards
