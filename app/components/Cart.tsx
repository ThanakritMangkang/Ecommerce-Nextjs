"use client";

import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

interface Product {
  id: number;
  name: string;
  code: string;
  price: number;
  image_url: string;
  quantity: number;
}

interface Props {
  cart: Product[];
  updateCart: (cart: Product[]) => void;
}

const Cart: React.FC<Props> = ({ cart, updateCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const increaseQuantity = (productId: number) => {
    const updatedCart = cart.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (productId: number) => {
    const updatedCart = cart.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    updateCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <>
      <button
        onClick={toggleCart}
        className="fixed inset-y-0 right-0 w-12 bg-white border-l border-gray-200 shadow-lg z-20 flex items-center justify-center"
      >
        <CiShoppingCart size={20} />
      </button>

      <div
        className={`fixed inset-y-0 right-0 w-80 bg-white border-l border-gray-200 shadow-lg z-10 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold">Your Cart</h1>
        </div>

        <div className="p-4">
          {cart.length === 0 ? (
            <p className="text-sm text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              <ul className="divide-y divide-gray-200">
                {cart.map((product) => (
                  <li key={product.id} className="py-3">
                    <div className="flex items-center">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-md border border-gray-200"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {product.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          ฿{product.price}
                        </p>
                      </div>
                      <div className="ml-4 flex flex-auto items-center">
                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="px-2 py-1 text-sm border border-gray-300 rounded"
                        >
                          -
                        </button>
                        <span className="px-3">{product.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(product.id)}
                          className="px-2 py-1 text-sm border border-gray-300 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-lg font-bold">
                  Total: ฿{calculateTotal().toFixed(2)}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
