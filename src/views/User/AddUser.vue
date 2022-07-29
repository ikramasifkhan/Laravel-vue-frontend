<template>
    <div class="home" id="company">
        <main class="app-content">
            <div class="app-title">
                <div>
                    <h1>User</h1>
                </div>
                <ul class="app-breadcrumb breadcrumb">
                    <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                    <li class="breadcrumb-item"><router-link :to="{name: 'user-list'}">User List</router-link></li>
                    <li class="breadcrumb-item"><a href="#">Add User</a></li>
                </ul>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="tile">
                        <div class="tile-title-w-btn">
                            <h3 class="title">Add User</h3>
                            <p><router-link class="btn btn-primary icon-btn" :to="{name: 'user-list'}">
                                <i class="fa fa-bars"></i>User List</router-link>
                            </p>
                        </div>
                        <div class="tile-body">
                            <form>
                                <div class="form-group">
                                    <label class="control-label">Name</label>
                                    <input class="form-control" name="name" v-model="form.name" type="text" placeholder="Enter full name">
                                    <div v-if="form.errors.has('name')" class="form-control-feedback text-danger" v-html="form.errors.get('username')" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Email</label>
                                    <input class="form-control" name="email" v-model="form.email" type="email" placeholder="Enter email address">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Mobile</label>
                                    <input class="form-control" name="mobile" v-model="form.mobile" type="text" placeholder="Enter mobile number">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Password</label>
                                    <input class="form-control" name="password" v-model="form.password" type="password" placeholder="Enter password">
                                </div>


                                <div class="form-group">
                                    <button class="btn btn-primary" type="submit" @click.prevent="addUser">Submit</button>
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
    import Form from 'vform'

    export default {
        name: "AddUser",
        data:function() {
            return {
                form: new Form({
                    name: '',
                    email: '',
                    mobile: '',
                    password: '',
                })
            }
        },
        methods:{
            async addUser(){
                await this.form.post('http://127.0.0.1:8000/api/v1/users')
                .then(function (response) {
                    console.log(this)
                })
                .catch(function (error) {
                    console.log(this)
                })
            }
        }
    }
</script>

<style scoped>

</style>
