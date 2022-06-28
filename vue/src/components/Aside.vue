<template>
    <div>
        <el-menu
                style="width: 200px; min-height: calc(100vh - 50px)"
<<<<<<< HEAD
                default-active="user"
                :default-openeds="[1]"
                class="el-menu-vertical-demo">
            <el-sub-menu index="1">
                <template #title>系统管理</template>
                <el-menu-item index="user" :route="{path:'/'}">用户管理</el-menu-item>
            </el-sub-menu>
<!--            <el-menu-item index="data" :route="{path:'/'}">数据管理</el-menu-item>-->
=======
                :default-active="path"
                router
                class="el-menu-vertical-demo">
            <el-sub-menu index="1">
                <template #title>系统管理</template>
                <el-menu-item index="/user">用户管理</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/book">书籍管理</el-menu-item>
            <el-menu-item index="/news">新闻管理</el-menu-item>
>>>>>>> e061769 (2022.6.28)
        </el-menu>
    </div>
</template>

<script>
    export default {
<<<<<<< HEAD
        name: "Aside"
=======
        name: "Aside",
        data(){
            return{
                path: this.$route.path     //设置默认高亮的菜单
            }
        }
>>>>>>> e061769 (2022.6.28)
    }
</script>

<style scoped>

</style>