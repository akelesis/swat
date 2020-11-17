<template>
  <div class="dashboard-teacher">
    <Header />
    <section class="dashboard-teacher-first-section">
      <h2>Envio de trabalhos</h2>
      <input type="text" placeholder="Título do trabalho" name="" id="" />
      <div class="dashboard-teacher-input-container">
        <input type="text" placeholder="Autor(a)" name="" id="" />
        <input type="text" placeholder="Orientador(a)" name="" id="" />
      </div>
      <div class="dashboard-teacher-input-container">
        <select name="" id="">
          <option value="">Área relacionada</option>
        </select>
        <select name="" id="">
          <option value="">Selecione o grau de especialização</option>
        </select>
      </div>
      <div class="dashboard-teacher-input-container">
        <input type="file" id="image-file-input" accept="image/jpg, image/png" />
        <input type="file" id="archive-file-input" accept="application/pdf" />
      </div>
      <textarea
        name=""
        placeholder="Insira aqui o resumo..."
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div class="dashboard-teacher-button-container">
        <button class="send">Enviar</button>
        <button class="cancel">Cancelar</button>
      </div>
    </section>
    <section class="dashboard-teacher-second-section">
      <div class="dashboard-teacher-content-container">
        <h2>Últimos trabalhos enviados</h2>
        <div class="cards-container">
          <ResultCard status="aceito" />
          <ResultCard />
          <ResultCard />
        </div>
      </div>
      <div class="see-all"><p>Ver todos...</p></div>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ResultCard from "../components/ResultCard.vue";

export default {
  name: "DashboardTeacher",
  components: {
    Header,
    ResultCard,
  },
};
</script>

<style>
.dashboard-teacher {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.dashboard-teacher section {
  display: flex;
}

.dashboard-teacher-first-section {
  flex-direction: column;
  justify-content: space-between;

  margin-top: 20px;
  padding: 30px;

  border: 1px solid #c1c1c1;

  width: 55%;
  height: 87vh;
}

.dashboard-teacher h2 {
  font-weight: normal;
  color: #aaaaaa;
}

.dashboard-teacher-input-container {
  display: flex;
  justify-content: space-between;
}

.dashboard-teacher-input-container input,
select {
  width: 24vw;
}

.dashboard-teacher input {
  border: none;
  border-bottom: 1px solid #aaaaaa;
  outline: none;

  padding: 5px;
  font-size: 15px;
  color: #aaaaaa;
}

.dashboard-teacher select {
  border: 1px solid #ffffff;
  border-bottom: 1px solid #aaaaaa;
  outline: none;

  padding: 5px;
  font-size: 15px;
  color: #aaaaaa;
}

#image-file-input::-webkit-file-upload-button,
#archive-file-input::-webkit-file-upload-button {
  display: none;
}

#image-file-input::before {
  content: "Selecione uma imagem de capa";
}

#archive-file-input::before {
  content: "Selecione o artigo";
}

#image-file-input::before,
#archive-file-input::before {
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
}

#image-file-input:hover::before,
#archive-file-input:hover::before {
  background-color: #aaaaaa;
}
#image-file-input:active::before,
#archive-file-input:active::before {
  background: -webkit-linear-gradient(to top, #e3e3e3, #f9f9f9);
}

.dashboard-teacher textarea {
  resize: none;
  outline: none;

  padding: 10px;

  border: 1px solid #aaaaaa;
  color: #aaaaaa;
  font-size: 15px;
}

.dashboard-teacher button {
  width: 107px;
  height: 30px;

  border: 1px solid #c1c1c1;
  outline: none;
  cursor: pointer;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

.dashboard-teacher .send {
  background-color: #c4c4c4;
  color: #fff;
  margin-right: 15px;

  transition: 0.2s;
}

.dashboard-teacher .send:hover {
  background-color: #b4b4b4;
}

.dashboard-teacher .cancel {
  background-color: #fff;
  color: #aaaaaa;
  margin-left: 15px;

  transition: 0.2s;
}

.dashboard-teacher .cancel:hover {
  background-color: #eeeeef;
}

.dashboard-teacher-second-section {
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-right: 50px;
  margin-top: 20px;

  border: 1px solid #c1c1c1;

  width: 32%;
  height: 87vh;
}

.dashboard-teacher-second-section .dashboard-teacher-content-container {
  padding: 30px 0;
}

.dashboard-teacher-second-section .result-card {
  background-color: #eeeeee;
  width: 29vw;
}

.cards-container {
  margin-top: 30px;
}

.see-all {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #c4c4c4;
  color: #ffffff;
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s;

  width: 100%;
  height: 3vh;
}

.see-all:hover {
  background-color: #b4b4b4;
}
</style>