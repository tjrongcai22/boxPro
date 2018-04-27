<template>

    <div class='history'>

        <div class="block">
            <span class="demonstration">关键字:</span>
            <el-input class="keyWord" v-model="PLcName" placeholder="请输入内容"></el-input>
            <span class="demonstration">&nbsp;时间范围:</span>

            <el-date-picker
              v-model="value6"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              >
            </el-date-picker>

          &nbsp;<el-button type="primary" @click.native="addHistory">确定</el-button>
        </div>

        <br />


      <el-table
        :data="historyList"
        height="450"
        border
        style="width: 100%">
        <el-table-column
          prop="time"
          label="时间"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="设备名称"
          >
        </el-table-column>
        <el-table-column
          prop="value"
          label="设备值"
          >
        </el-table-column>


        </el-table>

      <el-button @click.native="addMore" :loading="false" class='addMore'>加载更多</el-button>
  </div>

</template>
<script>
  import {getHistory} from '../api/ajax.js'
  export default{
    created(){
        this.value6 = '';
        this.historyList = [];
        this.lastRowKey = null;
        this.hasNext = false;
        this.PLcName = '';
    },
    watch:{
      $route(){
        this.value6 = '';
        this.historyList = [];
        this.lastRowKey = null;
        this.hasNext = false;
        this.PLcName = '';
      },
      value6(){
        this.historyList = [];
        this.lastRowKey = null;
        this.hasNext = false;
      }

    },
    methods:{
        setVal(){
          let start,end;
          start = this.formatDate(this.value6[0]);
          end = this.formatDate(this.value6[1]);
          let machineId = this.$route.query.machineid;
          let params = {
            name:this.PLcName,
            machineId:machineId,
            startTime:end,
            endTime:start,
            lastRowKey:this.lastRowKey==null? null : this.lastRowKey
          }

          let list = this.getHistoryList(params).then(res => {
            let arr = res.data.data;
            this.historyList = [...this.historyList,...arr];
            this.lastRowKey = res.data.lastRowKey;
            this.hasNext = res.data.hasNext;
          });
        },

        addHistory(){
            if(this.PLcName == ""){
              alert('请填写查找的关键字');
              return;
            }
            if(this.value6.length<2){
              alert("请填写起始日期和结束日期");
              return;
            }

            this.setVal();



        },

        formatDate(date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? '0' + m : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;

            var hours = date.getHours();
            hours = hours < 10 ? (' 0' + hours) : ' '+hours;

            var min = date.getMinutes();
            min = min < 10 ? ('0' + min) : min;

            var seconds = date.getMinutes();
            seconds = seconds < 10 ? ('0' + seconds) : seconds;

            return y + '-' + m + '-' + d + hours+ ':' + min + ':' + seconds;
        },

        async getHistoryList(params){
          return await getHistory(params);

        },

        addMore(){

          if(this.hasNext){
            this.setVal();
          }

        }

    },
    props:[ 'plcHalfNum','vendor' ],
    data() {
      return {
        value6: '',
        PLcName:'',
        historyList:[],
        lastRowKey:null,
        hasNext:false,

      }

    }


  }
</script>

<style scope >

.addMore{
    position: fixed;
    bottom: 71px;
    right: 20px;
}
.el-footer{
  display:none;
}
.keyWord{
  display:inline-block;
  width:150px;
}
</style>
