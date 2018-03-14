<template>
  <div class="welcome">
    <img :src="imgsrc" />
  </div>

</template>
<script>
  import imgBg from '../lib/img/bdg.png'
  export default{
    data(){
      return {
        imgsrc:imgBg
      }
    }


  }

</script>
<style scoped>
  .welcome{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
