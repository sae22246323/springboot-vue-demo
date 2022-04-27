<template>
  <div style="padding: 10px">
<!--    功能区域-->
    <div style="margin: 10px 0">
      <el-button type="primary" @click="add">新增</el-button>
<!--      <el-button type="primary">导入</el-button>-->
<!--      <el-button type="primary">导出</el-button>-->
    </div>


<!--    搜索区域-->
    <div style="margin: 10px 0">
      <el-input v-model="search" placeholder="请输入关键字" style="width: 20%" clearable />
      <el-button type="primary" style="margin-left: 5px" @click="load">查询</el-button>

    </div>
    <el-table :data="tableData" border style="width: 95%">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="id" label="id" sortable/>
        <el-table-column prop="name" label="用户姓名" />
        <el-table-column prop="age" label="用户年龄"  sortable/>
        <el-table-column prop="birthday" label="出生日期" sortable/>
      <el-table-column  label="操作" width="180">
        <template #default="scope">
          <el-button type="primary" plain size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-popconfirm title="确认删除吗?" @confirm="handleDelete(scope.row.id)">
                <template #reference>
                    <el-button type="danger" size="small">删除</el-button>
                </template>
            </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

      <div style="margin: 10px 0">
          <el-pagination
                  v-model:currentPage="currentPage4"
                  v-model:page-size="pageSize4"
                  :page-sizes="[5, 10, 20]"
                  :page-size="pageSzie"
                  :small="small"
                  :disabled="disabled"
                  :background="background"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
          />

          <el-dialog v-model="dialogVisible" title="Tips" width="30%">
              <el-form :model="form" label-width="120px">
<!--                  <el-form-item label="用户ID">-->
<!--                      <el-input v-model="form.id" />-->
<!--                  </el-form-item>-->
                  <el-form-item label="用户姓名">
                      <el-input v-model="form.name" />
                  </el-form-item>
                  <el-form-item label="用户年龄">
                      <el-input v-model="form.age" />
                  </el-form-item>
                  <el-form-item label="出生日期">
                      <el-date-picker v-model="form.birthday" type="date" placeholder="请选择日期" />
                  </el-form-item>

              </el-form>
              <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="save">确认</el-button>
                </span>
              </template>
          </el-dialog>

      </div>
  </div>
</template>

<script>



import request from "../../utils/request";

export default {
  name: 'Home',
  components: {

  },
  data(){
    return{
        form:{},
        dialogVisible:false,
        search:'',
        currentPage4:1,
        pageSize: 10,
        total:0,
      tableData:[]
    }
  },

    created() {
      this.load()
    },


    methods:{
      load(){
          request.get("/api/user",{
              params: {
                  pageNum: this.currentPage4,
                  pageSize: this.pageSize,
                  search: this.search
              }
          }).then(res =>{
              console.log(res)
              this.tableData = res.data.records
              this.total = res.data.total
          })
      },

      add(){
          this.dialogVisible =true
          this.form ={}
      },
      save(){
          if(this.form.id){    //更新
              request.put("/api/user",this.form).then(res => {
                  console.log(res)
                  if (res.code === '0') {
                      this.$message({
                          type: "success",
                          message: "更新成功"
                      })
                  } else {
                      this.$message({
                          type: "error",
                          message: res.msg
                      })
                  }
                  this.load()  //刷新表格数据
                  this.dialogVisible = false  //关闭弹窗
              })
          }  else {   //新增
              request.post("/api/user", this.form).then(res => {
                  console.log(res)
                  if (res.code === '0') {
                      this.$message({
                          type: "success",
                          message: "新增成功"
                      })
                  } else {
                      this.$message({
                          type: "error",
                          message: res.msg
                      })
                  }
                  this.load()  //刷新表格数据
                  this.dialogVisible = false  //关闭弹窗
              })
          }
      },
      handleEdit(row){
          this.form = JSON.parse(JSON.stringify(row))
          this.dialogVisible = true

      },
        handleDelete(id){
          console.log(id)
          request.delete("/api/user/" + id).then(res =>{
              if (res.code === '0' ){
                  this.$message({
                      type:"success",
                      message:"删除成功"
                  })
              } else {
                  this.$message({
                      type:"error",
                      message: res.msg
                  })
              }
              this.load()  //删除之后重新加载数据
            })
        },
      handleSizeChange(pageSize){
          this.pageSize = pageSize
          this.load()

      },
      handleCurrentChange(pageNum){
          this.currentPage4 = pageNum
          this.load()

      },
      currentPage4(){

      },
  }
}
</script>
