<template>
  <div id="my">
    <van-nav-bar fixed :title="'我的'" />
    <div class="content">
      <!--  -->
      <div class="photo">
        <div class="photo_wrapper">
          <img src="../../assets/images/home_23.png" alt="">
        </div>
        <div style="text-align:center;line-height:3em">{{userinfo.name}}</div>
      </div>
      <!--  -->
      <div class="line">
        我的收入
      </div>
       <div class="line">
        我的订单
      </div>
      <div class="line" @click="logoutHandler">
        退出
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  computed:{
    ...mapState("user",["userinfo"])
  },
  methods:{
    logoutHandler(){
      this.$router.push("/login")
    }
  }
}
</script>
<style scoped>
#my .content {
  padding-top: 46px;
}
.photo {
  padding-top: 2em;
}
.photo .photo_wrapper{
  margin: 0 auto;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  box-sizing: border-box;
  border:1px solid #eedded;
  overflow:hidden;
  padding: 1em;

}
.photo img {
 width: 100%;
}
.line {
  line-height: 4em;
  border-bottom: 1px solid #ededed;
  padding-left: 4em;
}
</style>