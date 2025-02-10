"use client";

import { MealList } from "@/utils/types/dataTypes";
import Image from "next/image";
import { Heart } from "lucide-react";
import CommonButton from "../common/CommonButton";

interface MealCardProps {
  meal: MealList;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const MealCard = ({ meal, isHovered, onHover, onLeave }: MealCardProps) => {
  return (
    <div
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <figure className="relative h-56">
        <Image
          src={meal.strMealThumb}
          fill
          style={{ objectFit: "cover" }}
          alt={meal.strMeal}
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
        <div className="flex justify-between items-start">
          <h2 className="card-title text-lg">{meal.strMeal}</h2>
          <button className="btn btn-ghost btn-circle btn-sm">
            <Heart size={18} className="text-error" />
          </button>
        </div>

        <div className="card-actions justify-end mt-4">
          <CommonButton
            className="btn btn-primary btn-sm"
            text=" View Recipe"
            navigateTo={`/recipe/${meal.idMeal}`}
          />
        </div>
      </div>
    </div>
  );
};

export default MealCard;
