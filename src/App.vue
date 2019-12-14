<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/stops">Stops</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import '@/assets/css/tailwind.css';

export default {
  
}
</script>

<style>
</style>
