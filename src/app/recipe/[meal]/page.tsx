import CommonInfo from "@/components/common/CommonInfo";
import RecipeHeader from "@/components/recipe/RecipeHeader";
import RecipeIngredients from "@/components/recipe/RecipeIngredients";
import RecipeInstructions from "@/components/recipe/RecipeInstructions";
import RecipeMetadata from "@/components/recipe/RecipeMetadata";
import { getMealsInfo } from "@/data/apiServices";
import { RecipeInfo } from "@/utils/types/dataTypes";

const RecipeInfoPage = async ({ params }: { params: { meal: string } }) => {
  const { meal } = await params;
  const recipe: RecipeInfo = await getMealsInfo(meal);

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <CommonInfo type="recipeInfo" goBackText="Back to Recipes" />
        </div>

        <RecipeHeader recipe={recipe} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <RecipeInstructions instructions={recipe.strInstructions} />
            <RecipeMetadata recipe={recipe} />
          </div>

          <div className="lg:col-span-1">
            <RecipeIngredients recipe={recipe} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeInfoPage;
