<template>
  <div class="bg-white shadow rounded-xl">
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
</template>
<script setup>
import YoutubeButton from "./youtubebutton.vue";
const props = defineProps({
  meal: {
    type: Object,
    required: true,
  },
});
</script>
