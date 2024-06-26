<template>
  <div class="p-12">
    <Button label="Submit" />
    <DataView :value="products">
      <template #list="slotProps">
        <div class="grid grid-nogutter">
          <div
            v-for="(item, index) in slotProps.items"
            :key="index"
            class="col-12"
          >
            <div
              class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3"
              :class="{ 'border-top-1 surface-border': index !== 0 }"
            >
              <div class="md:w-10rem relative">
                <img
                  class="block xl:block mx-auto border-round w-full"
                  :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`"
                  :alt="item.name"
                />
                <Tag
                  :value="item.inventoryStatus"
                  :severity="getSeverity(item)"
                  class="absolute"
                  style="left: 4px; top: 4px"
                ></Tag>
              </div>
              <div
                class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4"
              >
                <div
                  class="flex flex-row md:flex-column justify-content-between align-items-start gap-2"
                >
                  <div>
                    <span class="font-medium text-secondary text-sm">{{
                      item.category
                    }}</span>
                    <div class="text-lg font-medium text-900 mt-2">
                      {{ item.name }}
                    </div>
                  </div>
                  <div class="surface-100 p-1" style="border-radius: 30px">
                    <div
                      class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                      style="
                        border-radius: 30px;
                        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                          0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                      "
                    >
                      <span class="text-900 font-medium text-sm">{{
                        item.rating
                      }}</span>
                      <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div class="flex flex-column md:align-items-end gap-5">
                  <span class="text-xl font-semibold text-900"
                    >${{ item.price }}</span
                  >
                  <div class="flex flex-row-reverse md:flex-row gap-2">
                    <Button icon="pi pi-heart" outlined></Button>
                    <Button
                      icon="pi pi-shopping-cart"
                      label="Buy Now"
                      :disabled="item.inventoryStatus === 'OUTOFSTOCK'"
                      class="flex-auto md:flex-initial white-space-nowrap"
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const products = ref([]);
onMounted(() => {
  setTimeout(() => {
    products.value = [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        description: "Product Description",
        image: "black-watch.jpg",
        price: 72,
        category: "Accessories",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Blue Band",
        description: "Product Description",
        image: "blue-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "Blue T-Shirt",
        description: "Product Description",
        image: "blue-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
      {
        id: "1004",
        code: "h456wer53",
        name: "Bracelet",
        description: "Product Description",
        image: "bracelet.jpg",
        price: 29,
        category: "Accessories",
        quantity: 73,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
      {
        id: "1005",
        code: "av2231fwg",
        name: "Brown Purse",
        description: "Product Description",
        image: "brown-purse.jpg",
        price: 120,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4,
      },
    ];
  }, 10);
});

const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>
