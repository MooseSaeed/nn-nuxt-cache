<script setup lang="ts">
import type { Meal } from "~/types/Meal";

defineProps<{
  meal: Meal;
}>();
</script>

<template>
  <div class="mx-auto w-full max-w-3xl my-5">
    <article class="mx-4 bg-gradient-to-r to-sky-950/25 from-sky-700/25 p-10 rounded-md">
      <header class="mb-4 lg:mb-6">
        <div class="w-full h-96 rounded-md overflow-hidden mb-5">
          <img :src="meal.thumbnail" class="w-full h-full object-cover" width="768" height="384" />
        </div>
        <div class="mb-3">
          <div v-if="!meal.createdBy" role="status" class="max-w-sm animate-pulse pb-1">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2"></div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <span class="sr-only">Loading...</span>
          </div>
          <div v-else class="text-sm font-mono">
            <p>Author: {{ meal.createdBy }}</p>
            <p>{{ meal.createdAt }}</p>
          </div>
        </div>
        <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          {{ meal.title }}
        </h1>
      </header>

      <p class="text-sm lg:text-base leading-6 lg:leading-7 text-gray-300" v-html="meal.instructions"></p>
    </article>
  </div>
</template>
