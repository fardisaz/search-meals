<template>
  <header class="bg-white shadow h-16 flex justify-between items-center">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 text-orange-400 font-bold"
      >Home</router-link
    >
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName', params: { name } }"
        class="inline-flex items-center px-5 h-full text-orange-400 font-bold"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        class="inline-flex items-center px-5 h-full text-orange-400 font-bold"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-5 h-full text-orange-400 font-bold"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>
