<template>

  <aside class="el-aside">
    <Search></Search>
    <div class="box-box">
      <ul>
        <li :class="item.active? 'active':null" :key="item.id" v-for="(item,index) in boxList" @click.stop="selectById(item.id)">
          <i class="el-icon-printer icon" :class="item.status==1? 'out' : 'online' " ></i> {{item.name}}
        </li>
      </ul>
    </div>

  </aside>

</template>
<script>
  import Search from './Search.vue'
  import { mapActions , mapGetters } from 'vuex'
  export default{
    created(){

      let ajax = [ // status 0在线和1离线
        {id:1,name:'2-23104-170516-00040 恒汇环腰裤1号',status:'1' , active:false},
        {id:2,name:'盒子2',status:'0' , active:false},
        {id:3,name:'盒子3',status:'1' , active:false},
        {id:4,name:'盒子4',status:'0', active:false},
        {id:5,name:'盒子5',status:'0', active:false},
        {id:Math.random(),name:'盒子6',status:'1', active:false},
        {id:Math.random(),name:'盒子7',status:'0', active:false},
        {id:Math.random(),name:'盒子8',status:'0', active:false},
        {id:Math.random(),name:'盒子9',status:'1', active:false},
        {id:Math.random(),name:'盒子10',status:'0', active:false},
        {id:Math.random(),name:'盒子11',status:'0', active:false},

      ]

      //添加盒子路由到vuex
      this.ADDBOXNAV(ajax);

      //data获取vuex中的路由盒子
      this.boxList = this.GETBOXLIST;


    },
    computed:{

      ...mapGetters([
        'GETBOXLIST'
      ]),

    },
    watch:{

      //监听路由
      $route(){
        //添加class,盒子的路由在vuex中，改变vuex中的active改变点击状态
        this.NAVINDEX(this.$route.params.id);

      },

    },
    methods:{

      ...mapActions([
        'ADDBOXNAV','NAVINDEX'
      ]),

      //查询详情
      selectById(val){

        //跳转路由
        this.$router.push({
          name:'selectById',
          params:{
            id:val
          }
        })
      },


    },
    data(){

      return {
        boxList:[], //左侧列表

      }

    },
    components:{
      Search
    }

  }

</script>

<style scope>
  .el-aside{
    width: 340px;
    background:#222d33;
    border-right:1px solid #ccc;
  }

  .box-box{
    padding-top:20px;
    padding-bottom: 30px;
  }
  .box-box li{
    width: 100%;
    box-sizing: border-box;
    padding-left: 15px;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    color:#fff;
    white-space:nowrap;
  }
  .box-box li:hover{
    background:#6a7b83;
  }
  .box-box .icon.out{
    color:#ccc;
  }
  .box-box .icon.online{
    color:#5cf916;
  }
  .box-box li.active{
    background:#f39c16;
  }

</style>
