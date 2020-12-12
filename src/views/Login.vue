<template>
  <div class="login">
      <section class="login-first-section">
          <h1 id="login-title">S W A T</h1>
          <p id="login-subtitle">Sistema Web de Acervo de TCC</p>
      </section>
      <section class="login-second-section">
            <div>
                <h1 id="login-name">Login</h1>
                <div class="login-input-container">
                    <input type="teacher_email" v-model="user.teacher_email">
                    <div class="password-container">
                        <input type="password" v-model="user.teacher_password">
                        <p id="forgotten-password" >esqueci a senha</p>
                    </div>
                </div>
                <button @click="login">Entrar</button>
            </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
import { userKey, baseURL } from '@/global'

export default {
    name: "Login",
    data() {
        return {
            user: {
                teacher_email: '',
                teacher_password: ''
            }
        }
    },
    methods: {
        login() {
            axios.post(`${baseURL}/auth`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    if(res.data.admin == 1) {
                        this.$router.push("/dashboardcoordination")
                    }else {
                        this.$router.push("/dashboardteacher")
                    }
                })
                .catch(err => {
                     alert(err);
                });
        }
    },
    mounted() {
        this.headerState()
    }

}
</script>

<style>
.login {
    display: flex;
}

.login section {
    display: flex;
}

.login-first-section {
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: #c4c4c4;
    color: #fff;

    width: 55%;
    height: 100vh;
}

.login-first-section p {
    width: 50vw;
}

#login-title {
    font-weight: normal;
    font-size: 72px;
}

#login-subtitle {
    font-size: 20px;
}

.login-second-section {
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: #a7a7a7;

    width: 45%;
    height: 100vh;
}

.login-second-section > div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;

    height: 35vh;
}

#login-name {
    font-weight: normal;
    font-size: 30px;
}

#forgotten-password {
    font-size: 15px;
}

.login-input-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 35vw;
    height: 120px;
}

.login-input-container > div {
    width: 35vw;
}

.login input {
    font-size: 20px;
    outline: none;
    color: #a7a7a7;
    padding: 5px;

    width: 100%;

    border-radius: .2em;
    border: 1px solid #c4c4c4;
}

.login button {
    font-size: 15px;
    transition: .2s;

    color: #fff;
    background-color: #c4c4c4;
    cursor: pointer;
    outline: none;

    border-radius: .2em;
    border: 1px solid #c4c4c4;

    width: 35vw;
    height: 40px;
}

.login button:hover {
    background-color: #b2b2b2;
}

</style>