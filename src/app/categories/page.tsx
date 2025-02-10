import { CategoryList } from "@/utils/types/dataTypes";
import { getCategories } from "@/data/apiServices";
import CategorySearch from "@/components/categories/CategorySearch";
import CommonInfo from "@/components/common/CommonInfo";

const CategoriesPage = async () => {
  const categories: CategoryList[] = await getCategories();

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <CommonInfo
            type="categories"
            navigateTo="/"
            goBackText="Back to Home"
            title="Explore Meal Categories"
            description="Discover a world of culinary delights through our diverse meal
            categories. Each category offers unique recipes and cooking
            inspiration."
          />
        </div>
        <CategorySearch
          categories={categories}
          meals={[]}
          placeholder="Search categories..."
        />
      </div>
    </div>
  );
};

export default CategoriesPage;
