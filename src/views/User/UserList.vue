<template>
    <div class="home" id="company">
        <main class="app-content">
            <div class="app-title">
                <div>
                    <h1>Company</h1>
                </div>
                <ul class="app-breadcrumb breadcrumb">
                    <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                    <li class="breadcrumb-item"><a href="#">User</a></li>
                </ul>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="tile">
                        <div class="tile-title-w-btn">
                            <h3 class="title">All Users</h3>
                            <p><router-link class="btn btn-primary icon-btn" :to="{name: 'add-user'}"><i class="fa fa-plus"></i>Add User</router-link></p>
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
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(user, index) in users" :key="user.id">
                                        <td>{{++index}}</td>
                                        <td>{{user.name}}</td>
                                        <td>{{user.email}}</td>
                                        <td>{{user.mobile}}</td>
                                        <td>
                                            <span v-if="user.status===`active`" class="badge badge-pill badge-primary">Active</span>
                                            <span v-else class="badge badge-pill badge-danger">Inactive</span>
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-danger" title="Delete Now" @click="deleteUser(user.id)"><i class="fa fa-trash-o mr-0"></i></button>
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
    import vueToast from 'vue-toastr'
    import axios from 'axios'
    export default {
        name: "UserList",
        computed:{
            ...mapGetters('user', [
                "users"
            ])
        },
        mounted() {
            this.getUsers()
        },
        methods:{
            ...mapActions('user', [
                "getUsers"
            ]),
            deleteUser(userId){
                axios.delete(`http://127.0.0.1:8000/api/v1/users/${userId}`)
                .then(({data})=>{
                    this.getUsers()
                    vueToast.info("Hai hello")
                })
                .catch()
            }
        }
    }
</script>

<style scoped>

</style>
