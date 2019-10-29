import {get} from '../http/axios'
export default {
  namespaced:true,
  state:{
    orders:[]
  },
  getters:{
    orderStatusFilter(state){
      return (status)=>{
        return state.orders.filter(item=>item.status === status)
      }
    }
  },
  mutations:{
    refreshOrders(state, orders){
      state.orders = orders;
    }
  },
  actions:{
    // 根据指定员工下的订单信息
    async findWaiterOrders({commit,rootState}){
      let response = await get("/order/query",{waiterId:rootState.user.userinfo.id});
      commit("refreshOrders",response.data)
    },
    // 接受订单
    async acceptOrder({state,dispatch},orderId){
      let response = await get("/order/takeOrder",{orderId});
      dispatch("findWaiterOrders");
      return response;
    },
    // 拒绝订单
    async rejectOrder({dispatch},orderId){
      let response = await get("/order/rejectOrder",{orderId});
      dispatch("findWaiterOrders");
      return response;
    },
    // 完成订单
    async completeOrder({dispatch},orderId){
      let response = await get("/order/serviceCompleteOrder",{orderId});
      dispatch("findWaiterOrders");
      return response;
    }
  }
}