"use strict";(self["webpackChunkspringboot_vue_demo"]=self["webpackChunkspringboot_vue_demo"]||[]).push([[555],{5555:function(e,o,r){r.r(o),r.d(o,{default:function(){return g}});var l=r(6252);const s={style:{width:"100%",height:"100vh","background-color":"darkslateblue",overflow:"hidden"}},t={style:{width:"400px",margin:"150px auto"}},a=(0,l._)("div",{style:{color:"#cccccc","font-size":"30px","text-align":"center",padding:"30px"}},"欢迎登录",-1),u=(0,l._)("div",{style:{color:"#cccccc"}},"用户名：",-1),d=(0,l._)("div",{style:{color:"#cccccc"}},"密码：",-1),m=(0,l.Uk)("登 录");function n(e,o,r,n,i,c){const p=(0,l.up)("el-input"),f=(0,l.up)("el-form-item"),g=(0,l.up)("el-button"),h=(0,l.up)("el-form");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",t,[a,(0,l.Wm)(h,{ref:"form",model:i.form,size:"normal",rules:i.rules},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{prop:"name"},{default:(0,l.w5)((()=>[u,(0,l.Wm)(p,{modelValue:i.form.name,"onUpdate:modelValue":o[0]||(o[0]=e=>i.form.name=e),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(f,{prop:"password"},{default:(0,l.w5)((()=>[d,(0,l.Wm)(p,{modelValue:i.form.password,"onUpdate:modelValue":o[1]||(o[1]=e=>i.form.password=e),"show-password":"",placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,{style:{width:"100%"},onClick:c.login},{default:(0,l.w5)((()=>[m])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])])}var i=r(5446),c={name:"Login",data(){return{form:{},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login(){this.$refs["form"].validate((e=>{e&&i.Z.post("/user/login",this.form).then((e=>{"0"===e.code?(this.$message({type:"success",message:"登录成功"}),this.$router.push("/")):this.$message({type:"error",message:e.msg})}))}))}}},p=r(3744);const f=(0,p.Z)(c,[["render",n]]);var g=f}}]);
//# sourceMappingURL=555.637b6a8c.js.map