import vuex from 'vuex'
import axios from "axios";
export default {
    namespaced:true,
    state: {
        users: []
    },
    getters:{
        users(state){
           return state.users;
        }
    },
    actions:{
        getUsers(data){
            axios.get("http://127.0.0.1:8000/api/v1/users")
                .then((response)=>{
                    data.commit("users", response.data.data)
                })
                .catch()
        }
    },

    mutations:{
        users(state, data){
            state.users = data
        }
    }
}
