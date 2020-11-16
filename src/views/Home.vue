<template>
  <div class="home">
    <button class="login-btn">Login</button>
    <center class="content-group">
      <WelcomeLogo />
      <SearchBar />
    </center>
  </div>
</template>

<style>
.home{
  display: flex;
  justify-content: flex-end;
}
.login-btn{
  margin: 15px 20px 0 0;
  width: 100px;
  height: 45px;

  z-index: 1;
  background: #FFFFFF;
  color: #C1C1C1;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
}
.login-btn:hover{
	cursor: pointer;
	filter: brightness(95%);
}
.content-group{
  position: absolute;
  padding-top: 30vh;
  width: 100vw;
}
</style>

<script>
// @ is an alias to /src
import WelcomeLogo from '../components/WelcomeLogo.vue';
import SearchBar from '../components/SearchBar.vue';
export default {
  name: 'Home',
  components: {
    WelcomeLogo,
    SearchBar,
  }
}
</script>
