import type { Meal } from "~/types/Meal";

export default defineEventHandler(async () => {
  const meals = await getMealsfromMemory();
  const storedMeals = await fakePromise(meals);
  const filteredMeals = storedMeals.map((meal: Meal) => {
    const { id, title, slug, thumbnail, instructions } = meal;

    return { id, title, slug, thumbnail, instructions };
  });

  return filteredMeals;
});
