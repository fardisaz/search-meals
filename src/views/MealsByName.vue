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
    <div
      v-for="meal of mealSearch.searchedMeals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link to="/">
        <img
          class="rounded-t-xl h-48 w-full object-cover"
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
        />
      </router-link>

      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          ipsa ex, cupiditate ad temporibus animi perspiciatis ea rem deserunt
          illum eveniet laborum quis doloribus nostrum eligendi recusandae?
          Cupiditate, molestiae exercitationem!
        </p>
        <div class="flex items-center justify-between">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded border-red-400 bg-red-400 hover:bg-red-600 text-white transition-colors"
            >Youtube</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useMealSearch } from "../store/index";
import { useRoute } from "vue-router";

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
