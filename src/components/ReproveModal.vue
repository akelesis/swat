<template>
    <div class="modal" v-show="value">
        <div class="content">
            <h2>Motivação para contestação de trabalho</h2>
            <textarea required v-model="comments" name="" id="" class="textarea" cols="30" rows="10"></textarea>
            <div class="button-container">
                <button @click="reproveTCC" class="btn-enviar">Enviar</button>
                <button @click="close" class="btn-cancelar">Cancelar</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { baseURL } from '../global';
export default {
    name: "ReproveModal",
    data(){
        return {
            comments: '',
        }
    },
    props: ['curTCC', 'getResultCards', 'value'],
    methods: {
        async reproveTCC(){
            try {
                this.curTCC.tcc_comments = this.comments;
                this.curTCC.tcc_status = "reprovado";
                const response = await axios.put(`${baseURL}/tcc/${this.curTCC.tcc_id}`, this.curTCC);
                if (response.status == 200){
                    alert("TCC reprovado com sucesso!");
                    this.comments = '';
                    this.getResultCards();
                    this.close();
                }
            } catch(err){
                alert("Erro ao reprovar o TCC. Por favor, tente novamente.");
                console.log(err);
            }
        },
        close(){
            this.$emit("input", !this.value);
        }
    }
}
</script>

<style>
.modal{
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
}

.content{
    width: 700px;
    height: 70vh;
    background: #FFFFFF;

    display: flex;
    flex-direction: column;
}

.content h2{
    width: 100%;
	height: 55px;
	margin-top: 20px;
	padding-top: 10px;

	color: #C1C1C1;
	font-family: "Roboto", sans-serif;
	font-size: 25px;
	font-weight: 400;
}

.content textarea{
    height: 360px;
    margin: 10px 40px;
    padding: 10px;
}

.button-container{
    display: flex;
    justify-content: center;
}

.button-container button{
    margin: 10px 15px;
	width: 120px;
	height: 30px;
	border: 0;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

.button-container button:hover{
    filter: brightness(95%);
	cursor: pointer;
}

.btn-enviar{
    background-color: #c4c4c4;
    color: #fff;
}

.btn-cancelar{
    background-color: #fff;
    color: #aaaaaa;
}
</style>