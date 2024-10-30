<script setup lang="ts">
import type { Meal } from "~/types/Meal";

const { data: cachedData } = useNuxtData("meals");

const { data: meals } = await useFetch<Meal[]>("/api/meals", {
  key: "meals",
  lazy: !!cachedData.value,
});
</script>

<template>
  <div v-if="meals">
    <MealList :meals />
  </div>
</template>
