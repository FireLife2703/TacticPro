import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) return <div className="p-4">Ваш кошик порожній.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ваш кошик</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>{item.price} грн</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Видалити
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}