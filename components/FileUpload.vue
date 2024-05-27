<script setup lang="ts">
interface FileUploadProps {
  username: string;
  modelValue?: string;
  action: string;
}
const props = defineProps<FileUploadProps>();

const emit = defineEmits(["update:modelValue", "change", "error"]);

const inputRef = ref<HTMLInputElement | null>(null);
const innerValue = ref(props.modelValue);

const handleUpload = () => {
  if (inputRef.value) {
    inputRef.value.click();
  }
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target && target.files) {
    const file = target.files[0];
    // 处理文件
    postFile(file);
  }
};

const postFile = async (uploadFile: File) => {
  const formData = new FormData();
  formData.append("file", uploadFile);
  try {
    const result = await $fetch<{ url: string }>(props.action, {
      method: "POST",
      body: formData,
    });
    innerValue.value = result.url;
    emit("update:modelValue", result.url);
    emit("change", { url: result.url });
  } catch (error) {
    emit("error", { error });
  }
};

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue;
  }
);
</script>

<template>
  <div class="flex items-center">
    <UAvatar :src="modelValue" :alt="username" class="mr-2" />
    <UButton type="primary" @click="handleUpload">上传</UButton>
    <input
      type="file"
      ref="inputRef"
      accept="image/*"
      @change="handleFileChange"
      style="display: none"
    />
  </div>
</template>

<style lang="scss" scoped></style>
