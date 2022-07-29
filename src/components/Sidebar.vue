<template>
    <div id="sidebar">
        <!-- Sidebar menu-->
        <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
        <aside class="app-sidebar">
            <div class="app-sidebar__user">
                <div>
                    <p class="app-sidebar__user-name">John Doe</p>
                    <p class="app-sidebar__user-designation">Frontend Developer</p>
                </div>
            </div>
            <ul class="app-menu">
                <li><router-link class="app-menu__item active" :to="{ name: 'home'}"><i class="app-menu__icon fa fa-dashboard"></i><span class="app-menu__label">Dashboard</span></router-link></li>
                <li><router-link class="app-menu__item active" :to="{ name: 'company-list'}"><i class="app-menu__icon fa fa-dashboard"></i><span class="app-menu__label">Company</span></router-link></li>
                <li><router-link class="app-menu__item active" :to="{ name: 'user-list'}"><i class="app-menu__icon fa fa-dashboard"></i><span class="app-menu__label">User</span></router-link></li>
            </ul>
        </aside>
    </div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

</style>
