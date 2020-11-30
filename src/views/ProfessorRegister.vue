<template>
  <div class="professor-register">
    <Header class="header" />
    <div class="register-form-container">
        <h1>Cadastro de Professor</h1>

        <div class="form-container">
        <div class="name-container">
            <input type="text" class="name-input" />
        </div>
        </div>

    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style>
    .header {
        align-self: flex-start;
    }

    .professor-register {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 80vh;
    }

    .form-container{
        width: 80vw;
        margin-top: 50px;
    }

    .name-container {
        width: 100%;
    }

    .name-input {
        border: none;
        border-bottom: 1px solid #555;
        outline: none;
    }
</style>