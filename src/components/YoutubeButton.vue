<template>
  <div>
    <a
      :href="href"
      target="_blank"
      class="px-3 py-2 rounded border-orange-400 bg-orange-400 hover:bg-orange-600 text-white transition-colors"
      ><slot>Youtube</slot></a
    >
  </div>
</template>
<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>
