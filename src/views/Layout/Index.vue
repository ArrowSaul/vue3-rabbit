<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
//触发获取导航
import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";
const categoryStore = useCategoryStore();
onMounted(() => {
  categoryStore.getCategory();
});
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <!-- <RouterView :key="$route.fullPath" /> -->
  <LayoutFooter />
</template>