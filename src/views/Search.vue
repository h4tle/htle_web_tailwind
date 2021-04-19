<template>
<div class="h-screen">
  <label>
      <span>search</span>
      <input type="search" v-model="query">
  </label>
  <div v-for="(result, index) in results" :key="index">
      {{result._source.name}}, {{ result._source.country }}
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            results: [],
            query: ''
        }
        },
        // declare methods in this Vue component. here only one method which performs the search is defined
        methods: {
            // make an axios request to the server with the current search query
            search: function() {
                axios.get("http://127.0.0.1:3001/search?q=" + this.query)
                    .then(response => {
                        this.results = response.data;
    
                    })
            }
        },
        // declare Vue watchers
        watch: {
            // watch for change in the query string and recall the search method
            query: function() {
                this.search();
            }
        }
}
</script>

<style>
</style>