<template>
  <section @click="redirectPage" class="result-card">
      <div class="img-container">
          <img src="https://via.placeholder.com/135x85/FFFFFF/C1C1C1/?text=NO_IMAGE" alt="">
      </div>
      <div class="description-container">
          <p>Titulo: Metodologias avançadissimas em sistemas esp...</p>
          <p>Autor: S. Giacomin, Paulo</p>
          <p>Ano: 2015</p>
          <p>Ano: Tecnologia da Informação</p>
      </div>
  </section>
</template>

<script>
export default {
    methods: {
        redirectPage() {
            this.$router.push("/article-details")
        }
    }
}
</script>

<style>
.result-card {
    display: flex;
    width: 45vw;

    margin-bottom: 20px;

    background-color: #eeeeee;
    padding: 10px;
    box-shadow: 0px 2px 4px #0004;
    cursor: pointer;
}

.description-container {
    color: #a7a7a7;
    text-align: start;
    margin-left: 10px;
}
</style>