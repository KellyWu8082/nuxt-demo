<script setup lang="ts">
import { userLoginSchema, type userLoginType } from "../validators/user";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import ValidateInput from "~/components/ValidateInput.vue";
definePageMeta({
  layout: "custom",
});
const currentUser = useCurrentUser();

const { values, errors, defineField, handleSubmit, isSubmitting } =
  useForm<userLoginType>({
    validationSchema: toTypedSchema(userLoginSchema),
  });

const login = handleSubmit(async (values) => {
  const data = await $fetch("/api/users/login", {
    body: values,
    method: "POST",
  });
  currentUser.value.isLogin = true;
  currentUser.value.username = "Kelly";
  navigateTo("/");
});
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        Get started today
      </h1>

      <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
        dolores deleniti inventore quaerat mollitia?
      </p>

      <form
        @submit="login"
        class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <p class="text-center text-lg font-medium">Sign in to your account</p>
        <ValidateInput name="email" placeholder="Enter Email" />
        <ValidateInput
          name="password"
          placeholder="Enter Password"
          type="password"
        />

        <button
          type="submit"
          class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          {{ isSubmitting ? "提交中..." : "登录" }}
        </button>

        <p class="text-center text-sm text-gray-500">
          没有账号?
          <a class="underline" @click="navigateTo('/signup')">注册</a>
        </p>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
