import { useState } from 'react'
import Heading from '../Heading'
import client from '../../assets/client.webp'
import nature from '../../assets/nature.jpg'
import { FiLoader } from 'react-icons/fi'
import { TbArrowRight } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Stagger, StaggerItem } from '../motion/Reveal'
import ImageReveal from '../ui/ImageReveal'
import { BlogData } from './BlogData.js'

const LatestNews = () => {
  const [showAll, setShowAll] = useState(false)
  const displayedNews = showAll ? BlogData : BlogData.slice(0, 4)

  return (
    <section className="bg-[#f9f9f9]">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-10">
        <Heading title="Latest News" />
        <Stagger className="mt-10 flex flex-wrap items-center justify-center gap-5 text-white">
          {displayedNews.map((item) => (
            <StaggerItem key={item.id} className="group relative mb-10 h-[300px] w-[250px] overflow-hidden rounded-xl">
              <ImageReveal
                src={nature}
                alt=""
                className="absolute inset-0 h-full w-full"
                hoverZoom
                cursor="View"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-0 w-full p-4">
                <div className="flex items-center gap-2">
                  <img
                    src={client}
                    alt={item.name}
                    className="z-10 h-5 w-5 rounded-full bg-orange-500 object-cover"
                  />
                  <h2 className="text-[12px]">{item.name}</h2>
                </div>
                <p className="my-2 text-sm font-semibold">{item.para}</p>
                <div className="flex items-center justify-between">
                  <button className="rounded-full border border-white px-2 py-1 text-sm">
                    {item.button}
                  </button>
                  <span className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <TbArrowRight size={18} />
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Link to="/blog">
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(true)}
            className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white"
          >
            <FiLoader /> Load more posts
          </motion.button>
        </Link>
      </div>
    </section>
  )
}

export default LatestNews
