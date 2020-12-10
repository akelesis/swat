<template>
  <div class="professor-register">
    <div class="register-form-container">
      <h1>Cadastro de Professor</h1>

      <div class="form-container">
        <div class="line-container">
          <input
            type="text"
            placeholder="Nome Completo"
            v-model="professor.name"
            class="line-input"
          />
        </div>
        <div class="line-container">
          <input
            type="email"
            placeholder="Email"
            v-model="professor.email"
            class="half-input"
          />
          <input
            type="password"
            placeholder="Senha"
            v-model="professor.password"
            class="half-input"
          />
        </div>
        <div class="line-container">
          <select v-model="professor.department" class="half-input">
            <option value="">Departamento</option>
            <option value="Exatas e tecnologicas">Exatas e tecnologicas</option>
          </select>
          <select v-model="professor.college" class="half-input">
            <option value="">Colegiado</option>
            <option value="Ciência da Computação">Ciência da Computação</option>
          </select>
        </div>
        <div class="line-container">
          <input
            type="file"
            class="half-input"
            id="profile-pic-input"
            accept="image/jpg, image/png"
            @change="getImage"
          />
        </div>
      </div>
      <div class="btn-container">
        <button class="save-btn" v-on:click="sendRegister">Salvar</button>
        <button class="cancel-btn">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  components: {
  },
  data() {
    return {
      professor: {
        department: "",
        college: "",
      },
    };
  },
  methods: {
    getImage(event) {
      
      this.professor.photograph = event.target.files[0];
    },
    sendRegister() {
        this.professor.confirm_password = this.professor.password

        const fd = new FormData();
        fd.append("photograph", this.professor.photograph);

        fd.append("teacher_name", this.professor.name)
        fd.append("teacher_email", this.professor.email)
        fd.append("teacher_password",this.professor.password)
        fd.append("teacher_department", this.professor.department)
        fd.append("teacher_collegiate", this.professor.college)
        fd.append("teacher_confirm_password", this.professor.password)

        axios.post("http://localhost:5000/teacher", fd)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
  },
};
</script>

<style>
.header {
  align-self: flex-start;
}

.register-form-container {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aaaaaa;

  height: 80vh;
}

.register-form-container h1 {
  font-weight: 300;
}

.form-container {
  width: 60vw;
  margin-top: 50px;
}

.line-container {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.line-input {
  font-size: 18px;
  border: none;
  border-bottom: 1px solid #888;
  color: #aaa;
  outline: none;
  padding-left: 10px;
  width: 100%;
}

.half-input {
  font-size: 18px;
  border: none;
  border-bottom: 1px solid #888;
  outline: none;
  color: #888;
  padding-left: 10px;
  width: 45%;
}

.btn-container {
  margin-top: 50px;
  width: 300px;
  display: flex;
  justify-content: space-between;
}

.save-btn,
.cancel-btn {
  width: 130px;
  height: 30px;
  border: 1px solid #c1c1c1;
  transition: 0.2s;
  box-shadow: 0 2px 4px #0004;
}

.save-btn {
  background-color: #c4c4c4;
  color: #fff;
}

.cancel-btn {
  background-color: #fff;
  color: #aaaaaa;
}

.save-btn:hover,
.cancel-btn:hover {
  filter: brightness(90%);
}

#profile-pic-input::-webkit-file-upload-button {
  display: none;
}

#profile-pic-input::before {
  content: "Selecione uma imagem de perfil";
}

#profile-pic-input::before {
  margin-right: 10px;
  display: inline-block;
  background: #c4c4c4;
  color: #fff;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 10pt;
  margin-bottom: 5px;
}

#profile-pic-input:hover::before {
  background-color: #aaaaaa;
}

#profile-pic-input:active::before {
  background: -webkit-linear-gradient(to top, #e3e3e3, #f9f9f9);
}
</style>