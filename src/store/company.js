import axios from "axios";
export default {
    namespaced:true,
    state: {
        companies: {},
        company: ''
    },
    getters:{
        companyList(state){
            return state.companies;
        },
        company(state){
            return state.company;
        }
    },
    actions:{
        getCompanyList(data){
            axios.get(` http://127.0.0.1:8000/api/v1/companies`)
                .then(function (response) {
                    data.commit("companies", response.data.data)
                })
                .catch(function (error) {
                    console.log(error)
                })
        },

        async getCompanyDetails(data, companyId){
            await axios.get(` http://127.0.0.1:8000/api/v1/companies/${companyId}`)
                .then(function (response) {
                   data.commit("companyDetails", response.data.data)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    },
    mutations:{
        companies(state, data){
            return state.companies = data
        },
        companyDetails(state, data){
            return state.company = data
        }
    }
}
