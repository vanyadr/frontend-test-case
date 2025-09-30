import { useProducts } from "../../hooks/useProducts";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

const ProductList = () => {
   const { products, loading, filters, updateFilters } = useProducts();

   if (loading) {
      return <div className="loading">Загрузка товаров...</div>;
   }

   return (
      <div className="product-list">
         <Filters filters={filters} onFiltersChange={updateFilters} />

         <div className="products">
            {products.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
            {products.length === 0 && <div className="no-products">Товары не найдены</div>}
         </div>
      </div>
   );
};

export default ProductList;
