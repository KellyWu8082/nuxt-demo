<script setup lang="ts">
defineProps<{
  msg: string;
}>();

useKeyPress("p", () => counter.value++);
const counter = ref(0);
const increment = () => {
  counter.value++;
};
</script>

<template>
  <div>
    <div>hello {{ msg }} -- {{ counter }}</div>
    <button @click="increment">点击+1</button>
  </div>
</template>

<style lang="scss" scoped></style>
