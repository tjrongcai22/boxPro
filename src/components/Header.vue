<template>

  <header class="el-header">

    <p class="logo"><img src="../lib/img/rongcaiyun.svg" /></p>

    <div class="userInfo">

      <el-dropdown size="medium" trigger="click">

        <el-button type="primary">
          用户信息<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>

  </header>

</template>
<script>
  export default{

    methods:{
      //登出
      logout(){
        this.$router.push('/login');

      },

      //查看历史数据
      selectHistory(){
        this.$router.push({
            path:'/container/historyList',
            name:'history'
        });
      },

    }
  }
</script>
<style scope>
  .el-header{
    height: 60px;
    border-bottom:1px solid #ccc;
  }
  .logo{
    height: 100%;
    display: inline-block;
    padding: 10px 0;
    box-sizing: border-box;
  }
  .logo img{
    height:100%;
  }
  .userInfo{
    float:right;
    margin-top: 9px;
  }
  .userInfo button{
    background: #69dad7;
    border: none;
  }
  .userInfo button:hover,.userInfo button:focus{
    background:#5dc7c4;
    border:none !important;
  }
  .userInfo button:active{
    background:#43bab7;
  }
</style>
