"use client";
import Image from "next/image";
import { CategoryList } from "@/utils/types/dataTypes";
import CommonButton from "../common/CommonButton";

interface CategoryCardProps {
  category: CategoryList;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const CategoryCard = ({
  category,
  isHovered,
  onHover,
  onLeave,
}: CategoryCardProps) => {
  return (
    <div
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <figure className="relative h-48 overflow-hidden">
        <Image
          src={category.strCategoryThumb}
          fill
          style={{ objectFit: "cover" }}
          alt={category.strCategory}
          className="rounded-t-xl"
        />
        <div
          className={`
            absolute inset-0 bg-gradient-to-t from-base-100 to-transparent
            transition-opacity duration-300
            ${isHovered ? "opacity-70" : "opacity-0"}
          `}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{category.strCategory}</h2>
        <p className="text-base-content/70 text-sm line-clamp-3">
          {category.strCategoryDescription}
        </p>
        <div className="card-actions justify-end mt-4">
          <CommonButton
            text="Explore Meals"
            className="btn btn-primary btn-sm"
            navigateTo={`/categories/meals/${category.strCategory}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
