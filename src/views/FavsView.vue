<script setup>
import { ref, onMounted } from 'vue'

const misFav = ref([])

onMounted(() => {
  const storedFavs = JSON.parse(localStorage.getItem('misFav')) || []
  misFav.value = storedFavs
})
</script>

<template>
  <section>
    <h1>Mis Pokemon Favoritos</h1>
    <div v-if="misFav.length !== 0" class="favs">
      <div
        v-for="poke in misFav"
        :key="poke.id"
        :class="['pokemon-type-' + poke.types[0].type.name, 'card-pokemon']"
      >
        <img :src="poke.sprites.front_default" :alt="poke.name" />
        <h3>{{ poke.name }}</h3>
        <div class="pokemon-type">
          <p v-for="tipo in poke.types" :key="tipo.type.name" :class="'tipo-' + tipo.type.name">
            {{ tipo.type.name.toUpperCase() }}
          </p>
        </div>
        <div class="height-weight">
          <div>
            <p>{{ poke.height * 10 }} cm</p>
            <p>Height</p>
          </div>
          <div>
            <p>{{ poke.weight / 10 }} Kg</p>
            <p>Weight</p>
          </div>
        </div>
        <RouterLink :to="`/Details/${poke.id}`" class="view-details-btn">Ver detalles</RouterLink>
      </div>
    </div>
    <div v-else>
      <p>Aun no hay favoritos</p>
    </div>
  </section>
</template>
