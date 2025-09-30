import { useState } from "react";

const Filters = ({ filters, onFiltersChange }) => {
   const [showFilters, setShowFilters] = useState(false);

   const handleSearchChange = (e) => {
      onFiltersChange({ searchTerm: e.target.value });
   };

   const handleCategoryChange = (e) => {
      onFiltersChange({ category: e.target.value });
   };

   const handleSortChange = (e) => {
      onFiltersChange({ sortBy: e.target.value });
   };

   return (
      <div className="filters">
         <div className="search">
            <input
               type="text"
               placeholder="Поиск товаров..."
               value={filters.searchTerm}
               onChange={handleSearchChange}
            />
         </div>

         <div className="filter-controls">
            <select value={filters.category} onChange={handleCategoryChange}>
               <option value="all">Все категории</option>
               <option value="phones">Телефоны</option>
               <option value="laptops">Ноутбуки</option>
               <option value="tablets">Планшеты</option>
            </select>

            <select value={filters.sortBy} onChange={handleSortChange}>
               <option value="name">По названию</option>
               <option value="price">По цене</option>
            </select>

            <button onClick={() => setShowFilters(!showFilters)}>
               {showFilters ? "Скрыть фильтры" : "Показать фильтры"}
            </button>
         </div>
      </div>
   );
};

export default Filters;
