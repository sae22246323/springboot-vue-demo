<template>
    <div style="width: 100%; height: 100vh; background-color: darkslateblue;overflow: hidden">
        <div style="width: 400px; margin: 150px auto">
            <div style="color: #cccccc;font-size: 30px;text-align: center; padding: 30px">欢迎注册</div>
            <el-form ref="form" :model="form" size="normal" :rules="rules">
                <el-form-item prop="name">
                    <div style="color: #cccccc">用户名：</div>
                    <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <div style="color: #cccccc">密码：</div>
                    <el-input v-model="form.password" show-password placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item prop="confirm">
                    <div style="color: #cccccc">确认密码：</div>
                    <el-input v-model="form.confirm" show-password placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button style="width: 100%" @click.native="register">注    册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>


<script>


    import request from "../../utils/request";

    export default {
        name: "Request",
        data(){
            return{
                form:{},
                rules: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ],
                    confirm: [
                        {required: true, message: '请确认密码', trigger: 'blur'},
                    ],
                }
            }
        },
        methods: {
            register () {

                if (this.form.password !== this.form.confirm) {
                    this.$message({
                        type: "error",
                        message: '2次密码输入不一致！'
                    })
                    return
                }

                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        request.post("/api/user/register", this.form).then(res => {
                        if (res.code === '0') {
                            this.$message({
                                type: "success",
                                message: "注册成功"
                            })

                            this.$router.push("/login")  //登录成功之后进行页面的跳转，跳转到主页
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


