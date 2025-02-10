export const getCategories = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    { cache: "no-store" }
  );
  const categories = await response.json();
  return categories.categories;
};

export const getMealsByCategory = async (category: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    { cache: "no-store" }
  );
  const meals = await response.json();
  return meals.meals;
};

export const getMealsInfo = async (mealId: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
    { cache: "no-store" }
  );
  const meals = await response.json();
  return meals?.meals?.[0];
};

export const getRandomMeal = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    { cache: "no-store" }
  );
  const meals = await response.json();
  return meals?.meals?.[0];
};
