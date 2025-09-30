import { useDispatch, useSelector } from "react-redux";
import { selectCart, selectCartCount, selectTotalPrice } from "../store/cartStore/cartSelector";
import { addToCart, clearCart, removeFromCart, updateQuantity } from "../store/cartStore/cartSlice";

export const useCart = () => {
   const dispatch = useDispatch();
   const cart = useSelector(selectCart);
   const cartCount = useSelector(selectCartCount);
   const totalPrice = useSelector(selectTotalPrice);

   const addItem = (product) => {
      dispatch(addToCart(product));
   };

   const removeItem = (id) => {
      dispatch(removeFromCart(id));
   };

   const updateItemQuantity = (id, quantity) => {
      if (quantity <= 0) {
         removeItem(id);
         return;
      }
      dispatch(updateQuantity({ id, quantity }));
   };

   const clear = () => {
      dispatch(clearCart());
   };

   return {
      cart,
      cartCount,
      totalPrice,
      addItem,
      removeItem,
      updateItemQuantity,
      clearCart: clear,
   };
};
