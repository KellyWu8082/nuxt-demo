<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
const route = useRoute();
</script>

<template>
  <div>用户页面 -- {{ route.params.id }}</div>
</template>

<style lang="scss" scoped></style>
