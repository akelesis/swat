<template>
  <section class="result-panel">
      <ResultCard v-for="card in cards" :key="card" />
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
            cards:[0, 1, 2, 3, 4]
        }
    }
}
</script>

<style>
.result-panel {
    margin-top: 50px;
}
</style>