import { useCart } from "../../hooks/useCart";

const ProductCard = ({ product }) => {
   const { addItem } = useCart();

   const handleAddToCart = () => {
      addItem(product);
   };

   return (
      <div className="product-card">
         <img src={product.image} alt={product.name} />
         <h3>{product.name}</h3>
         <p>{product.description}</p>
         <div className="price">${product.price}</div>
         <button onClick={handleAddToCart}>Добавить в корзину</button>
      </div>
   );
};

export default ProductCard;
