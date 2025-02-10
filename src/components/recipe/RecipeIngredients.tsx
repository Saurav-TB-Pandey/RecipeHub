import { capitalizeFirstLetter } from "@/utils/format/formatData";
import { RecipeInfo } from "@/utils/types/dataTypes";

interface RecipeIngredientsProps {
  recipe: RecipeInfo;
}

const RecipeIngredients = ({ recipe }: RecipeIngredientsProps) => {
  const ingredients = Array.from({ length: 20 }, (_, i) => i + 1)
    .map((num) => ({
      ingredient: recipe[`strIngredient${num}` as keyof RecipeInfo]?.toString(),
      measure: recipe[`strMeasure${num}` as keyof RecipeInfo]?.toString(),
    }))
    .filter(({ ingredient }) => ingredient && ingredient.trim());

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4">Ingredients</h2>
        <ul className="space-y-2">
          {ingredients.map(({ ingredient, measure }, index) => (
            <li
              key={index}
              className="flex items-center gap-2 p-2 hover:bg-base-200 rounded-lg"
            >
              <span className="font-medium">
                {capitalizeFirstLetter(ingredient)}
              </span>
              <span className="text-base-content/70 ml-auto">
                {capitalizeFirstLetter(measure)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeIngredients;
