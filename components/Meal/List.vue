<script setup lang="ts">
import type { Meal } from "~/types/Meal";

defineProps<{
  meals: Meal[];
}>();
</script>

<template>
  <div class="grid grid-cols-2">
    <template v-for="meal in meals" :key="meal.id">
      <div
        class="max-w-sm bg-gradient-to-r to-sky-950/25 from-sky-700/25 rounded-lg m-5 flex flex-col h-72"
      >
        <div class="h-60 overflow-hidden">
          <img
            class="rounded-t-lg w-full h-full object-cover"
            height="240"
            width="382"
            :src="meal.thumbnail"
            alt="meal thumbnail"
          />
        </div>

        <div
          class="p-5 flex flex-col justify-between h-full"
        >
          <div class="h-1">
            <h5
              class="mb-2 sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ meal.title }}
            </h5>

            <p
              class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate text-sm"
              v-html="meal.excerpt"
            ></p>
          </div>
          <NuxtLink
            :to="`/meals/${meal.slug}`"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-gradient-to-r to-sky-700/25 from-purple-500/25 shadow-md hover:to-sky-700/50 transition-all max-w-40"
          >
            <span class="text-xs">Read more</span>
            <Icon
              name="material-symbols:arrow-right-alt-rounded"
              style="
                color: white;
                font-weight: bolder;
                font-size: 20px;
              "
            />
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>
