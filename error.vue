<script setup>
// eslint-disable-next-line vue/require-prop-types
defineProps(["error"]);

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout>
    <ErrorPage :error="error" @button-clicked="handleError" />
  </NuxtLayout>
</template>
