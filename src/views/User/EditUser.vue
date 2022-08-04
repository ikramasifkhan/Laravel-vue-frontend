<template>
    <div class="home" id="user">
        <main class="app-content">
            <div class="app-title">
                <div>
                    <h1>User</h1>
                </div>
                <ul class="app-breadcrumb breadcrumb">
                    <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                    <li class="breadcrumb-item"><router-link :to="{name: 'user-list'}">User List</router-link></li>
                    <li class="breadcrumb-item"><a href="#">Edit User</a></li>
                </ul>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="tile">
                        <div class="tile-title-w-btn">
                            <h3 class="title">Edit User {{this.$route.params.userId}}</h3>
                            <p><router-link class="btn btn-primary icon-btn" :to="{name: 'user-list'}">
                                <i class="fa fa-bars"></i>User List</router-link>
                            </p>
                        </div>
                        <div class="tile-body">
                            <form>
                                <div class="form-group">
                                    <label class="control-label">Name</label>
                                    <input class="form-control" v-model="user.name" name="name"  type="text" placeholder="Enter full name">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Email</label>
                                    <input class="form-control" v-model="user.email" name="email" type="email" placeholder="Enter email address">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Mobile</label>
                                    <input class="form-control" v-model="user.mobile" name="mobile"  type="text" placeholder="Enter mobile number">
                                </div>

                                <div class="form-group">
                                    <select v-model="user.status" id="cars" name="status" class="form-control">
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>


                                <div class="form-group">
                                    <button class="btn btn-primary" type="submit" @click.prevent="updateUser">Update now</button>
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
    import {mapActions, mapGetters, mapState} from 'vuex'
    import axios from 'axios'
    import router from "@/router";
    export default {
        name: "EditUser",

        computed:{
            ...mapState('user', [
                "user"
            ]),
        },
        mounted() {
            this.getSingleUser(this.$route.params.userId)
        },
        methods:{
            ...mapActions('user', [
                "getSingleUser"
            ]),
            updateUser(){
                axios.put(`http://127.0.0.1:8000/api/v1/users/${this.$route.params.userId}`,{
                    name:this.user.name,
                    email: this.user.email,
                    mobile: this.user.mobile,
                    id: this.user.id,
                    status: this.user.status
                })
                    .then((response)=>{
                        router.push({name: 'user-list'})
                    })
                    .catch()
            }
        }
    }
</script>

<style scoped>

</style>
