<template>
  <div class="login">
    <div class="header">
      <div class="logo">logo</div>
      <div class="title"> 家政服务平台·员工端 </div>
    </div>
    <div class="login-content">
      <van-cell-group>
        <van-field v-model="form.username" placeholder="请输入用户名" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="form.password" type="password" placeholder="请输入密码" />
      </van-cell-group>
    </div>
    <div class="login-submit">
      <van-button size="default" round style="width:80%" @click="submitHandler">登录</van-button>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      form:{
        type:"waiter"
      }
    }
  },
  methods:{
    ...mapActions("user",["login"]),
    submitHandler(){
      this.login(this.form)
      .then(()=>{
        this.$router.push("/home")
      })
    }
  }
}
</script>
<style scoped>
.header {
  box-sizing: border-box;
  height: 200px;
  background-color: #7598ff;
  color: #ffffff;
  text-align: center;
  padding:50px 0;
}
.header .logo {
  height: 50px;
  line-height: 50px;
}
.header .title {
  font-size: 28px;
}
.login-content {
  margin-bottom: 1em;
}
.login-submit {
  text-align: center;
}
</style>