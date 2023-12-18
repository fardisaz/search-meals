<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
    />
    <div class="flex justify-center gap-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters.split('')"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
    <pre>{{ ingredients }}</pre>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ingredients = ref(null);
onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  //   ingredients.value = response.data;
});
</script>
