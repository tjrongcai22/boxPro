<template>
  <section>
    <p>
      <el-button type="primary" plain @click.stop="getData" :loading="loads">读取名称</el-button>
      <el-button type="primary" plain v-if="showRefDataBtn" >数据刷新</el-button>
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
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

    </section>

  </section>

</template>
<script>
    import {getList} from '../api/ajax.js'
    export default{
    created(){
      let { halfSn,pro } = this.$route.query;
      let obj = {
        halfSn,
        pro
      }
      this.getInfoById(obj);

    },

    methods:{

      //获取ajax
      async getInfoById(obj){
//        console.log(obj)
//        const res = await getList(null)
//        console.log(res)

        this.showRefDataBtn = false;
        this.$emit('loading-msg',true)

        setTimeout(()=>{
          this.$emit('loading-msg',false)
        },2000);


      },

      //读取名称获取ajax
      getData(){
        this.loads = true;
        setTimeout(()=>{
          this.loads = false;
          this.showRefDataBtn = true;
        },2000);
      },

      //操作列表
      deleteRow(index, rows) {
        console.log(index)


      }

    },

    props:[ 'halfSn','pro' ],
    watch:{
      $route(){
        let obj = {
          halfSn:this.halfSn,
          pro:this.pro
        }
        this.getInfoById(obj);
      }

    },
    data(){
      return {
        showRefDataBtn:false, //数据刷新按钮
        loads:false,
        tableData4: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
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
