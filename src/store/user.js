import vuex from 'vuex'
import axios from "axios";
export default {
    namespaced:true,
    state: {
        users: [],
        user: ''
    },
    getters:{
        users(state){
           return state.users;
        },
        user(state){
          return state.user
        }
    },
    actions:{
        getUsers(data){
            axios.get("http://127.0.0.1:8000/api/v1/users")
                .then((response)=>{
                    data.commit("users", response.data.data)
                })
                .catch()
        },
        getSingleUser(data, userId){
            axios.get(`http://127.0.0.1:8000/api/v1/users/${userId}`)
                .then((response)=>{
                    data.commit("singleUser", response.data.data)
                })
                .catch()
        }
    },

    mutations:{
        users(state, data){
            state.users = data
        },
        singleUser(state, data){
            state.user = data
        }
    }
}
