<template>
    <div class="home" id="company">
        <main class="app-content">
            <div class="app-title">
                <div>
                    <h1>Company</h1>
                </div>
                <ul class="app-breadcrumb breadcrumb">
                    <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                    <li class="breadcrumb-item"><a href="#">Company</a></li>
                </ul>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="tile">
                        <div class="tile-title-w-btn">
                            <h3 class="title">Add Company  {{this.$route.params.companyId}}</h3>
                            <p><router-link class="btn btn-primary icon-btn" :to="{name: 'company-list'}"><i class="fa fa-bars"></i>Company List</router-link></p>
                        </div>
                        <div class="tile-body">
                            <form>
                                <div class="form-group">
                                    <label class="control-label">Name</label>
                                    <input class="form-control" v-model="company.name" type="text" placeholder="Enter Name">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Email</label>
                                    <input class="form-control" type="email" v-model="company.email" placeholder="Enter email address">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Mobile</label>
                                    <input class="form-control" type="number" v-model="company.mobile"  placeholder="Enter mobile">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Address</label>
                                    <textarea class="form-control" rows="4" v-model="company.description"  placeholder="Enter description"></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Updated By</label>
                                    <select id="cars" v-model="company.modified_by" name="modified_by" class="form-control">
                                        <option selected value="">Select One</option>
                                        <option v-for="user in users" :key="user.id" :value="user.id">{{user.name}}</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary" @click.prevent="updateCompany" type="submit">Submit now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import axios from 'axios'
    import {mapGetters, mapActions} from 'vuex'
    import router from "@/router";
    export default {
        name: "Edit",
        data(){
            return {
                company:{
                    name:"",
                    email: "",
                    mobile:"",
                    description:"",
                    modified_by:""
                }
            }
        },
        computed:{
          ...mapGetters("user", [
              "users"
          ])
        },
        mounted() {
            this.getCompanyById()
            this.getUsers()
        },
        methods:{
            getCompanyById(){
                axios.get(`http://127.0.0.1:8000/api/v1/companies/${this.$route.params.companyId}`)
                .then(({data})=>{
                    console.log(data)
                    this.company.name = data.data.name;
                    this.company.email = data.data.email;
                    this.company.mobile = data.data.mobile;
                    this.company.description = data.data.description;
                    this.company.modified_by = data.data.modified_by.id;
                })
                .catch()
            },
            ...mapActions("user", [
                "getUsers"
            ]),
            updateCompany(){
                let company = this.company
                let id = this.$route.params.companyId
                axios.put(`http://127.0.0.1:8000/api/v1/companies/${id}`, {
                    name: company.name,
                    email: company.email,
                    mobile: company.mobile,
                    description: company.description,
                    modified_by: company.modified_by,
                    id: id
                })
                .then(({data})=>{
                    if(data.success === true){
                        router.push({name: 'company-list'})
                    }
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>
