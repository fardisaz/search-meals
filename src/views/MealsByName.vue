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
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          class="rounded-t-xl h-48 w-full object-cover"
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
        />
      </router-link>

      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          {{ meal.strInstructions }}
        </p>
        <div class="flex items-center justify-between">
          <YoutubeButton :href="meal.strYoutube" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useMealSearch } from "../store/index";
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";

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
