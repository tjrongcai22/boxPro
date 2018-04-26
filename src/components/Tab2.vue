<template>
  <section>
    <p>
      <el-button type="primary" plain @click.stop="getData">生成更新列表</el-button>
      <el-button type="primary" plain :loading="ifLoading" @click.stop="initBox" >重启设备</el-button>

    </p>
    <section class="tab1_table">


      <el-table
        :data="tableData4"
        style="width: 100%"
        max-height="350">
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData4)"
              type="text"
              size="small">
              下载
            </el-button>
            <el-button
              @click.native.prevent="upload(scope.$index, tableData4)"
              type="text"
              size="small">
              上传
            </el-button>

          </template>
        </el-table-column>
      </el-table>


    </section>
    <iframe src="" name="show"  style="width:0;height:0"></iframe>
  </section>

</template>
<script>
  import {selectBoxByPlcHalfNum} from '../api/ajax.js'
  export default{
    created(){
      let { halfSn,pro } = this.$route.query;
      let obj = {
        halfSn,
        pro
      }
      this.getInfoById(obj);
    },
    props:[ 'halfSn','pro' ],
    methods:{
      //获取ajax
      async getInfoById(obj){
        let list = await selectBoxByPlcHalfNum(obj);
        console.log(list)

      },

      //读取名称获取ajax
      getData(){

      },

      //操作列表
      deleteRow(index, rows) {
        console.log(rows[index].id)


      },

      //plc上传文件
      upload(index , rows){


      },

      //重启设备
      initBox(){
        this.ifLoading = true;

        setTimeout(()=>{
          this.ifLoading = false;
        },2000);

      }

    },
    watch:{
      $route(){
      //halfSn,pro
        let obj = {
          halfSn:this.halfSn,
          pro:this.pro
        }
        this.getInfoById(obj);
      }

    },
    data(){
      return {
        ifLoading:false,
        tableData4: [{
          id:'1',
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id:'2',
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id:'3',
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id:'4',
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id:'5',
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id:'6',
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id:'7',
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]

      }

    }


  }
</script>
<style scope>
  .tab1_table{
    border: 1px solid #ebeef5;
    margin-top: 20px;
  }


</style>
