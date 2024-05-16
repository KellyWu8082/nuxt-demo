<script setup lang="ts">
import { useField } from "vee-validate";

interface UserProps {
  name: string;
  type?: string;
  placeholder?: string;
}

const props = defineProps<UserProps>();

const { value, errorMessage, handleChange } = useField(() => props.name);
</script>

<template>
  <div>
    <label for="email" class="sr-only">Email</label>
    <div class="relative">
      <input
        :type="type || 'text'"
        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border"
        :placeholder="placeholder"
        v-model="value"
        :class="{
          'border-red-500': errorMessage,
          ' border-gray-200': !errorMessage,
        }"
        @blur="handleChange"
      />

      <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
      </span>
    </div>
    <span class="text-red-500 text-xs italic" v-if="errorMessage">{{
      errorMessage
    }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
