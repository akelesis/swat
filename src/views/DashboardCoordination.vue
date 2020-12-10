<template>
  <div class="dashboard-coordination">
		<Header/>
		<ReproveModal class="reproveModal" v-model="reproveModalOpen"></ReproveModal>
		<section class="dashboard-coordination-first-section">
			<h2>Trabalhos para análise:</h2>
			<div class="first-section-results">
				<ResultCard />
				<ResultCard />
				<ResultCard />
				<ResultCard />
			</div>
		</section>
		<section class="dashboard-coordination-second-section">
			<h2>Detalhes do trabalho</h2>
			<input type="text" placeholder="Metodologias Avançadíssimas em sistemas especialistas">
			<div class="dashboard-coordination-input">
				<input type="text" placeholder="S. Giacomin, Paulo">
				<input type="text" placeholder="C Almeida, Helder">
			</div>
			<div class="dashboard-coordination-input">
				<input type="text" placeholder="Tecnologia da Informação">
				<input type="text" placeholder="Doutorado">
			</div>
			<div class="dashboard-coordination-middle-container">
				<div class="middle-img-container">
					<img src="https://via.placeholder.com/70x75/DDDDDD/000000/?text=CAPA" alt="">
				</div>
				<button><i class="material-icons">download</i>Download</button>
			</div>
			<textarea class="textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum libero ac nulla vehicula, vel iaculis diam tempor. Integer sodales luctus nibh quis molestie. Duis vitae magna elit. Fusce diam dolor, blandit a congue vel, ullamcorper vel metus. In eu vulputate massa, egestas iaculis dolor. Praesent eget consequat quam, vel sagittis felis. In hac habitasse platea dictumst. Aliquam imperdiet et dolor quis aliquet. Duis eget rhoncus velit. Phasellus quis venenatis sem. Suspendisse ac nibh sodales, rutrum orci nec, placerat erat. Integer in eros et tortor vulputate aliquam. Cras ut leo magna. Morbi condimentum leo venenatis, sodales nisi at, eleifend tellus."/>
			<div class="dashboard-coordination-button-container">
				<button class="approve">Aprovar</button>
				<button @click="openReproveModal" class="reprove">Reprovar</button>
			</div>
		</section>
  </div>
</template>

<script>
import Header from '../components/Header';
import ResultCard from '../components/ResultCard';
import ReproveModal from '../components/ReproveModal';
export default {
	name: "DashboardCoordination",
	components: {
		Header,
		ResultCard,
		ReproveModal,
	},
	data() {
		return {
			reproveModalOpen: false,
		};
	},
	methods: {
		openReproveModal(){
			this.reproveModalOpen = !this.reproveModalOpen;
		}
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