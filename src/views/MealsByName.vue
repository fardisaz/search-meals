<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem
      v-for="meal of mealSearch.searchedMeals"
      :key="meal.idMeal"
      :meal="meal"
      class="bg-white shadow rounded-xl"
    />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useMealSearch } from "../store/index";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const keyword = ref("");
const mealSearch = useMealSearch();
const searchMeals = () => {
  mealSearch.searchMeals(keyword.value);
};
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
