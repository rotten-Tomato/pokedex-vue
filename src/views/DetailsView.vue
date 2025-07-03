<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Stats from '../components/StatsPokemon.vue'
import Base from '../components/BaseInfo.vue'

import SoundIcon from '../components/icons/IconSound.vue'
import FillHeart from '../components/icons/FillHeart.vue'
import StrokeHeart from '../components/icons/StrokeHeart.vue'

import NavInfo from '../components/NavInfo.vue'

let misFav = JSON.parse(localStorage.getItem('misFav')) || []

const saveLocal = () => {
  localStorage.setItem('misFav', JSON.stringify(misFav))
}

const info = useRoute().params.id

const api = `https://pokeapi.co/api/v2/pokemon/${info}`
const pokeId = ref(null)
const loading = ref(true)
const fav = ref(false)
const currentView = ref('base')

async function fetchPokemon() {
  try {
    const response = await fetch(api)
    const data = await response.json()
    pokeId.value = data
    loading.value = false

    fav.value = misFav.some((poke) => poke.id === data.id)

    console.log(pokeId)
  } catch (error) {
    console.error('Ocurrio un error', error)
  }
}

function cries() {
  const urlCries = pokeId.value.cries.latest
  const sound = new Audio(urlCries)
  sound.play()
}

const addFav = () => {
  const repetido = misFav.findIndex((pokeRepetido) => pokeRepetido.id === pokeId.value.id)
  if (repetido !== -1) {
    misFav.splice(repetido, 1)
    fav.value = false
  } else {
    misFav.push(pokeId.value)
    fav.value = true
  }
  console.log(misFav)
  saveLocal()
}

const changeView = (view) => {
  currentView.value = view
}

onMounted(() => {
  fetchPokemon()
})
</script>
<template>
  <section class="info-pokemon">
    <div v-if="loading !== true" class="info-left">
      <div class="id-sound">
        <button v-on:click="cries"><SoundIcon class="icons"></SoundIcon></button>
        <h2>#{{ pokeId.id }}</h2>
        <button v-on:click="addFav">
          <FillHeart v-if="fav == true" class="icons"></FillHeart
          ><StrokeHeart v-else class="icons"></StrokeHeart>
        </button>
      </div>
      <img :src="pokeId.sprites.front_default" :alt="pokeId.name" />
      <h3>{{ pokeId.name.toUpperCase() }}</h3>
      <div class="pokemon-type">
        <p v-for="tipo in pokeId.types" :class="'tipo-' + tipo.type.name">
          {{ tipo.type.name.toUpperCase() }}
        </p>
      </div>
    </div>
    <div v-else>
      <h1>Cargando...</h1>
    </div>
    <NavInfo @change-view="changeView" :current-view="currentView"></NavInfo>
    <div class="info-right">
      <Stats
        v-if="currentView === 'stats' && loading != true"
        :pokeId="pokeId"
        :loading="loading"
      ></Stats>
      <Base
        v-else-if="currentView === 'base' && loading != true"
        :pokeId="pokeId"
        :loading="loading"
      ></Base>
    </div>
  </section>
</template>
