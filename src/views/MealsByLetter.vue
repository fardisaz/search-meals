<template>
  <header class="text-5xl text-orange-400">Meals by Letter</header>
  <!-- Search by letter bar -->
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter in letters.split('')"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem
      v-for="meal of meals"
      :key="meal.idMeal"
      :meal="meal"
      class="bg-white shadow rounded-xl"
    />
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { computed, onMounted, watch } from "vue";
import { useMealSearch } from "../store/index";
import MealItem from "../components/MealItem.vue";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const route = useRoute();
const mealSearch = useMealSearch();
const meals = computed(() => mealSearch.mealsByLetter);
watch(route, () => {
  mealSearch.searchMealsByLetter(route.params.letter);
});
onMounted(() => {
  if (route.params.letter) {
    mealSearch.searchMealsByLetter(route.params.letter);
  }
});
</script>
