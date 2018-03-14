<template>

  <section class="el-container is-vertical">

    <Header></Header>

    <section class="el-container">

      <Aside></Aside>

      <section class="el-container is-vertical" v-loading="loading">

        <main class="el-main">

          <router-view @loading="changeLoading"></router-view>

        </main>

        <Footer></Footer>

      </section>

    </section>

  </section>

</template>
<script>
  import Header from '../components/Header.vue'
  import Aside from '../components/Aside.vue'
  import Footer from '../components/Footer.vue'
  import Welcome from '../components/Welcome.vue'
  export default {
    components:{
      Header,
      Aside,
      Footer,
      Welcome
    },
    data(){
      return {
        loading:false
      }
    },
    methods:{
      changeLoading(val){
        this.loading = val;

      }

    }


  }

</script>

<style scope>
  .el-main{
    position: relative;
  }

</style>
