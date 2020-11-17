<template>
  <section class="details-container">
    <div class="details-panel">
      <div class="details-panel-line">
        <h1 class="panel-title">Detalhes do trabalho</h1>
      </div>
      <div class="details-panel-line">
        <input
          type="text"
          class="name-input-details"
          v-model="article.title"
          disabled
        />
      </div>
      <div class="details-panel-line-double">
        <input
          type="text"
          class="input-details"
          v-model="article.author"
          disabled
        />
        <input
          type="text"
          class="input-details"
          v-model="article.orientador"
          disabled
        />
      </div>
      <div class="details-panel-line-double">
        <input
          type="text"
          class="input-details"
          v-model="article.area"
          disabled
        />
        <input
          type="text"
          class="input-details"
          v-model="article.grau"
          disabled
        />
      </div>
      <textarea
        name=""
        id="article-description"
        v-model="article.description"
        cols="30"
        rows="10"
        disabled
      ></textarea>
      <button id="article-details-return" @click="returnPage">Retornar</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: "Metodologias avançadissimas em sistemas especialistas",
        author: "S. Giacomin, Paulo",
        orientador: "C. Almeida, Helder",
        area: "Tecnologia da Informação",
        grau: "Doutorado",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque omnis nam debitis inventore maiores! Laudantium modi ipsam unde, accusantium id quam alias laboriosam velit ex nisi sequi quisquam. Totam, at.",
      },
    };
  },
  methods: {
      returnPage() {
          this.$router.push("/search-result")
      }
  },
};
</script>

<style>
.details-container {
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

.details-panel {
  width: 770px;
  height: 641px;
  border: 1px solid #c1c1c1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.panel-title {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #aaaaaa;
  margin-top: 30px;
}

.details-panel-line,
.details-panel-line-double {
  width: 85%;
  display: flex;
  justify-content: center;
}

.details-panel-line-double {
  justify-content: space-around;
}

.name-input-details {
  border: none;
  border-bottom: 1px solid #c1c1c1;
  background-color: #fff;
  border-bottom: 2px solid #c1c1c1;
  margin-top: 30px;
  margin-bottom: 25px;
  width: 85%;
  padding-left: 10px;
  font-size: 15px;
  color: #aaaaaa;
}

.input-details {
  border: none;
  border-bottom: 2px solid #c1c1c1;
  background-color: #fff;
  margin-top: 30px;
  margin-bottom: 25px;
  width: 40%;
  padding-left: 10px;
  color: #aaaaaa;
}

#article-description {
  margin-top: 30px;
  resize: none;
  width: 75%;

  background-color: #fff;
  color: #aaaaaa;
  font-family: "Roboto", sans-serif;
  padding: 5px;
}

#article-details-return {
  margin-top: 30px;
  width: 130px;
  height: 30px;
  background-color: #fff;
  color: #aaaaaa;
  border: 1px solid #c1c1c1;
  box-shadow: 0 2px 4px #0004;
  outline: none;
  transition: 0.3s;
}

#article-details-return:hover {
  box-shadow: 0 4px 8px #0004;
  cursor: pointer;
}

#article-details-return:active {
  box-shadow: 0 0 0 #0007;
}
</style>