import React from 'react';
import Heading from '../Heading';
import WeeklyPizzaCard from './WeeklyPizzaCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const pizzas = [
    {
        id: 1,
        name: "Mushroom Pizza",
        description: "tomato sauce, olives, eggplant, zucchini, red pepper, caper",
        price: "$12.00",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        description: "pepperoni, mozzarella cheese, tomato sauce",
        price: "$15.00",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Veggie Pizza",
        description: "tomatoes, onions, capsicum, olives, mozzarella",
        price: "$13.00",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        name: "Cheese Pizza",
        description: "cheese overload with tomato sauce",
        price: "$14.00",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        name: "Margherita Pizza",
        description: "classic margherita with fresh basil",
        price: "$11.00",
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
                    slidesPerView={4}
                    loop={true}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev'
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 }
                    }} >
                    {pizzas.map(pizza => (
                        <SwiperSlide key={pizza.id} className="flex justify-center mt-10 py-10 ">
                        <div >
                            <WeeklyPizzaCard
                                name={pizza.name}
                                description={pizza.description}
                                price={pizza.price}
                                image={pizza.image}
                            />
                        </div>
                    </SwiperSlide>
                    ))}
                    {/* Custom Arrows */}
                    <div className="custom-prev absolute top-[40%] -right-5 -left-3 z-10 transform -translate-y-1/2 w-10 h-10 bg-white border border-orange-500 text-orange-500 shadow-md flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-500 hover:text-white">
                        &#10094;
                    </div>
                    <div className="custom-next absolute top-[40%] -right-3 z-10 transform -translate-y-1/2 w-10 h-10 bg-white border border-orange-500 text-orange-500 shadow-md flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-500 hover:text-white">
                        &#10095;
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default WeeklyPizzaCards;
