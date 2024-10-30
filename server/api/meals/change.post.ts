export default defineEventHandler(async (event) => {
  const meals = await getMealsfromMemory();
  const changedMeals = meals.map((meal, index) => {
    meal.title = `changed-${index}`;

    return meal;
  });

  await useStorage().setItem("meals", changedMeals);
});
