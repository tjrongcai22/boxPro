<template>
  <div class="login_box"
       v-loading="loading"
       element-loading-text="loading..."
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)"

  >

    <div class="bg_special"></div>
    <div class="login_main">
      <h5>Login</h5>
      <div class="form">
          <el-input
            class="loginName"
            placeholder="请输入内容"
            clearable
            suffix-icon="el-icon-edit"
            v-model="input10"
          >
          </el-input>
          <el-input
            class="loginPwd"
            placeholder="请输入密码"
            suffix-icon="el-icon-printer"
          >
          </el-input>
      </div>
      <div class="loginBtn">
        <el-button type="primary" @click="login">登&nbsp;录</el-button>
      </div>

    </div>

  </div>

</template>
<script>
  export default {
    methods:{

      //登录
      login(){
        this.loading = true;
        setTimeout(()=>{
          this.$router.push('/container');
        },2000);

      }
    },
    data() {
      return {
        input10: '',
        loading:false, //动画
      }
    }
  }

</script>
<style scope>
  *{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .login_box{
    width:100%;
    height:100%;

  }
  .bg_special{
    width:100%;
    height:100%;
    background:url('../lib/img/bg.png') no-repeat;
    -webkit-filter: blur(15px); /* Chrome, Opera */
    -moz-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
  }
  .login_main{
    position: absolute;
    z-index: 10;
    width: 400px;
    height: 250px;
    background: #fff;
    left: 50%;
    top: 45%;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px 15px;
    -moz-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    opacity:0.85;

  }
  form_input:focus{
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
  }
  .el-input__icon{
    color:#232323;
  }

  h5{
    text-align: center;
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .loginName{ margin-bottom:15px;}
  .loginBtn{
    margin-top:20px;
  }
  .loginBtn button{
    background:#516fad !important;
    border:none !important;
    width:100%;
  }
  .loginBtn button:hover{
    background:#3b5998 !important;
  }
  .loginBtn button:active{
    background:#2b457b !important;
  }
  .el-loading-spinner i{
    font-size:35px;
    margin-bottom:5px;
    color:#fff;
  }
  .el-loading-spinner .el-loading-text{
    color:#fff;
    font-size:20px;
  }
</style>
