<script setup lang="ts">
import type { Meal } from "~/types/Meal";

const { slug } = useRoute().params;

const { data: cachedMeals } = useNuxtData("meals");
const thisMealFromCache = computed(() =>
  cachedMeals.value?.find(
    (meal: Meal) => meal.slug === slug
  )
);

const { data: meal } = await useFetch<Meal>(
  `/api/meals/${slug}`,
  {
    lazy: !!thisMealFromCache.value,
    default: () => thisMealFromCache.value,
  }
);
</script>

<template>
  <div>
    <MealContent v-if="meal" :meal />
  </div>
</template>
