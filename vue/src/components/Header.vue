<template>
    <div style="height: 50px; line-height:50px; border-bottom: 1px solid #cccccc; display: flex">
        <div style="width: 200px; padding-left:30px; font-weight: bold; color: dodgerblue">后台管理</div>
        <div style="flex: 1"></div>
        <div style="width: 100px">
            <el-dropdown>
                <span class="el-dropdown-link">
<<<<<<< HEAD
                  <br>张三
                  <el-icon class="el-icon--right">
                    <arrow-down/>
                  </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
=======
                    <el-avatar :size="30" style="position: relative; top: 10px"></el-avatar>
                    {{ user.name }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click.native="$router.push('/person')">个人中心</el-dropdown-item>
>>>>>>> e061769 (2022.6.28)
                        <el-dropdown-item @click.native="$router.push('/login')">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script>



    export default {
<<<<<<< HEAD
        name: "Header"
=======
        name: "Header",
        props: ['user'],
        data() {
            return {
                user:{}
            }
        },
        created() {
            let userStr = sessionStorage.getItem("user") || "{}"
            this.user = JSON.parse(userStr)
        }
>>>>>>> e061769 (2022.6.28)
    }
</script>


<style scoped>

</style>

