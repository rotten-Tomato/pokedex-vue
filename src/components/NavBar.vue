<script setup>
import { RouterLink } from 'vue-router'
import MenuIcon from './icons/MenuIcon.vue'
</script>
<template>
  <nav class="navBar">
    <h1 class="logo"><RouterLink to="/">Home</RouterLink></h1>
    <input type="checkbox" id="check" />
    <label for="check" class="menu"><MenuIcon></MenuIcon></label>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/favoritos">Favoritos</RouterLink></li>
      <li><RouterLink to="/alumno">Alumno</RouterLink></li>
    </ul>
  </nav>
</template>

<style></style>
