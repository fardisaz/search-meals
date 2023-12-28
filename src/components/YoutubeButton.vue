<template>
  <div>
    <a
      :href="href"
      target="_blank"
      class="px-3 py-2 rounded border-red-400 bg-red-400 hover:bg-red-600 text-white transition-colors"
      ><slot>Youtube</slot></a
    >
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>
