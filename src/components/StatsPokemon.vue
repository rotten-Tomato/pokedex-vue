<script setup>
defineProps({
  pokeId: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: true,
  },
})
</script>
<template>
  <div class="stat-right">
    <div v-for="stat in pokeId.stats" class="stats">
      <p>{{ stat.stat.name }}</p>
      <div class="stats-bar">
        <div :style="{ width: stat.base_stat / 2 + '%' }"></div>
      </div>
    </div>
  </div>
</template>
