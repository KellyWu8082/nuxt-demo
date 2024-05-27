<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { UInput, USelect, UToggle, FileUpload } from "#components";
import { omitBy, isNil, isEmpty } from "lodash-es";

const schema = z.object({
  username: z.string().min(3),
  nickName: z.string().optional(),
  picture: z.string().url().optional(),
  type: z.enum(["email", "phone", "oauth"]),
  email: z.string().email().optional(),
  phone: z
    .string()
    .refine((val) => /^1[3-9]\d{9}$/.test(val), "手机号格式错误")
    // .regex(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/)
    .optional(),
  oauthId: z.string().optional(),
  provider: z.enum(["github", "gitee"]).optional(),
  password: z.string().min(6).optional(),
  passwordConfirmation: z.string().min(6).optional(),
  role: z.enum(["admin", "user"]).optional(),
  disabled: z.boolean().optional(),
});

type Schema = z.output<typeof schema>;

const state = reactive<{
  username: string;
  nickName?: string;
  picture?: string;
  email?: string;
  phone?: string;
  oauthId?: string;
  provider?: "gitee" | "github";
  password?: string;
  passwordConfirmation?: string;
  role?: "admin" | "user";
  type: "email" | "phone" | "oauth";
  disabled?: boolean;
}>({
  username: "",
  type: "email",
  nickName: "",
  disabled: false,
  email: "",
  phone: "",
  oauthId: "",
  provider: "github",
  password: "",
  passwordConfirmation: "",
  role: "user",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data);
}

const fields = [
  {
    label: "User Name",
    name: "username",
    as: UInput,
  },
  {
    label: "Nick Name",
    name: "nickName",
    as: UInput,
  },
  {
    label: "Type",
    name: "type",
    as: USelect,
    options: [
      { label: "Email", value: "email" },
      { label: "Cellphone", value: "phone" },
      { label: "Oauth2", value: "oauth" },
    ],
    onChange: (value: "email" | "phone" | "oauth") => {
      state.email = "";
      state.phone = "";
      state.oauthId = "";
      state.provider = "github";
      state.password = "";
      state.passwordConfirmation = "";
      state.type = value;
    },
  },
  {
    label: "Email",
    name: "email",
    as: UInput,
    belongsTo: { key: "type", value: "email" },
  },
  {
    label: "Phone",
    name: "phone",
    as: UInput,
    belongsTo: { key: "type", value: "phone" },
  },
  {
    label: "Oauth ID",
    name: "oauthId",
    as: UInput,
    belongsTo: { key: "type", value: "oauth" },
  },

  {
    label: "Oauth Provider",
    name: "provider",
    as: USelect,
    options: [
      { label: "github", value: "github" },
      { label: "gitee", value: "gitee" },
    ],
    belongsTo: { key: "type", value: "oauth" },
  },
  {
    label: "OauthID",
    name: "oauthID",
    as: UInput,
    belongsTo: { key: "type", value: "oauth" },
  },
  {
    label: "Password",
    name: "password",
    as: UInput,
    belongsTo: { key: "type", value: "email" },
  },
  {
    label: "Password Confirmation",
    name: "passwordConfirmation",
    as: UInput,
    belongsTo: { key: "type", value: "email" },
  },
  {
    label: "Picture",
    name: "picture",
    as: FileUpload,
    action: "/api/upload",
  },
  {
    label: "Role",
    name: "role",
    as: USelect,
    options: ["admin", "user"],
  },
  {
    label: "Disabled",
    name: "disabled",
    as: UToggle,
  },
];

const filterUserData = computed(() => {
  return omitBy(state, (val) => isNil(val) || isEmpty(val));
});
</script>

<template>
  <div class="w-1/3 mx-auto">
    <UForm
      :schema="schema"
      :state="filterUserData"
      class="space-y-4"
      @submit="onSubmit"
    >
      <UFormGroup
        v-for="{ as, label, name, belongsTo, ...attrs } in fields"
        :key="name"
        :name="name"
        :label="label || name"
        v-show="!belongsTo || (belongsTo && belongsTo.value === state[belongsTo.key as keyof typeof state])"
      >
        <component
          :is="as"
          v-model="state[name as keyof typeof state]"
          v-bind="attrs"
        />
      </UFormGroup>
      <UButton type="submit" class="w-full block"> Submit </UButton>
    </UForm>
  </div>
</template>

<style lang="scss" scoped></style>
