"use client"
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    // <div className="px-6 py-8">
    //   <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

    //   {Array.isArray(cartItems) && cartItems.length === 0 ? (
    //     <p>Your cart is empty.</p>
    //   ) : (
    //     <div>
    //       {cartItems.map((item, index) => (
    //         <div key={index} className="mb-4 p-4 border rounded shadow-sm">
    //           <h2 className="text-xl">{item.name}</h2>
    //           <p>${item.price} {item.currency}</p>
    //           <button
    //             onClick={() => removeFromCart(item.id)}
    //             className="mt-2 text-sm text-red-500"
    //           >
    //             Remove
    //           </button>
    //         </div>
    //       ))}
    //       <button
    //         onClick={clearCart}
    //         className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    //       >
    //         Clear Cart
    //       </button>
    //     </div>
    //   )}
    // </div>
    <div className="p-8">
  <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

  {cartItems.length === 0 ? (
    <p className="text-center">Your cart is empty.</p>
  ) : (
    <div className="space-y-4 max-w-2xl mx-auto">
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border p-4 rounded shadow"
        >
          <div className="flex items-center space-x-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">${item.price}</p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="flex justify-center gap-6 mt-6">
  <button
    onClick={clearCart}
    className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
  >
    Clear Cart
  </button>
  <button
    onClick={() => alert('Checkout coming soon!')}
    className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700"
  >
    Proceed to Checkout
  </button>
</div>
    </div>
  )}
</div>

  );
}