import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../store/productStore/productSelector";
import { selectLoading } from "../store/appStore/appSelector";
import { setError, setLoading } from "../store/appStore/appSlice";
import { setProducts } from "../store/productStore/productSlice";

export const useProducts = () => {
   const dispatch = useDispatch();
   const products = useSelector(selectProducts);
   const loading = useSelector(selectLoading);

   const [filters, setFilters] = useState({
      searchTerm: "",
      category: "all",
      sortBy: "name",
   });

   useEffect(() => {
      const fetchProducts = async () => {
         dispatch(setLoading(true));

         try {
            setTimeout(() => {
               const mockProducts = [
                  {
                     id: 1,
                     name: "iPhone 14",
                     price: 799,
                     category: "phones",
                     image: "https://via.placeholder.com/200",
                     description: "Новейший iPhone",
                  },
                  {
                     id: 2,
                     name: "Samsung Galaxy S23",
                     price: 699,
                     category: "phones",
                     image: "https://via.placeholder.com/200",
                     description: "Флагман Samsung",
                  },
                  {
                     id: 3,
                     name: "MacBook Pro",
                     price: 1999,
                     category: "laptops",
                     image: "https://via.placeholder.com/200",
                     description: "Мощный ноутбук Apple",
                  },
                  {
                     id: 4,
                     name: "Dell XPS 13",
                     price: 1299,
                     category: "laptops",
                     image: "https://via.placeholder.com/200",
                     description: "Премиум ноутбук Dell",
                  },
                  {
                     id: 5,
                     name: "iPad Air",
                     price: 599,
                     category: "tablets",
                     image: "https://via.placeholder.com/200",
                     description: "Планшет Apple",
                  },
                  {
                     id: 6,
                     name: "Samsung Galaxy Tab",
                     price: 399,
                     category: "tablets",
                     image: "https://via.placeholder.com/200",
                     description: "Планшет Samsung",
                  },
               ];
               dispatch(setProducts(mockProducts));
               dispatch(setLoading(false));
            }, 1000);
         } catch (error) {
            dispatch(setError(error.message));
            dispatch(setLoading(false));
         }
      };

      fetchProducts();
   }, [dispatch]);

   const updateFilters = (newFilters) => {
      setFilters((prev) => ({ ...prev, ...newFilters }));
   };

   const filteredProducts = products
      .filter((product) => {
         const matchesSearch = product.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
         const matchesCategory = filters.category === "all" || product.category === filters.category;
         return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
         if (filters.sortBy === "name") return a.name.localeCompare(b.name);
         if (filters.sortBy === "price") return a.price - b.price;
         return 0;
      });

   return {
      products: filteredProducts,
      loading,
      filters,
      updateFilters,
   };
};
