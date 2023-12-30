<template>
  <Meals :meals="meals" />
</template>
<script setup>
import { computed, onMounted } from "vue";

import { useMealSearch } from "../store/index";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
const route = useRoute();
const mealSearch = useMealSearch();
const meals = computed(() => mealSearch.mealsByIngredients);
onMounted(() => {
  if (route.params.ingredient) {
    mealSearch.searchMealsByIngredient(route.params.ingredient);
  }
});
</script>
