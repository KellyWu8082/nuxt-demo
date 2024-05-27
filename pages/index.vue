<script setup lang="ts">
const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
  },
  {
    id: 3,
    name: "Tom Cook",
    title: "Director of Product",
    email: "tom.cook@example.com",
    role: "Member",
  },
  {
    id: 4,
    name: "Whitney Francis",
    title: "Copywriter",
    email: "whitney.francis@example.com",
    role: "Admin",
  },
  {
    id: 5,
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
    role: "Owner",
  },
  {
    id: 6,
    name: "Floyd Miles",
    title: "Principal Designer",
    email: "floyd.miles@example.com",
    role: "Member",
  },
];

const items = [
  {
    label: "Tab1",
    content: "This is the content shown for Tab1",
  },
  {
    label: "Tab2",
    disabled: false,
    content: "And, this is the content for Tab2",
  },
  {
    label: "Tab3",
    content: "Finally, this is the content for Tab3",
  },
];

const selected = ref("Tom Cook");
const options = [
  "Wade Cooper",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer",
];
</script>

<template>
  <div class="p-4">
    <div class="flex flex-wrap justify-between items-center my-2">
      <div class="w-1/3"></div>
      <div class="flex-1 flex justify-end items-center">
        <USelectMenu v-model="selected" :options="options" class="w-1/3" />
        <UInput
          color="primary"
          variant="outline"
          placeholder="Search..."
          class="mx-4"
        />
        <UButton
          class="w-12"
          label="搜索"
          @click="navigateTo('/users/detail')"
        />
      </div>
    </div>
    <UTable :rows="people" />
  </div>
</template>

<style lang="scss" scoped></style>
