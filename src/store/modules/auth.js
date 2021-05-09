import auth from '../../api/auth';

const state = {
    user :null,
    isLogin:false
}
const getters = {
    user : state => state.user,
    isLogin :state => state.isLogin
}
const mutations = {
    setUser(state,payload){
        state.user = payload.user
    },
    setLogin(state,payload){
        state.isLogin = payload.isLogin
    }
}
const actions = {
    login({commit} , {username ,password}){
        return auth.login({username ,password})
            .then(res =>{
                commit('setUser',{user: res.data})
                commit('setLogin',{isLogin : true})
            })
    },
    register({commit} , {username ,password}){
        return auth.register({username ,password})
            .then(res =>{
                commit('setUser',{user:res.data})
                commit('setLogin',{isLogin:true})
            })
    },
    async logout({commit}){
        await auth.logout()
        commit('setUser',{user:null})
        commit('setLogin',{isLogin:false})
    },
    async checkLogin({commit,state}){
        if(state.isLogin) return true
        let res = await auth.getInfo()
        commit('setLogin',{isLogin:res.isLogin})
        if(!state.isLogin) return false
        commit('setUser',{user:res.data})
        return true
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}