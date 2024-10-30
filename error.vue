<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout>
    <ErrorPage :error="error" @button-clicked="handleError" />
  </NuxtLayout>
</template>
