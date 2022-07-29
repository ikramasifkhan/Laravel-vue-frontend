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
                                    <input class="form-control" type="text" placeholder="Enter full name">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Email</label>
                                    <input class="form-control" type="email" placeholder="Enter email address">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Address</label>
                                    <textarea class="form-control" rows="4" placeholder="Enter your address"></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Gender</label>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="gender">Male
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="gender">Female
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Identity Proof</label>
                                    <input class="form-control" type="file">
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="checkbox">I accept the terms and conditions
                                        </label>
                                    </div>
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
    export default {
        name: "CreateCompany"
    }
</script>

<style scoped>

</style>
