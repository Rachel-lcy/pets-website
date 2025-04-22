"use client"
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {Array.isArray(cartItems) && cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="mb-4 p-4 border rounded shadow-sm">
              <h2 className="text-xl">{item.name}</h2>
              <p>${item.price} {item.currency}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 text-sm text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}