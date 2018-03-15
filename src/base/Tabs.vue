<template>
  <div v-loading="loading">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="测点监控" name="first">
        <Tab1 :id="id" @loading-msg="changeLoad"></Tab1>
      </el-tab-pane>
      <el-tab-pane label="程序更新" name="second">
        <Tab2 :id="id"></Tab2>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>
<script>
  import Tab1 from '../components/Tab1.vue'
  import Tab2 from '../components/Tab2.vue'
  import { mapGetters } from 'vuex'
  export default{

    computed:{
      ...mapGetters([

      ]),


    },
    watch:{
      //监听地址栏变化
      $route(){
        this.id = this.$route.params.id;
      }

    },
    components:{
      Tab1,
      Tab2
    },
    data() {
      return {
        activeName: 'first',
        id:'', //盒子id
        loading:false, //动画
      }
    },
    methods: {
      handleClick(tab, event) {
        //console.log(tab, event);
      },

      changeLoad(val){
        this.loading = val;
      }

    }

  }
</script>

