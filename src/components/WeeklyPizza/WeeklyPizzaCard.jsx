import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, AiFillHeart } from 'react-icons/ai';

const WeeklyPizzaCard = ({name,description,price,image}) => {
  const [wishlisted, setWishlisted] = useState(false);

  const toggleWishlist = () => {
    setWishlisted(!wishlisted);
  };

  return (
    <div className="relative max-w-xs bg-white shadow-lg rounded-xl overflow-hidden px-4 py-5 flex flex-col items-center gap-3 hover:shadow-xl transition">
      <div
        className={`absolute top-px right-1 cursor-pointer transition ${wishlisted ? 'text-orange-500' : 'text-gray-400'
          }`}
        onClick={toggleWishlist}>
        <AiFillHeart size={25} />
      </div>
      <div className=" h-40 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <h2 className="text-xl font-bold text-gray-800 text-center">{name}</h2>
      <p className="text-sm text-gray-500 text-center">
        {description}
      </p>
      <p className="text-xl font-bold text-orange-500">{price}</p>
      <div className="flex items-center gap-3 my-2">
        <button
          className="border border-orange-500  w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-50 transition">
          <AiOutlineMinus size={16} />
        </button>
        <span className="text-gray-800 font-medium text-lg">1</span>
        <button
          className="border border-orange-500  w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-50 transition">
          <AiOutlinePlus size={16} />
        </button>
      </div>
      <button
        className="flex items-center gap-2 text-white bg-orange-500 hover:bg-black px-4 py-2 rounded-full transition-all ">
        <AiOutlineShoppingCart size={20} /> Add to cart
      </button>
    </div>
  );
};

export default WeeklyPizzaCard;
