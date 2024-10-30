import type { Meal } from "~/types/Meal";

export const getMealsfromMemory = async (): Promise<Meal[] | []> => {
  return (await useStorage().getItem("meals")) ?? [];
};

export const fakePromise = async <T>(response: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};
