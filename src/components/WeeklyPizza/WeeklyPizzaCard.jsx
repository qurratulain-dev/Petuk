import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillHeart } from 'react-icons/ai';
import FoodImage from '../FoodImage';
import AddToCart from '../AddToCart';
import { formatPrice } from '../../utils/format';

const WeeklyPizzaCard = ({ id, name, description, price, image }) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative max-w-xs bg-white shadow-lg rounded-xl overflow-hidden px-4 py-5 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow"
    >
      <motion.button
        whileTap={{ scale: 1.5 }}
        animate={{ scale: wishlisted ? [1, 1.4, 1] : 1 }}
        onClick={() => setWishlisted(!wishlisted)}
        aria-label="Add to wishlist"
        className={`absolute top-2 right-2 cursor-pointer transition-colors ${wishlisted ? 'text-orange-500' : 'text-gray-400'}`}
      >
        <AiFillHeart size={25} />
      </motion.button>
      <div className="h-40 w-full overflow-hidden rounded-lg">
        <FoodImage
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <h2 className="text-xl font-bold text-gray-800 text-center">{name}</h2>
      <p className="text-sm text-gray-500 text-center">{description}</p>
      <p className="text-xl font-bold text-orange-500">{formatPrice(price)}</p>
      <AddToCart
        item={{ id, name, price, img: image }}
        className="justify-center"
      />
    </motion.div>
  );
};

export default WeeklyPizzaCard;
