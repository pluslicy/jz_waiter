<template>
  <div class="order">
    <van-nav-bar title="订单"/>
    <van-tabs v-model="active">
      <van-tab title="所有订单">
        <briup-order-pane 
          :data="orders" 
          @accept="acceptHandler"
          @reject="rejectHandler"
          @complete="completeHandler"></briup-order-pane>
      </van-tab>
      <van-tab title="未接订单">
        <briup-order-pane 
          :data="orderStatusFilter('待接单')"
          @accept="acceptHandler"
          @reject="rejectHandler"></briup-order-pane>
      </van-tab>
      <van-tab title="已接订单">
        <briup-order-pane 
          :data="orderStatusFilter('待服务')"
          @complete="completeHandler"></briup-order-pane>
      </van-tab>
      <van-tab title="待确认">
        <briup-order-pane 
          :data="orderStatusFilter('待确认')"></briup-order-pane>
      </van-tab>
      <van-tab title="完成订单">
        <briup-order-pane :data="orderStatusFilter('已完成')"></briup-order-pane>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  data() {
    return {
      active: 0
    };
  },
  created(){
    this.findWaiterOrders();
  },
  computed:{
    ...mapState("order",["orders"]),
    ...mapState("user",["userinfo"]),
    ...mapGetters("order",["orderStatusFilter"])
  },
  methods:{
    ...mapActions("order",["findWaiterOrders","rejectOrder","acceptOrder","completeOrder"]),
    acceptHandler(orderId){
       this.acceptOrder(orderId)
      .then((response)=>{
        this.$toast(response.statusText);
      })
    },
    rejectHandler(orderId){
      this.rejectOrder(orderId)
      .then((response)=>{
        this.$toast(response.statusText);
      })
    },
    completeHandler(orderId){
      this.completeOrder(orderId)
      .then((response)=>{
        this.$toast(response.statusText);
      })
    }
  }

}
</script>