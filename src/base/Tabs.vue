<template>
  <div v-loading="loading">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="测点监控" name="first">
        <Tab1 :halfSn="halfSn" :pro="pro" @loading-msg="changeLoad"></Tab1>
      </el-tab-pane>
      <el-tab-pane label="程序更新" name="second">
        <Tab2 :halfSn="halfSn" :pro="pro"></Tab2>
      </el-tab-pane>
      <el-tab-pane label="历史数据" name="thirst">
        <Tab3 :halfSn="halfSn" :pro="pro"></Tab3>
      </el-tab-pane>

    </el-tabs>
  </div>

</template>
<script>
  import Tab1 from '../components/Tab1.vue'
  import Tab2 from '../components/Tab2.vue'
  import Tab3 from '../components/History.vue'
  import { mapGetters } from 'vuex'
  export default{

    computed:{
      ...mapGetters([

      ]),


    },
    watch:{
      //监听地址栏变化
      $route(){
        let { halfSn , pro } = this.$route.query;
        this.halfSn = halfSn;
        this.pro = pro;
      }

    },
    components:{
      Tab1,
      Tab2,
      Tab3
    },
    data() {
      return {
        activeName: 'first',
        halfSn:'', //halfSn
        pro:'', //pro
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
