<template>
  <div>
    <div>
      <label for="stopsearch">
        Search for station:
      </label>
    </div>
    <input
      class="border"
      type="text"
      id="stopsearch"
      placeholder="Search for a station"
      v-model="searchTerm"
      v-on:keypress="typeaheadSearch"
    /><br />

    <ul>
      <li v-for="stop in stops" v-bind:key="stop.stop_id">
        {{stop.resolvedname}}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Search from "@/services/Search";
import Component from "vue-class-component";
import { IStopsSmall, IstopSmall } from "@/types/IStops";

@Component
export default class SearchVue extends Vue {
  searchTerm: string = "";
  stops: IStopsSmall = [];

  /**
   * Performs a typeahead search when something is entered in the textfield
   */
  async typeaheadSearch(): Promise<void> {
    if (this.searchTerm.length > 1) {
      this.stops = await Search.typeahead(this.searchTerm);
    }
  }

  mounted() {}
}
</script>
