<template>

  <aside class="el-aside">
    <Search></Search>
    <div class="box-box">
      <ul>
        <li :class="item.active? 'active':null" :key="item.halfSn" v-for="(item,index) in boxList" @click.stop="selectById(item)">
          <i class="el-icon-printer icon" :class="item.state==1? 'online' : 'out' " ></i> {{item.machinename}}
        </li>
      </ul>
      <input id="fileInput" style="background:#fff" type="file" placeholder="盒子下载文件" @change="getFile($event)" />
      <button @click="submitForm($event)">下载确定按钮</button>
      <button @click.stop="reStart()">设备重启</button>
    </div>

  </aside>

</template>
<script>
  import Search from './Search.vue'
  import { mapActions , mapGetters } from 'vuex'
  import {getList,test} from '../api/ajax.js'
  import $ from 'jquery'
  export default{
    created(){

      this.getInitBox();

//      this.timer = setInterval(()=>{
//        this.getInitBox();
//      },5000)

    },
    computed:{

      ...mapGetters([
        'GETBOXLIST'
      ]),

    },
    beforeDestroy(){
      clearInterval(this.timer);
    },
    watch:{

      //监听路由
      $route(){
        //添加class,盒子的路由在vuex中，改变vuex中的active改变点击状态
        this.NAVINDEX(this.$route.params.halfSn);


      },

    },
    methods:{

      ...mapActions([
        'ADDBOXNAV','NAVINDEX'
      ]),

      reStart(){
          const typeObj = {
            halfSn:"123",
            vendor:"456"
          }
          $.ajax({
            url: "http://47.96.176.131:9080/service/zg/getZG",
            //url: "http://192.168.1.105:9080/zg/getZG",
            data: typeObj,
            contentType: "application/json",
            dataType: "json",
            async: false,
            cache: false,
            complete:function(){
                alert('已经发送重启服务请求')
            }

          });

      },

      getFile(event){
        console.log(event)
        this.files = event.target.files[0];

      },

      async submitForm(){

        var formData = new FormData();
        formData.append("file", this.files);
        formData.append("topic", "repository");
        var self = this;
        $.ajax({
          url: "http://47.96.176.131:9080/service/ze/getZE",
          type: "post",
          contentType: false,
          processData: false,
          dataType: "json",
          data: formData,
          success: function (data) {
            if(data.success){
                alert("下载成功");

            }else{
                alert("下载错误");

            }
            if(data.message!=null){
                alert("数据库返报错");

            }


          }
        });



      },

      //获取ajax
      async getInitBox(){
        let res = await getList(null);
        let list = res.data.obj;
        list = list.map( (item,index)=>{
          item = {...item,active:false}
          return item;
        } );

        //添加盒子路由到vuex
        this.ADDBOXNAV(list);

        //data获取vuex中的路由盒子
        this.boxList = this.GETBOXLIST;

        //路由状态
        this.NAVINDEX(this.$route.params.halfSn);


      },

      //查询详情
      selectById(params){
        let { halfSn , pro , machineid} = params;
        //跳转路由
        this.$router.push({
          name:'selectById',
          params:{
            halfSn
          },
          query:{
            halfSn,
            pro,
            machineid
          }
        })
      },


    },
    data(){

      return {
        boxList:[], //左侧列表
        timer:null,
        files:"",

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
    height: calc(100% - 119px);
    overflow: auto;
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
