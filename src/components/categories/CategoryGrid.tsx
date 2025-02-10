"use client";
import { CategoryListProps } from "@/utils/types/dataTypes";
import CategoryCard from "./CategoryCard";
import MealCard from "../meals/MealCard";
import { useState } from "react";

const CategoryGrid = ({ categories, meals }: CategoryListProps) => {
  const [hoveredData, setIsHovered] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories?.map((category) => (
        <CategoryCard
          key={category.idCategory}
          category={category}
          isHovered={hoveredData === category.strCategory}
          onHover={() => setIsHovered(category.strCategory)}
          onLeave={() => setIsHovered(null)}
        />
      ))}
      {meals?.map((meal) => (
        <MealCard
          key={meal.idMeal}
          meal={meal}
          isHovered={hoveredData === meal.idMeal}
          onHover={() => setIsHovered(meal.idMeal)}
          onLeave={() => setIsHovered(null)}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;
