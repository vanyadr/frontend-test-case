import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import CartItem from "./CartItem";

const Cart = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [showCheckout, setShowCheckout] = useState(false);

   const { cart, cartCount, totalPrice, removeItem, updateItemQuantity, clearCart } = useCart();

   const handleCheckout = () => {
      setShowCheckout(true);
      setTimeout(() => {
         alert("Заказ оформлен!");
         clearCart();
         setShowCheckout(false);
         setIsOpen(false);
      }, 1000);
   };

   return (
      <div className="cart">
         <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
            Корзина ({cartCount})
         </button>

         {isOpen && (
            <div className="cart-dropdown">
               <div className="cart-header">
                  <h3>Корзина</h3>
                  <button onClick={() => setIsOpen(false)}>×</button>
               </div>

               <div className="cart-items">
                  {cart.length === 0 ? (
                     <p>Корзина пуста</p>
                  ) : (
                     cart.map((item) => (
                        <CartItem
                           key={item.id}
                           item={item}
                           onUpdateQuantity={updateItemQuantity}
                           onRemove={removeItem}
                        />
                     ))
                  )}
               </div>

               <div className="cart-footer">
                  <div className="total">Итого: ${totalPrice}</div>
                  <button
                     className="checkout-btn"
                     onClick={handleCheckout}
                     disabled={cart.length === 0 || showCheckout}
                  >
                     {showCheckout ? "Оформляем..." : "Оформить заказ"}
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default Cart;
