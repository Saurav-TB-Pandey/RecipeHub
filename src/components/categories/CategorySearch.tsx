"use client";
import { useState } from "react";
import { CategoryListProps } from "@/utils/types/dataTypes";
import CategoryGrid from "./CategoryGrid";

interface CategorySearchProps extends CategoryListProps {
  placeholder: string;
}

const CategorySearch = ({
  categories,
  meals,
  placeholder,
}: CategorySearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories?.filter((category) =>
    category.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredMeals = meals?.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="form-control max-w-md mx-auto mb-7">
        <div className="input-group">
          <input
            type="text"
            placeholder={placeholder}
            className="input input-bordered w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <CategoryGrid categories={filteredCategories} meals={filteredMeals} />
    </>
  );
};

export default CategorySearch;
