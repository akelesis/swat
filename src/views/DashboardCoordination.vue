<template>
  <div class="dashboard-coordination">
		<ReproveModal class="reproveModal" v-model="reproveModalOpen" :curTCC="curTCC" :getResultCards="getResultCards"></ReproveModal>
		<section class="dashboard-coordination-first-section">
			<h2>Trabalhos para análise:</h2>
			<div class="first-section-results">
				<ResultCard @click.native="getTCC(result)" v-for="result in results" :key="result.tcc_id" :tcc="result" :status="result.tcc_status" />
			</div>
		</section>
		<section class="dashboard-coordination-second-section">
			<h2>Detalhes do trabalho</h2>
			<input v-model="curTCC.tcc_title" type="text" placeholder="Títuto do TCC" disabled>
			<div class="dashboard-coordination-input">
				<input v-model="curTCC.tcc_author" type="text" placeholder="Autor do TCC" disabled>
				<input v-model="curTeacher.teacher_name" type="text" placeholder="Orientador" disabled>
			</div>
			<div class="dashboard-coordination-input">
				<input v-model="curTCC.tcc_area" type="text" placeholder="Departamento" disabled>
				<input v-model="curTCC.tcc_specialization" type="text" placeholder="Grau de especialização" disabled>
			</div>
			<div class="dashboard-coordination-middle-container">
				<div class="middle-img-container">
					<img src="https://via.placeholder.com/70x75/DDDDDD/000000/?text=CAPA" alt="">
				</div>
				<button @click="getTCCFile(curTCC.tcc_url)"><i class="material-icons">download</i>Download</button>
			</div>
			<textarea v-model="curTCC.tcc_summary" class="textarea" disabled placeholder="Resumo do TCC"/>
			<div class="dashboard-coordination-button-container">
				<button @click="approveTCC" class="approve">Aprovar</button>
				<button @click="openReproveModal" class="reprove">Reprovar</button>
			</div>
		</section>
  </div>
</template>

<script>
import ResultCard from '../components/ResultCard';
import ReproveModal from '../components/ReproveModal';
import axios from "axios";
import { baseURL } from "../global";

export default {
	name: "DashboardCoordination",
	components: {
		ResultCard,
		ReproveModal,
	},
	data() {
		return {
			reproveModalOpen: false,
			curTCC: {},
			curTeacher: {},
			results: [],
		};
	},
	methods: {
		openReproveModal(){
			this.reproveModalOpen = !this.reproveModalOpen;
		},
		async getTCC(result){
			this.curTCC = result;
			try{
				const response = await axios.get(`${baseURL}/teacher/${this.curTCC.teacher_id}`).then(res => res.data);
				this.curTeacher = response;
			} catch(err){
				alert(`Ocorreu um erro ao pegar os dados do TCC ${result.tcc_title}`);
				console.log(err);
			}
		},
		async getResultCards(){
			try{
				const response = await axios.get(baseURL + '/tcc').then(res => res.data);
				this.results = response.filter(res => res.tcc_status == "pendente");
				this.curTCC = {};
				this.curTeacher = {};
			} catch(err){
				alert("Ocorreu um erro ao solicitar os cards. Por favor, recarregue a página.");
				console.log(err);
			}
		},
		getTCCFile(tcc_url){
			window.open(tcc_url);
		},
		async approveTCC(){
			this.curTCC.tcc_status = "aprovado";
			try {
				const response = await axios.put(`${baseURL}/tcc/${this.curTCC.tcc_id}`, this.curTCC);
				if (response.status == 200){
					alert("O TCC foi aprovado com sucesso!");
				}
			} catch(err){
				alert("Erro ao aprovar o TCC. Por favor, tente novamente.");
				console.log(err);
			}
			this.getResultCards();
		},
	},
	mounted(){
		this.getResultCards();
	}
};
</script>

<style>
.dashboard-coordination{
	display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.dashboard-coordination-first-section{
	width: 35vw;
	height: 680px;

	border: 1px solid #C1C1C1;
}

.dashboard-coordination-first-section h2{
	width: 100%;
	height: 55px;
	margin-top: 20px;
	padding-top: 10px;

	color: #C1C1C1;
	font-family: "Roboto", sans-serif;
	font-size: 25px;
	font-weight: 400;
}

.first-section-results{
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 20px;
}

.first-section-results .result-card {
	width: 33vw;
}

.first-section-results .result-card:nth-of-type(even){
	background: #CDCDCD;
}

.dashboard-coordination-second-section{
	width: 55vw;
	height: 640px;
	
	align-self: flex-end;
	border: 1px solid #C1C1C1;
}

.dashboard-coordination-second-section h2{
	width: 100%;
	height: 55px;
	margin-top: 20px;
	padding-top: 10px;

	color: #C1C1C1;
	font-family: "Roboto", sans-serif;
	font-size: 25px;
	font-weight: 400;
}

.dashboard-coordination-second-section input{
	border: none;
    border-bottom: 1px solid #aaaaaa;
    outline: none;

	width: 52vw;
	margin-top: 25px;
    padding: 5px;
    font-size: 15px;
    color: #aaaaaa;
}

.dashboard-coordination-input input{
	width: 25vw;
}

.dashboard-coordination-second-section input::placeholder,
.dashboard-coordination-second-section textarea::placeholder{
	color: #bbb;
}

.dashboard-coordination-input{
	display: flex;
	justify-content: space-around;
}

.dashboard-coordination-middle-container{
	display: flex;
	justify-content: space-around;
	margin: 30px 30px 20px 30px;
}

.middle-img-container{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	background: #AAAAAA;
}

.dashboard-coordination-middle-container button{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 75px;
	width: 75px;

	background: #AAAAAA;
	color: #FFFFFF;
	border: none;
}

.dashboard-coordination-middle-container button:hover{
	cursor: pointer;
	filter: brightness(95%);
}

.dashboard-coordination-second-section textarea{
	width: 52vw;
	height: 210px;
	margin: 0px 10px;
	padding: 10px;
}

.dashboard-coordination-button-container{
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0px;
}

.dashboard-coordination-button-container button{
	margin: 10px 15px;
	width: 120px;
	height: 30px;
	border: 0;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

.dashboard-coordination-button-container button:hover{
	filter: brightness(95%);
	cursor: pointer;
}

.dashboard-coordination-button-container .approve{
	background-color: #c4c4c4;
    color: #fff;
}

.dashboard-coordination-button-container .reprove{
	background-color: #fff;
    color: #aaaaaa;
}

.reproveModal{
	position: absolute;
	z-index: 5;
}

.textarea{
	resize: none;
    outline-color: #aaa;
}
</style>