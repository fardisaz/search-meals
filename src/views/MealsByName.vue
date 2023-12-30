<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 w-full"
      placeholder="Search for meals"
      @change="searchMeals"
    />
  </div>
  <Meals :meals="mealSearch.searchedMeals" />
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useMealSearch } from "../store/index";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keyword = ref("");
const mealSearch = useMealSearch();
const searchMeals = () => {
  if (keyword.value) {
    mealSearch.searchMeals(keyword.value);
  } else {
    mealSearch.searchedMeals = [];
  }
};
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
