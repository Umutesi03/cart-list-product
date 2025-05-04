import React from 'react';

const OrderModal = ({ cart, total, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-left overflow-y-auto max-h-[90vh]">
        <h3 className="text-xl font-bold text-green-600 mb-4">🎉 Order Confirmed!</h3>
        <p className="text-gray-700 mb-4">
          Thank you for your order! Here's a summary of your purchase:
        </p>

        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li key={index} className="flex items-center gap-4 border-b pb-2">
              <img
                src={item.image.thumbnail}
                alt={item.name}
                className="w-14 h-14 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} × ${item.price.toFixed(2)} = ${(
                    item.quantity * item.price
                  ).toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
