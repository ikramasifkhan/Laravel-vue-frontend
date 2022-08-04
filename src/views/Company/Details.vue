<template>
    <div class="home" id="company">
        <main class="app-content">
            <div class="app-title">
                <div>
                    <h1>Company Details</h1>
                </div>
                <ul class="app-breadcrumb breadcrumb">
                    <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                    <li class="breadcrumb-item"><router-link :to="{name:'company-list'}">Company</router-link></li>
                    <li class="breadcrumb-item"><a href="#">Company Details</a></li>
                </ul>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="tile">
                        <div class="tile-title-w-btn">
                            <h3 class="title">Company Details</h3>
                        </div>
                        <div class="tile-body">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <td><b>Name: </b>{{company.name}}</td>
                                        <td><b>Email: </b>{{company.email}}</td>
                                        <td><b>Mobile: </b>{{company.mobile}}</td>
                                        <td><b>Status: </b>Status</td>
                                    </tr>

                                    <tr>
                                        <td colspan="4"><b>Description: </b>{{company.description}}</td>
                                    </tr>

                                    <tr>
                                        <td colspan="2" v-if="company.added_by"><b>Created By: </b>{{company.added_by.name}}</td>
                                        <td colspan="2" v-if="company.modified_by"><b>Updated By: </b>{{company.modified_by.name}}</td>
                                    </tr>

                                    <tr>
                                        <th colspan="4" class="text-center">Work List</th>
                                    </tr>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                    </tr>
                                    <tr v-for="(work, index) in company.works" :key="work.id">
                                        <td>{{++index}}</td>
                                        <td>{{work.title}}</td>
                                        <td>{{work.description}}</td>
                                        <td>{{work.status}}</td>
                                    </tr>
                                    </thead>
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
    import {mapState, mapActions, mapGetters} from 'vuex'
    export default {
        name: "Details.vue",
        computed:{
            ...mapGetters('company', [
                "company"
            ])
        },
        mounted() {
            this.getCompanyDetails(this.$route.params.companyId)
        },
        methods:{
            ...mapActions('company', [
                "getCompanyDetails"
            ])
        }
    }
</script>

<style scoped>

</style>
