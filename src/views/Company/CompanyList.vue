<template>
    <div class="home" id="company">
        <main class="app-content">
            <div class="app-title">
                <div>
                    <h1>Company</h1>
                </div>
                <ul class="app-breadcrumb breadcrumb">
                    <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                    <li class="breadcrumb-item"><a href="#" class="disabled">Company</a></li>
                </ul>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="tile">
                        <div class="tile-title-w-btn">
                            <h3 class="title">All Company</h3>
                            <p><router-link class="btn btn-primary icon-btn" :to="{name: 'add-company'}"><i class="fa fa-plus"></i>Add Company</router-link></p>
                        </div>
                        <div class="tile-body">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(company, index) in companyList" :key="company.id">
                                        <td>{{++index}}</td>
                                        <td>{{company.name}}</td>
                                        <td>{{company.email}}</td>
                                        <td>{{company.mobile}}</td>
                                        <td>
                                            <span class="badge badge-primary" v-if="company.status === `active`">Active</span>
                                            <span class="badge badge-danger" v-else>Inactive</span>
                                        </td>
                                        <td>
                                            <router-link :to="{name: 'company-details', params: { companyId: company.id }}" class="btn btn-sm btn-info mr-1" title="View Details"><i class="fa fa-eye mr-0"></i></router-link>
                                            <router-link :to="{name: 'company-edit', params: { companyId: company.id }}" class="btn btn-sm btn-warning mr-1" title="Edit Now"><i class="fa fa-pencil-square-o mr-0 text-white"></i></router-link>
                                            <button class="btn btn-sm btn-danger" title="Delete Now" type="button" @click="deleteCompany(company.id)"><i class="fa fa-trash-o mr-0 text-white" aria-hidden="true"></i></button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    import axios from 'axios'
    export default {
        name: "CompanyList",
        computed:{
            ...mapGetters('company', [
                "companyList"
            ])
        },
        mounted() {
            return this.getCompanyList()
        },
        methods:{
            ...mapActions('company', [
                "getCompanyList"
            ]),

            deleteCompany(companyId){
                axios.delete(`http://127.0.0.1:8000/api/v1/companies/${companyId}`)
                .then(({data})=>{
                    this.getCompanyList()
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
