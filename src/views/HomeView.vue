<script setup>
import Kanto from '../components/TheWelcome.vue'
/*import Banner from '../components/Banner.vue'*/

import { onMounted, ref } from 'vue'

const pokemon = ref([])
const loading = ref(true)
const pokeId = ref('')

const api = 'https://pokeapi.co/api/v2/pokemon?limit=493'

async function fetchPokemon() {
  try {
    const response = await fetch(api)
    const data = await response.json()

    const detalles = await Promise.all(
      data.results.map(async (poke) => {
        const res = await fetch(poke.url)
        return await res.json() // Esto devuelve el detalle completo del pokémon
      }),
    )

    pokemon.value = detalles
    console.log(detalles)
    loading.value = false
  } catch (error) {
    console.error('Error al obtener los pokémones:', error)
  }
}

const viewDetails = (indice) => {
  pokeId.value = indice
  console.log(pokeId)
}
onMounted(() => {
  fetchPokemon()
})
</script>

<template>
  <!--<Banner :busqueda="busqueda"></Banner>-->

  <Kanto :pokemon="pokemon" :loading="loading" :viewDetails="viewDetails"></Kanto>
</template>
