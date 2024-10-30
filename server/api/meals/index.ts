export default defineEventHandler(async () => {
  const meals = await getMealsfromMemory();
  const storedMeals = await fakePromise(meals);

  return storedMeals;
});
