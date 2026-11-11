import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { AiFillStar } from 'react-icons/ai'
import 'swiper/css'
import Heading from '../Heading'
import client from '../../assets/client.webp'

const REVIEWS = [
  {
    id: 1,
    name: 'Ayesha Khan',
    area: 'Lahore',
    rating: 5,
    text: 'The pizza arrived hot and the crust was perfect. Easily the best delivery experience I have had in Lahore.',
  },
  {
    id: 2,
    name: 'Bilal Ahmed',
    area: 'Karachi',
    rating: 5,
    text: 'Ordered for a family dinner and everyone loved it. The tracking updates were a nice touch.',
  },
  {
    id: 3,
    name: 'Hira Malik',
    area: 'Islamabad',
    rating: 4,
    text: 'Fresh ingredients and generous cheese. Delivery was a few minutes early which never hurts!',
  },
  {
    id: 4,
    name: 'Usman Tariq',
    area: 'Rawalpindi',
    rating: 5,
    text: 'The weekly offer is amazing value. Ordered three times this month and it has been consistent every time.',
  },
]

const Testimonials = () => (
  <section className="bg-[#f9f9f9]">
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Heading title="What our customers say" />
      <div className="mt-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop
          autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {REVIEWS.map((review) => (
            <SwiperSlide key={review.id} className="h-auto py-4">
              <div className="flex h-full flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-md shadow-orange-100/30">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }, (_, index) => (
                    <AiFillStar key={index} className={index < review.rating ? '' : 'text-zinc-200'} />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">“{review.text}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={client}
                    alt={review.name}
                    loading="lazy"
                    className="h-10 w-10 rounded-full bg-orange-100 object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-zinc-800">{review.name}</p>
                    <p className="text-xs text-zinc-500">{review.area}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
)

export default Testimonials
