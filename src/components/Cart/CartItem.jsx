const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
   const handleDecrement = () => {
      onUpdateQuantity(item.id, item.quantity - 1);
   };

   const handleIncrement = () => {
      onUpdateQuantity(item.id, item.quantity + 1);
   };

   return (
      <div className="cart-item">
         <img src={item.image} alt={item.name} />
         <div className="item-details">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <div className="quantity-controls">
               <button onClick={handleDecrement}>-</button>
               <span>{item.quantity}</span>
               <button onClick={handleIncrement}>+</button>
            </div>
         </div>
         <button className="remove-btn" onClick={() => onRemove(item.id)}>
            Удалить
         </button>
      </div>
   );
};

export default CartItem;
