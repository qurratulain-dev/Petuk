import React from 'react'
import WeeklyPizzaCard from '../WeeklyPizza/WeeklyPizzaCard';

const ShopCards4 = () => {
    return (
        <section className='bg-[#fcfcfc]'>
            <div className='max-w-6xl mx-auto px-5 py-10 flex justify-center items-center gap-5 md:flex-row flex-col'>
                {
                    pizzas.map((pizza) => (
                        <div className="">
                            <WeeklyPizzaCard
                                name={pizza.name}
                                description={pizza.description}
                                price={pizza.price}
                                image={pizza.image}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
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
];
export default ShopCards4
