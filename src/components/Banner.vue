<script setup>
import Search from './icons/SearchButton.vue'

const props = defineProps({
  busqueda: {
    type: String,
  },
})
</script>
<template>
  <section class="banner">
    <h2>Pokeapi</h2>
    <form class="d-flex" role="search">
      <input type="search" placeholder="Buscar.." id="search" :v-model="props.busqueda" />
      <button type="submit"><Search class="icons"></Search></button>
    </form>
  </section>
</template>
