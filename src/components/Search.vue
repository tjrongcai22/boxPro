<template>
  <div class="search">

    <el-input placeholder="请输入内容" v-model="inputVal" @input="getChangeVal(inputVal)" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>

    <ul class="searchBox el-dropdown-menu el-popper el-dropdown-menu--medium " :class="searchBox?'':'hide'" x-placement="bottom-end">
      <li :key="item.plcSnnum" @click="getOne(item.plcSnnum,item.plcName)" tabindex="-1" class="el-dropdown-menu__item" v-for="(item,index) in searchList">
        {{item.plcName}}
      </li>
      <div x-arrow="" class="popper__arrow" style="left: 12px;"></div>
    </ul>

  </div>

</template>
<script>
  import {searchBox} from '../api/ajax.js'
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
        setTimeout(()=>{
          this.searchByInput(val);
        },500);


      },/*end*/

      async searchByInput(val){

        let list = await searchBox(searchVal);
        list = list.data.obj;
        let searchVal = val;
        if(val==""){
          this.searchList = [];
          this.searchBox = false;
          return;
        }
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
    top: 40px;
    width: 303px;
    max-height: 300px;
    overflow-y: auto;
  }
  .el-autocomplete{
    width:100%;
  }
  .el-input-group__append{
    padding: 0 10px;
  }
</style>
