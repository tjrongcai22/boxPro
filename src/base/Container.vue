<template>

  <section class="el-container is-vertical">

    <Header></Header>

    <section class="el-container">

      <Aside></Aside>

      <section class="el-container is-vertical">

        <Main></Main>

        <Footer></Footer>

      </section>

    </section>

  </section>

</template>
<script>
  import Header from '../components/Header.vue'
  import Aside from '../components/Aside.vue'
  import Main from './Main.vue'
  import Footer from '../components/Footer.vue'
  export default {
    components:{
      Header,
      Aside,
      Main,
      Footer
    }

  }

</script>

<style scope>


</style>
