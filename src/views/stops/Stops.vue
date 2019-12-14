<template>
  <div>
    <div class="about">
      <h1>Search and analyse stops</h1>
    </div>

    <div>
      <SearchStops/>
    </div>
  </div>
</template>

<script>
import SearchStops from '@/views/stops/Search.vue'
export default {
  name: 'stops',
  components:{
    SearchStops,
  }
}
</script>
