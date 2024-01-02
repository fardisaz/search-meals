<template>
  <div class="flex flex-col p-8 pb-0">
    <h1 class="text-orange-400 text-4xl font-bold mb-4 ml-8">Random Meals</h1>

    <Meals :meals="meals" />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import Meals from "../components/Meals.vue";
const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient.get("random.php").then(({ data }) => {
      meals.value.push(data.meals[0]);
    });
  }
});
</script>
