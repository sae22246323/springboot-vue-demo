<template>
    <div style="width: 100%; height: 100vh; background-color: darkslateblue;overflow: hidden">
        <div style="width: 400px; margin: 150px auto">
            <div style="color: #cccccc;font-size: 30px;text-align: center; padding: 30px">欢迎登录</div>
            <el-form ref="form" :model="form" size="normal" :rules="rules">
                <el-form-item prop="name">
                    <div style="color: #cccccc">用户名：</div>
                    <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <div style="color: #cccccc">密码：</div>
                    <el-input v-model="form.password" show-password placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button style="width: 100%" @click.native="login">登  录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>


<script>


    import request from "../../utils/request";

    export default {
        name: "Login",
        data() {
            return {
                form: {},
                rules: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ],
                },
            }
        },
        methods: {
            login() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
<<<<<<< HEAD
                        request.post("/api/user/login", this.form).then(res => {
=======
                        request.post("/user/login", this.form).then(res => {
>>>>>>> e061769 (2022.6.28)
                            if (res.code === '0') {
                                this.$message({
                                    type: "success",
                                    message: "登录成功"
                                })
<<<<<<< HEAD

=======
                                sessionStorage.setItem("user", JSON.stringify(res.data))  //缓存用户信息
>>>>>>> e061769 (2022.6.28)
                                this.$router.push("/")  //登录成功之后进行页面的跳转，跳转到主页
                            } else {
                                this.$message({
                                    type: "error",
                                    message: res.msg
                                })
                            }
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>


