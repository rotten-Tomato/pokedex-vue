<script setup>
/*import { useRoute } from 'vue-router'*/
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

import Search from '../components/icons/SearchButton.vue'

const props = defineProps({
  pokemon: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: true,
  },
  viewDetails: Function,
  busqueda: {
    type: String,
  },
})

const buscador = ref('')
const categoria = ref('all')

const pokemonKanto = computed(() =>
  props.pokemon.filter(
    (poke) =>
      poke.name.toLowerCase().includes(buscador.value.toLowerCase()) &&
      (categoria.value == poke.types[0].type.name ||
        categoria.value === poke.types[1]?.type.name ||
        categoria.value == 'all'),
  ),
)
</script>
<template>
  <section class="banner">
    <h2>Pokeapi</h2>
    <form class="d-flex" role="search">
      <input type="search" placeholder="Buscar.." id="search" v-model="buscador" />
      <button type="submit"><Search class="icons"></Search></button>
      <select v-model="categoria">
        <option value="all">todo</option>
        <option value="steel">Acero</option>
        <option value="flying">volador</option>
        <option value="water">agua</option>
        <option value="ice">hielo</option>
        <option value="grass">planta</option>
        <option value="bug">bicho</option>
        <option value="electric">electrico</option>
        <option value="normal">normal</option>
        <option value="rock">roca</option>
        <option value="ground">tierra</option>
        <option value="fire">fuego</option>
        <option value="fighting">lucha</option>
        <option value="fairy">hada</option>
        <option value="psychic">psiquico</option>
        <option value="poison">veneno</option>
        <option value="dragon">dragon</option>
        <option value="ghost">fantasma</option>
        <option value="dark">siniestro</option>
      </select>
    </form>
  </section>
  <section>
    <div v-if="loading != true" class="container-personajes">
      <div
        v-for="poke in pokemonKanto"
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
            <h4>Height</h4>
          </div>
          <div>
            <p>{{ poke.weight / 10 }} Kg</p>
            <h4>Weight</h4>
          </div>
        </div>
        <RouterLink :to="`/Details/${poke.id}`" class="view-details-btn">Ver detalles</RouterLink>
      </div>
    </div>
    <div v-else>Cargando...</div>
  </section>
</template>
