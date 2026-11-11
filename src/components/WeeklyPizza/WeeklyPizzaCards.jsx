import React from 'react';
import Heading from '../Heading';
import WeeklyPizzaCard from './WeeklyPizzaCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const pizzas = [
    {
        id: "w1",
        name: "Mushroom Pizza",
        description: "tomato sauce, olives, eggplant, zucchini, red pepper, caper",
        price: 1200,
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "w2",
        name: "Pepperoni Pizza",
        description: "pepperoni, mozzarella cheese, tomato sauce",
        price: 1500,
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "w3",
        name: "Veggie Pizza",
        description: "tomatoes, onions, capsicum, olives, mozzarella",
        price: 1300,
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "w4",
        name: "Cheese Pizza",
        description: "cheese overload with tomato sauce",
        price: 1400,
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "w5",
        name: "Margherita Pizza",
        description: "classic margherita with fresh basil",
        price: 1100,
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
    }
];

const WeeklyPizzaCards = () => {
    return (
        <section className='bg-[#fcfcfc]'>
            <div className='max-w-6xl mx-auto px-5 py-10'>
                <Heading title="Weekly Pizza Offer" />

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    loop={true}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev'
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 }

                    }}>
                    {pizzas.map(pizza => (
                        <SwiperSlide key={pizza.id} className="flex w-full justify-center py-10">
                          <WeeklyPizzaCard
                            id={pizza.id}
                            name={pizza.name}
                            description={pizza.description}
                            price={pizza.price}
                            image={pizza.image}
                          />
                      </SwiperSlide>
                      
                    ))}

                    {/* Custom Arrows */}
                    <div className="custom-prev absolute top-[40%] left-0 z-10 w-10 h-10 bg-white border border-orange-500 text-orange-500 shadow-md flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-500 hover:text-white">
                        &#10094;
                    </div>
                    <div className="custom-next absolute top-[40%] right-0 z-10 w-10 h-10 bg-white border border-orange-500 text-orange-500 shadow-md flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-500 hover:text-white">
                        &#10095;
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default WeeklyPizzaCards;
