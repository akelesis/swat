<template>
  <section class="search-container">
      <div class="search-bar-group">
        <input type="text" v-model="search" class="seach-input" placeholder="Digite sua pesquisa">
        <button @click="redirectToResult" class="search-btn"><i class="material-icons">search</i></button>
      </div>

      <div class="filters-container">
          <div class="filter-group">
            <input type="radio" value="author" name="filter" v-model="checked" id="author-filter">
            <label for="author-filter">autor</label>
          </div>
          <div class="filter-group">
            <input type="radio" value="title" name="filter" v-model="checked" id="title-filter">
            <label for="title-filter">titulo</label>
          </div>
          <div class="filter-group">
            <input type="radio" value="year" name="filter" v-model="checked" id="year-filter">
            <label for="year-filter">ano</label>
          </div>
          <div class="filter-group">
            <input type="radio" value="area" name="filter" v-model="checked" id="area-filter">
            <label for="area-filter">área</label>
          </div>
      </div>
  </section>
</template>

<script>
import axios from "axios"
import {baseURL} from "../global"

export default {
    data() {
        return {
            search: "",
            checked: "",
            options: {
                author: "/searchAuthor/",
                title: "/searchTitle/",
                year: "/searchYear/",
                area: "/searchArea/"
            },
            result: []
        }
    },
    methods: {
        async redirectToResult() {
            console.log(baseURL + this.options[this.checked] + this.search)
            try {
                this.result = await axios.get(baseURL + this.options[this.checked] + this.search)
                    .then(res => res.data)

                this.$store.commit("setSearchResult", this.result)
                this.$router.push("/search-result")
            }
            catch(err) {
                console.log(err)
            }
                
        }
    }
}
</script>

<style>
.search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.search-bar-group {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.seach-input {
    width: 440px;
    height: 35px;

    padding-left: 5px;
    font-size: 15px;
    font-family: "Roboto", sans-serif;

    color: #a7a7a7;

    outline: none;

    border: 1px solid #c1c1c1;
    border-radius: 5px 0 0 5px;
}

.search-btn {
    color: #fff;

    background-color: #c4c4c4;
    border-radius: 0 5px 5px 0;
    border: 0;
    height: 35px;
    width: 40px;
}

.search-btn:hover{
	cursor: pointer;
	filter: brightness(95%);
}

.search-btn i {
    font-size: 20px;
}

.filters-container {
    width: 450px;

    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.filter-group label {
    margin-left: 5px;
    color: #a7a7a7;
    font-family: "Roboto", sans-serif;
}

.filter-group input {
    border: 1px solid #f82626;
}

</style>