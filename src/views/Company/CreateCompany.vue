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
                            <h3 class="title">Add Company</h3>
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
                                    <input class="form-control" type="number" v-model="company.mobile" placeholder="Enter mobile">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Address</label>
                                    <textarea class="form-control" rows="4" v-model="company.description" placeholder="Enter description"></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Added By</label>
                                    <select id="cars" v-model="company.added_by" name="added_by" class="form-control">
                                        <option selected value="">Select One</option>
                                        <option v-for="user in users" :key="user.id" :value="user.id">{{user.name}}</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary" type="submit" @click.prevent="createCompany">Submit now</button>
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
    import {mapGetters, mapActions} from 'vuex'
    import axios from 'axios'
    import router from "@/router";
    import company from "@/store/company";
    export default {
        name: "CreateCompany",
        data(){
          return {
              company: {
                  name: '',
                  email: '',
                  mobile: '',
                  description: '',
                  added_by :''
              }
          }
        },
        computed:{
            ...mapGetters('user', [
                "users"
            ])
        },
        mounted() {
            this.getUsers()
        },
        methods:{
            async createCompany(){
                // let inputData = this.company
                await axios.post(`http://127.0.0.1:8000/api/v1/companies`, {
                    name: this.company.name,
                    email: this.company.email,
                    mobile: this.company.mobile,
                    description: this.company.description,
                    added_by: this.company.added_by,
                })
                .then( ({data}) =>{
                    if(data.success === true){
                        this.company = {};

                        router.push({name: 'company-list'})
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
            },
            ...mapActions("user", [
                "getUsers"
            ])
        }
    }
</script>

<style scoped>

</style>
