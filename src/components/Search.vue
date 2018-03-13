<template>
  <div class="search">

    <el-input placeholder="请输入内容" v-model="inputVal" @input="getChangeVal(inputVal)" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>

    <ul class="searchBox el-dropdown-menu el-popper el-dropdown-menu--medium " :class="searchBox?'':'hide'" x-placement="bottom-end">
      <li :key="item.id" @click="getOne(item.id,item.name)" tabindex="-1" class="el-dropdown-menu__item" v-for="(item,index) in searchList">
        {{item.name}}
      </li>
      <div x-arrow="" class="popper__arrow" style="left: 12px;"></div>
    </ul>

  </div>

</template>
<script>
  export default{
    data(){
      return {
        inputVal:'', //搜索框文字
        searchList:[], //搜索列表
        searchBox:false, //显示和隐藏查询列表
      }
    },
    mounted(){
      //点击页面其他地方隐藏查询列表
      var that = this;
      document.addEventListener('click',function(e){
        if(e.target.className!='searchBox'){
          that.searchBox=false;
        }
      })
    },
    methods:{
      //点击查询列表中的一项
      getOne(id,val){
        this.inputVal = val;
        this.searchBox = false;
      },/*end*/

      //监控并获取搜索框的值
      getChangeVal(val){

        let searchVal = val;
        if(val==""){
          this.searchList = [];
          this.searchBox = false;
          return;
        }
        //ajax
        let list = [
          {id:Math.random(), name:'2-23104-170516-00040 恒汇环腰裤1号'},
          {id:Math.random(), name:'2-23104-170516-00040 恒汇环腰裤2号'},
        ];
        if(list.length === 0){
          return false;

        }else{
            this.searchList = list;
            this.searchBox = true;

        }


      },/*end*/


    }

  }
</script>
<style scope>
  .hide{
    display:none;
  }
  .search{
    position:relative;
    width: 90%;
    margin: 10px auto 0;
  }
  .searchBox{
    top:40px;
  }
  .el-autocomplete{
    width:100%;
  }
  .el-input-group__append{
    padding: 0 10px;
  }
</style>
