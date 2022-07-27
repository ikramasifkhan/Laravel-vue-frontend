<template>
    <div id="category-list">
        <main class="app-content">
            <div class="app-title">
                <div>
                    <h1><i class="fa fa-dashboard"></i> Category</h1>
                </div>
                <ul class="app-breadcrumb breadcrumb">
                    <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                    <li class="breadcrumb-item"><a href="#">Category List</a></li>
                </ul>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="tile">
                        <div class="tile-title-w-btn">
                            <h3 class="title">Category List</h3>
                            <p><router-link class="btn btn-primary icon-btn" :to="{name:'category-add'}"><i class="fa fa-plus"></i>Add Category</router-link></p>
                        </div>
                        <div class="tile-body">
                            <b>Card with action button </b><br>
                            Hey there, I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.


                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "CategoryListView"
    }
</script>

<style scoped>

</style>
