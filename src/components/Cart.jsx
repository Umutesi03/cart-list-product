import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import OrderModal from './OrderModal';

const Cart = () => {
  const {
    cart,
    increment,
    decrement,
    removeFromCart,
    clearCart,
    getTotal,
  } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    if (cart.length > 0) {
      setShowModal(true);
    }
  };

  const handleNewOrder = () => {
    clearCart();
    setShowModal(false);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow w-full md:w-72">
      <h2 className="text-xl font-semibold text-orange-600 mb-2">
        Your Cart ({cart.reduce((a, b) => a + b.quantity, 0)})
      </h2>
      {cart.length === 0 ? (
        <div className="text-gray-500 text-center p-6 border border-dashed rounded-lg">
          🛒 Your cart is empty. Start adding some delicious desserts!
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item, i) => (
            <div key={i} className="border-b pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <div className="text-sm text-gray-500">
                    {item.quantity} × ${item.price.toFixed(2)} ={' '}
                    <strong>${(item.quantity * item.price).toFixed(2)}</strong>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-red-400 hover:text-red-600 text-lg"
                >
                  ✕
                </button>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() => decrement(item.name)}
                  className="px-2 text-orange-500 border border-orange-500 rounded hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increment(item.name)}
                  className="px-2 text-orange-500 border border-orange-500 rounded hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4">
        <div className="flex justify-between font-semibold text-lg">
          <span>Order Total</span>
          <span>${getTotal().toFixed(2)}</span>
        </div>
        <div className="text-sm text-green-700 bg-green-100 mt-2 p-2 rounded">
          ✅ This is a carbon-neutral delivery
        </div>
        <button
          onClick={handleConfirm}
          disabled={cart.length === 0}
          className={`mt-3 w-full font-semibold py-2 rounded transition ${
            cart.length === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          } focus:outline-none focus:ring-2 focus:ring-orange-400`}
        >
          Confirm Order
        </button>
        <button
          onClick={handleNewOrder}
          className="mt-2 w-full bg-gray-200 text-gray-700 font-semibold py-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Start New Order
        </button>
      </div>
      {showModal && <OrderModal cart={cart} total={getTotal()} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Cart;
