<template>
  <div>
    <div>
      <label for="stopsearch">
        Search for station:
      </label>
    </div>
    <!-- prettier-ignore -->
    <input
      class="border"
      type="text"
      id="stopsearch"
      placeholder="Search for a station"
      v-model="searchTerm"
      v-on:keyup="typeaheadSearch"
    /><br />

    <ul>
      <li v-for="stop in stops" v-bind:key="stop.stop_id" @click="editStop(stop.resolvedname)">
        {{ stop.resolvedname }}
      </li>
    </ul>
  </div>
</template>
<script>
import Search from '@/services/Search';

export default {
  data() {
    return {
      searchTerm: '',
      stops: [],
    };
  },
  methods: {
    editStop(name) {
      this.$router.push({ name: 'editstops', params: { name: name } });
    },
    /**
     * Performs a typeahead search when something is entered in the textfield
     */
    async typeaheadSearch() {
      if (this.searchTerm.length > 2) {
        this.stops = await Search.typeahead(this.searchTerm);
      }
    },
  },
};
</script>
