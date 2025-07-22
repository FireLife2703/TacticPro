import { useContext } from 'react';
import { CartContext } from './context/CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Кошик</h1>
      {cartItems.length === 0 ? (
        <p>Ваш кошик порожній.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="border p-4 rounded flex justify-between items-center">
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Кількість: {item.quantity}</p>
                  <p>Ціна: {item.price} грн</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Видалити
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-semibold">Загальна сума: {total} грн</div>
          <button
            onClick={clearCart}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Очистити кошик
          </button>
        </>
      )}
    </div>
  );
}
