import Image from "next/image";
import { RecipeInfo } from "@/utils/types/dataTypes";

interface RecipeHeaderProps {
  recipe: RecipeInfo;
}

const RecipeHeader = ({ recipe }: RecipeHeaderProps) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="relative lg:w-1/2 h-[400px]">
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          fill
          className="object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-t-none"
          priority
        />
      </figure>
      <div className="card-body lg:w-1/2">
        <h1 className="card-title text-4xl font-bold">{recipe.strMeal}</h1>
        <div className="flex flex-wrap gap-2 my-4">
          <span className="badge badge-primary">{recipe.strCategory}</span>
          <span className="badge badge-secondary">{recipe.strArea}</span>
          {recipe.strTags?.split(",").map((tag) => (
            <span key={tag} className="badge badge-accent">
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeHeader;
