<template>
  <section class="result-panel">
      <ResultCard v-for="result in results" :key="result.tcc_id" :tcc="result" />
  </section>
</template>

<script>
import ResultCard from "../components/ResultCard"
export default {
    components: {
        ResultCard
    },
    data() {
        return {
            
        }
    },
    methods: {
        printResults() {
            console.log(this.results)
        }
    },
    computed: {
        results() {
            return this.$store.state.searchResult
        }
    },
    mounted() {
        this.printResults();
    }
}
</script>

<style>
.result-panel {
    margin-top: 50px;
}
</style>