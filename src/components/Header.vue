<template>
  <div class="Header">
    <div>
      <i class="material-icons expand">expand_more</i>
      <p>Bom dia, Helder!</p>
      <i class="material-icons">account_circle</i>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
}
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

</style>