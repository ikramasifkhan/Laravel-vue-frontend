<template>
    <div id="category-list">
        <main class="app-content">
            <div class="app-title">
                <div>
                    <h1><i class="fa fa-dashboard"></i> Category</h1>
                </div>
                <ul class="app-breadcrumb breadcrumb">
                    <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                    <li class="breadcrumb-item"><router-link :to="{name:'category'}">Category List</router-link></li>
                    <li class="breadcrumb-item"><a href="#">Add Category</a></li>
                </ul>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="tile">
                        <div class="tile-title-w-btn">
                            <h3 class="title">Add Category</h3>
                            <p><router-link class="btn btn-primary icon-btn" :to="{name:'category'}"><i class="fa fa-bar"></i>Category List</router-link></p>
                        </div>
                        <div class="tile-body">
                            <form>
                                <div class="form-group">
                                    <label class="control-label">Category Name</label>
                                    <input v-model="form.name" class="form-control" type="text" placeholder="Enter Category Name">
                                </div>

                                <div class="form-group">
                                    <button class="btn btn-primary" type="submit" @click.prevent="addCategory">Submit</button>
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
    import axios from 'axios'
    export default {
        name: "AddCategoryView",
        data: ()=>({
            form: new Form({
                name: '',
            })
        }),
        methods: {
            addCategory: ()=>{
                axios().post().then()
            }
        },
    }
</script>

<style scoped>

</style>
