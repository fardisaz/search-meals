<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Meals for {{ ingredient.strIngredient }}
    </h1>
  </div>
  <Meals :meals="meals" />
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import { useMealSearch } from "../store/index";
const route = useRoute();
const mealSearch = useMealSearch();
const meals = computed(() => mealSearch.mealsByIngredients);
const ingredient = computed(() => useMealSearch().ingredient);
onMounted(() => {
  if (route.params.ingredient) {
    mealSearch.searchMealsByIngredient(route.params.ingredient);
  }
});
</script>
