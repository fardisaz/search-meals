<template>
  <header class="text-orange-400 text-4xl font-bold mb-4">
    Meals by Letter
  </header>
  <!-- Search by letter bar -->
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter in letters.split('')"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>
  <Meals :meals="meals" />
</template>
<script setup>
import { useRoute } from "vue-router";
import { computed, onMounted, watch } from "vue";
import { useMealSearch } from "../store/index";
import Meals from "../components/Meals.vue";
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
