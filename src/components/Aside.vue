<template>

  <aside class="el-aside">
    <Search></Search>
    <div class="box-box">
      <ul>
        <li :key="item.id" v-for="(item,index) in boxList" @click.stop="selectById(item.id)">
          <i class="el-icon-printer icon" :class="item.status==1? 'out' : 'online' " ></i> {{item.name}}
        </li>
      </ul>
    </div>

  </aside>

</template>
<script>
  import Search from './Search.vue'
  export default{
    created(){
      this.boxList = [ // status 0在线和1离线
        {id:Math.random(),name:'2-23104-170516-00040 恒汇环腰裤1号',status:'1'},
        {id:Math.random(),name:'盒子2',status:'0'},
        {id:Math.random(),name:'盒子3',status:'1'},
        {id:Math.random(),name:'盒子4',status:'0'},
        {id:Math.random(),name:'盒子5',status:'0'},
        {id:Math.random(),name:'盒子6',status:'1'},
        {id:Math.random(),name:'盒子7',status:'0'},
        {id:Math.random(),name:'盒子8',status:'0'},
        {id:Math.random(),name:'盒子9',status:'1'},
        {id:Math.random(),name:'盒子10',status:'0'},
        {id:Math.random(),name:'盒子11',status:'0'},

      ]
    },
    methods:{

      //查询详情
      selectById(val){
//        console.log(val);
        this.$router.push({
          name:'selectById',
          params:{
            id:val
          }
        })
      },/*end*/


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

</style>
