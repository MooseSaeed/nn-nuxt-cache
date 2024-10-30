export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");
  const meals = await getMealsfromMemory();
  const targetMeal = meals.find((meal) => meal.slug === slug);

  return await fakePromise(targetMeal);
});
