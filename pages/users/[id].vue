<script setup lang="ts">
import type { UserInterface } from "~/types/user";

definePageMeta({
  // middleware: ["auth"],
});
const route = useRoute();
const user = useCurrentUser();
const userId = route.params.id;
const data = ref<UserInterface | null>(null);

const { data: cachedData } = useNuxtData(`user/${userId}`);
console.log("cachedData", cachedData.value);

if (cachedData.value) {
  data.value = cachedData.value;
} else {
  const { data: fetchData } = await useAsyncData(`user/${userId}`, () =>
    $fetch<UserInterface>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    )
  );
  data.value = fetchData.value;
}

// const { data: fetchData, pending } = useFetch<UserInterface>(
//   `https://jsonplaceholder.typicode.com/users/${userId}`,
//   {
//     lazy: true,
//   }
// );

// 请求会被发送两次  一次在服务器端，一次在客户端
// const data = await $fetch<UserInterface>(
//   `https://jsonplaceholder.typicode.com/users/${userId}`
// );

// const { data, pending } = await useAsyncData(`user/${userId}`, () =>
//   $fetch<UserInterface>(`https://jsonplaceholder.typicode.com/users/${userId}`)
// );

useSeoMeta({
  title: () => `${data.value?.name}`,
  description: "detail page desc",
});

const postData = ref(null);
const send = async () => {
  postData.value = await $fetch("/api/test", {
    method: "POST",
    body: {
      name: data.value?.username,
      age: 30,
      gender: "female",
    },
  });
};
</script>

<template>
  <button @click="send">send post</button>
  <div v-if="postData">post data: {{ postData }}</div>
  <h3>welcome -- {{ data?.username }}</h3>
  <pre class="text-red-600 text-lg mt-5">{{ data }}</pre>
</template>

<style lang="scss" scoped></style>
