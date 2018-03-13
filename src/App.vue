<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
  }

  #app{
    -ms-flex: 1 1 auto;
    -moz-flex: 1 1 auto;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -ms-flexbox;
    display: -moz-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    min-height: 0;
    height: 100%;
  }
</style>
