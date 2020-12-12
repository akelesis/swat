<template>
  <section @click="redirectPage" class="result-card">
      <div class="img-container">
        <img v-if="!tcc.tcc_cover_url" src="https://via.placeholder.com/135x85/FFFFFF/C1C1C1/?text=NO_IMAGE" alt="">
        <img v-if="tcc.tcc_cover_url" :src="tcc.tcc_cover_url" alt="">
      </div>
      <div class="description-container">
        <p>Titulo: {{tcc.tcc_title}}</p>
        <p>Autor: {{tcc.tcc_author}}</p>
        <p>Ano: {{tcc.tcc_year}}</p>
        <p>Area: {{tcc.tcc_area}}</p>
        <p v-if="status">Status: <span :class="status">{{status}}</span></p>
      </div>
  </section>
</template>

<script>
export default {
    props: ['status', 'tcc'],
    methods: {
        redirectPage() {
            if (this.status == "aprovado" || !this.status){
                this.$store.commit("setSelected", this.tcc)
                this.$router.push("/article-details")
            }
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

.img-container img{
    width: 140px;
}

.description-container {
    color: #a7a7a7;
    text-align: start;
    margin-left: 10px;
}

.card-row {
    display: flex;
    justify-content: space-between;
}

.pendente {
    color: #B2AE4E;
}

.aprovado {
    color: #72C183;
}

.reprovado {
    color: #C65E3E;
}
</style>