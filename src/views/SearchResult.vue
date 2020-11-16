<template>
  <div class="search-result">
    <SearchBar />
    <ResultPanel />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import ResultPanel from "../components/ResultPanel";
export default {
  components: {
    SearchBar,
    ResultPanel,
  },
};
</script>

<style>
.search-result {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>