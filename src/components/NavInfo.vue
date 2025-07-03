<script setup>
defineProps({
  currentView: String,
})
</script>
<template>
  <nav class="nav-info">
    <ul>
      <li>
        <div @click="$emit('change-view', 'stats')" :class="{ active: currentView === 'stats' }">
          Stats
        </div>
      </li>
      <li>
        <div @click="$emit('change-view', 'base')" :class="{ active: currentView === 'base' }">
          Base
        </div>
      </li>
    </ul>
  </nav>
</template>

<style></style>
