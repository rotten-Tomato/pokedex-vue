<script setup>
defineProps({
  pokeId: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="base-right">
    <div class="base-height-weight">
      <div class="base-Height">
        <p>{{ pokeId.height * 10 }} cm</p>
        <h4>Height</h4>
      </div>
      <div class="base-Weight">
        <p>{{ pokeId.weight / 10 }} Kg</p>
        <h4>Weight</h4>
      </div>
    </div>

    <div class="base-info">
      <div class="stats">
        <p>base exp:</p>
        <div class="stats-bar">
          <div :style="{ width: pokeId.base_experience / 10 + '%' }"></div>
        </div>
      </div>
      <div class="galeria">
        <div>
          <img :src="pokeId.sprites.front_default" />
          <p>normal</p>
        </div>
        <div>
          <img :src="pokeId.sprites.front_shiny" />
          <p>shiny</p>
        </div>
        <div v-if="pokeId.sprites.front_female">
          <img :src="pokeId.sprites.front_female" />
          <p>female</p>
        </div>
        <div v-else>
          <p>no cuenta con forma femenina</p>
        </div>
      </div>
    </div>
  </div>
</template>
