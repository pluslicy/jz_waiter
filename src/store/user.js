import {get,post_json} from '../http/axios'
export default {
  namespaced:true,
  state:{
    userinfo:{
    }
  },
  mutations:{
    refreshUser(state,userinfo){
      state.userinfo = userinfo;
    }

  },
  actions:{
    async login({dispatch},data){
      let result = await post_json("/user/login",data);
      let token = result.data.token;
      dispatch("getUserInfo",token)
    },
    async getUserInfo({commit,dispatch},token){
      let result = await get("/user/info",{token});
      commit("refreshUser",result.data);
    },
  }
}