<template>
  <div class="Header" v-if="logged">
    <div>
      <i class="material-icons expand" @click="toggleMenu">expand_more</i>
      <p>Bom dia, {{ name }}!</p>
      <i class="material-icons">account_circle</i>
    </div>
    <div class="dropdown-menu" v-if="menuActive">
      <div class="dropdown-option" @click="redirectRegister">
        Cadastro
        <span class="material-icons"> perm_identity </span>
      </div>
      <div class="dropdown-option" @click="logOut">
        Sair
        <span class="material-icons"> exit_to_app </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    logOut() {
      this.menuActive = false;
      this.$store.commit("setUser");
      localStorage.removeItem("__user");
      this.$router.push({ name: "Home" });
    },
    redirectRegister() {
      this.$router.push('professor-register');
    },
    verifyLogin() {
      if(localStorage.getItem("__user")) {
        this.$store.commit('setUser', JSON.parse(localStorage.getItem("__user")))
      }
    }
  },
  computed: {
    logged() {
      return this.$store.state.logged;
    },
    name() {
      return this.$store.state.user.name
    }
  },
  mounted() {
    this.verifyLogin()
  }
};
</script>

<style>
.Header {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  height: 50px;
  width: 100vw;
  padding: 0 30px;
}

.Header > div {
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #a7a7a7;

  width: 185px;
}

.Header .expand {
  cursor: pointer;
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  background-color: #fff;
  box-shadow: 1px 3px 5px #a7a7a7;
}

.dropdown-option:hover {
  background-color: #eee;
  cursor: pointer;
}

.dropdown-option {
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>