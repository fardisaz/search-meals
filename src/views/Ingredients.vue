<template>
  <div class="p-8">
    <h1 class="text-orange-400 text-4xl font-bold mb-4">Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full mb-3"
      placeholder="Search for ingredients"
    />
    <div class="grid grid-rows-2">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <a
          href="#"
          @click.prevent="openIngredient(ingredient)"
          v-for="ingredient of computedIngredients"
          :key="ingredient.idIngredient"
          class="bg-white rounded p-3 mb-3 shadow block"
        >
          <h3 class="text-2xl font-bold mb-2">
            {{ ingredient.strIngredient }}
          </h3></a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import axiosClient from "../axiosClient";
import { useRouter } from "vue-router";
import { useMealSearch } from "../store/index";
const ingredients = ref([]);
const keyword = ref("");
const router = useRouter();

const computedIngredients = computed(() =>
  ingredients.value.filter(
    (i) =>
      i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()) ||
      (i.strDescription || "")
        .toLowerCase()
        .includes(keyword.value.toLowerCase())
  )
);

function openIngredient(ingredient) {
  useMealSearch().setIngredient(ingredient);
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}
onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
