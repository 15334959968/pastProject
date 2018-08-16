<template>
    <div class="problemupdata-model">
       <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >问题管理</el-breadcrumb-item>
        <el-breadcrumb-item class="breadcrumb-select">新增问题</el-breadcrumb-item>
 
        </el-breadcrumb>

        <div class="backmodel">
            <i class="el-icon-arrow-left"></i>
            <span class="back" @click="$router.go(-1)">返回上一页</span>
        </div>
        <div class="problemupdata-page">
        <div class="pro-form-left">
            <el-form class="pro-form" ref="form" :model="form">
              
                <el-form-item>
                    <div class="input-lable-row">
                         问题标题：
                    </div>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item >
                     <div class="input-lable-row">
                         问题描述：
                    </div>
                    <el-input type="textarea" v-model="form.text"></el-input>
                </el-form-item>
                <div class="form-icons">
                    <span class="hujiao-icon">@</span>
                    <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList2"
                            list-type="picture">
                        <icon class="el-icon-picture"></icon>
                    </el-upload>

                </div>
                <div class="submit-foter">
                    <a @click="onSubmit" class="submit-botton">保存</a>
                </div>
            </el-form>
        </div>
         <div class="pro-form-right">
             <div class="pro-form-right-top">
                 请选择以下项目：
             </div>
             <div class="pro-form-right-item">
                 <div class="pro-right-item-name">讨论组</div>
                 <div class="pro-right-item-select">
                     <el-dropdown>
                          <span class="el-dropdown-link">
                            全体人员<i class="el-icon-caret-bottom el-icon--right select-icon"></i>
                          </span>
                         <el-dropdown-menu slot="dropdown">
                             <el-dropdown-item>项目组</el-dropdown-item>
                             <el-dropdown-item>销售组</el-dropdown-item>
                             <el-dropdown-item>产品组</el-dropdown-item>
                         </el-dropdown-menu>
                     </el-dropdown>
                 </div>
             </div>

             <div class="pro-form-right-item">
                 <div class="pro-right-item-name">责任人</div>
                 <div class="pro-right-item-select">
                     <el-dropdown>
                          <span class="el-dropdown-link">
                            段新华<i class="el-icon-caret-bottom el-icon--right select-icon"></i>
                          </span>
                         <el-dropdown-menu slot="dropdown">
                             <el-dropdown-item>段新华</el-dropdown-item>
                             <el-dropdown-item>宋超 </el-dropdown-item>
                             <el-dropdown-item>黄萍</el-dropdown-item>
                         </el-dropdown-menu>
                     </el-dropdown>
                 </div>
             </div>

             <div class="pro-form-right-item">
                 <div class="pro-right-item-name">模型图层</div>
                 <div class="pro-right-item-select">
                     <el-dropdown>
                          <span class="el-dropdown-link">
                            E地块<i class="el-icon-caret-bottom el-icon--right select-icon"></i>
                          </span>
                         <el-dropdown-menu slot="dropdown">
                             <el-dropdown-item>E地块</el-dropdown-item>
                             <el-dropdown-item>G地块 </el-dropdown-item>
                             <el-dropdown-item>N地块</el-dropdown-item>
                             <el-dropdown-item>F地块</el-dropdown-item>
                             <el-dropdown-item>J地块</el-dropdown-item>
                             <el-dropdown-item>K地块</el-dropdown-item>
                         </el-dropdown-menu>
                     </el-dropdown>
                 </div>
             </div>

             <div class="pro-form-right-item">
                 <div class="pro-right-item-name">紧急程度</div>
                 <div class="pro-right-item-select">
                     <el-dropdown>
                          <span class="el-dropdown-link">
                            简单<i class="el-icon-caret-bottom el-icon--right select-icon"></i>
                          </span>
                         <el-dropdown-menu slot="dropdown">
                             <el-dropdown-item>简单</el-dropdown-item>
                             <el-dropdown-item>一般</el-dropdown-item>
                             <el-dropdown-item>复杂</el-dropdown-item>
                         </el-dropdown-menu>
                     </el-dropdown>
                 </div>
             </div>


             <div class="pro-form-right-item">
                 <div class="pro-right-item-name">问题类型</div>
                 <div class="pro-right-item-select">
                     <el-dropdown>
                          <span class="el-dropdown-link">
                            无<i class="el-icon-caret-bottom el-icon--right select-icon"></i>
                          </span>
                         <el-dropdown-menu slot="dropdown">
                         </el-dropdown-menu>
                     </el-dropdown>
                 </div>
             </div>



             <div class="pro-form-right-item">
                 <div class="pro-right-item-name">问题专业</div>
                 <div class="pro-right-item-select">
                     <el-dropdown>
                          <span class="el-dropdown-link">
                            无<i class="el-icon-caret-bottom el-icon--right select-icon"></i>
                          </span>
                         <el-dropdown-menu slot="dropdown">
                         </el-dropdown-menu>
                     </el-dropdown>
                 </div>
             </div>



         </div>
     </div>
    </div>
    
</template>

<script>
export default {
  data() {
    name: "problemupdata";
    return {
      form: {
        isCollapse: false,
        name: "",
        text: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$router.back();
    }
  }
};
</script>
<style lang="scss">
</style>