<template>
    <div class="problemupdata-model">
       <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >问题管理</el-breadcrumb-item>
        <el-breadcrumb-item class="breadcrumb-select">问题浏览</el-breadcrumb-item>
 
        </el-breadcrumb>

        <div class="backmodel">
            <div class="backmodel-left">
                <i class="el-icon-arrow-left"></i>
            <span class="back" @click="$router.go(-1)">返回上一页</span>
            </div>
             <div class="backmodel-right">
                <i class="el-icon-share"></i>
            <span class="back" @click="$router.go(-1)">分享</span>
            </div>
        </div>
        <div class="problemupdata-page">
        <div class="pro-form-left">
            <el-form class="pro-form" ref="form" :model="form">
              
                <el-form-item>
                    <div class="input-lable-row">
                         问题标题：
                    </div>
                    <!-- <el-input v-model="form.name"></el-input> -->
                    <div class="form-input-item">
                        问题标题问题标题问题标题问题标题问题标题
                    </div>
                </el-form-item>
                <el-form-item >
                     <div class="input-lable-row">
                         问题描述：
                    </div>
                    <!-- <el-input type="textarea" v-model="form.text"></el-input> -->
                     <div class="form-input-item">
                        问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述。 问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述。 问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述。 问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述。
                       <span class="_cp_user">@段新华</span>
                       <span class="_cp_user">@王新华</span>
                       <span class="_cp_user">@段新华</span>
                       <span class="_cp_user">@王新华</span>
                    </div>
                </el-form-item>
                <div class="form-images">
                   <img src="http://static.699pic.com/images/activeimg/5b480d08bfb30.jpg!/both/285x210" alt="">
                   <img src="http://static.699pic.com/images/activeimg/5b4846fa2d33e.jpg!/both/285x210" alt="">
                   <img src="http://static.699pic.com/images/activeimg/5b480d08bfb30.jpg!/both/285x210" alt="">
                   <img src="http://static.699pic.com/images/activeimg/5b4846fa2d33e.jpg!/both/285x210" alt="">
                   <img src="http://static.699pic.com/images/activeimg/5b4846fa2d33e.jpg!/both/285x210" alt="">
                   <img src="http://static.699pic.com/images/activeimg/5b480d08bfb30.jpg!/both/285x210" alt="">
                   <img src="http://static.699pic.com/images/activeimg/5b480d08bfb30.jpg!/both/285x210" alt="">
                   <img src="http://static.699pic.com/images/activeimg/5b480d08bfb30.jpg!/both/285x210" alt="">
                   <img src="http://static.699pic.com/images/activeimg/5b480d08bfb30.jpg!/both/285x210" alt="">
                   <img src="http://static.699pic.com/images/activeimg/5b4846fa2d33e.jpg!/both/285x210" alt="">
                   <img src="http://static.699pic.com/images/activeimg/5b480d08bfb30.jpg!/both/285x210" alt="">
                   <img src="http://static.699pic.com/images/activeimg/5b4846fa2d33e.jpg!/both/285x210" alt="">

                </div>

                <div class="form-hr">
                   <div> 共有（2）条回复</div>
                </div>


                <div class="form-users">
                  <div class="form-user">
                      <div class="form-user-left">
                          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3954487310,1172061713&fm=27&gp=0.jpg" alt="">
                          <div class="form-user-name">谭浩宇</div>
                          
                      </div>
                      <div class="form-user-right">
                          这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复
                          这是一条回复这是一条回复这是一条回复这是一条回复 这是一条回复这是一条回复这是一条回复这是一条回复
                        <span class="_cp_user">@段新华</span>
                        <span class="_cp_user">@王新华</span>
                        <span class="_cp_user">@段新华</span>
                        <span class="_cp_user">@王新华</span>
                      </div>
                        <div class="form-user-time">
                    2018.07.08 13:39
                        </div>
                  </div>

                   <div class="form-user">
                      <div class="form-user-left">
                          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1269396706,3856444001&fm=27&gp=0.jpg" alt="">
                          <div class="form-user-name">谭浩宇</div>
                          
                      </div>
                      <div class="form-user-right">
                          这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复
                          这是一条回复这是一条回复这是一条回复这是一条回复 这是一条回复这是一条回复这是一条回复这是一条回复
                        <span class="_cp_user">@段新华</span>
                        <span class="_cp_user">@王新华</span>
                        <span class="_cp_user">@段新华</span>
                        <span class="_cp_user">@王新华</span>
                      </div>
                        <div class="form-user-time">
                    2018.07.08 13:39
                        </div>
                  </div>

                   <div class="form-user">
                      <div class="form-user-left">
                          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3648306110,2877404956&fm=27&gp=0.jpg" alt="">
                          <div class="form-user-name">谭浩宇</div>
                          
                      </div>
                      <div class="form-user-right">
                          这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复这是一条回复
                          这是一条回复这是一条回复这是一条回复这是一条回复 这是一条回复这是一条回复这是一条回复这是一条回复
                        <span class="_cp_user">@段新华</span>
                        <span class="_cp_user">@王新华</span>
                        <span class="_cp_user">@段新华</span>
                        <span class="_cp_user">@王新华</span>
                      </div>
                        <div class="form-user-time">
                    2018.07.08 13:39
                        </div>
                  </div>
                   

                      </div>
                 


                <div style="margin-top: 20px;    padding-bottom: 10px;">
                <el-input placeholder="请输入内容" >
                    <template slot="append">回复</template>
                </el-input>
                </div>


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
               
            </el-form>
        </div>
         <div class="pro-form-right">
              <div class="pro-right-item-name">
                     <el-switch
                        v-model="form.value2"
                        :active-text="'标记为'+(form.value2?'闭合':'关闭')"
                        active-color="#1E87F0"
                        inactive-color="#dcdfe6">
                        </el-switch>
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
    name: "problemselect";
    return {
      form: {
        value2: false,
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
.pro-right-item-name {
  .el-switch__core {
          position: relative;
    left: 68px;
    top: 5px;
    border-color: rgb(30, 135, 240);
    width: 248px !important;
    height: 40px;
    background: rgba(30, 135, 240, 1);
    border-radius: 22px;
  }

  .el-switch.is-checked .el-switch__core::after {
    left: 100%;
    margin-left: -126px;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 1);
    border-radius: 22px;
  }
  .el-switch__label--right {
    position: relative;
    width: 100%;
    color: #fff;
    font-weight: 700;
  }
  .el-switch .el-switch__label--right {
   left: -57px;
    top: 5px;
  }
  .is-checked .el-switch__label--right {
    left:-21px;
     top: 5px;
  }
  .el-switch__core:after {
    left: 85px;
    border-radius: 100%;
    top: -1px;
    width: 40px;
    height: 40px;
  }
}
</style>