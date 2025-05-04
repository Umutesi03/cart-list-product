import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const DessertCard = ({ dessert }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
      <img
        src={dessert.image.thumbnail}
        alt={dessert.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-2 text-lg font-semibold">{dessert.name}</h3>
      <p className="text-gray-500">{dessert.category}</p>
      <p className="text-orange-600 font-bold">${dessert.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(dessert)}
        className="mt-2 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default DessertCard;
