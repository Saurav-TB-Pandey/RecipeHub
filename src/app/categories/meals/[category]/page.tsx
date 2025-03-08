import { getMealsByCategory } from "@/data/apiServices";
import { MealList } from "@/utils/types/dataTypes";
import CategorySearch from "@/components/categories/CategorySearch";
import CommonInfo from "@/components/common/CommonInfo";

const MealsPage = async ({
    params,
}: {
    params: Promise<{ category: string }>;
}) => {
    const { category } = await params;
    const mealsList: MealList[] = await getMealsByCategory(category);

    return (
        <div className="min-h-screen bg-base-200 py-8">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <CommonInfo
                        type="meals"
                        navigateTo="/categories"
                        goBackText="Back to Categories"
                        title={`${category} Meals`}
                        description={`Explore our delicious selection of ${category.toLowerCase()}
              dishes. Click on any meal to view its detailed recipe and cooking
              instructions.`}
                    />
                </div>
                <CategorySearch
                    meals={mealsList}
                    categories={[]}
                    placeholder={`Search ${category}s...`}
                />
            </div>
        </div>
    );
};

export default MealsPage;
