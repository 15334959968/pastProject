<template>
  <div>
    <div style="min-width: 1190px;">
      <el-form class="form-height-search" :inline="true">
      <div class="form-model">
          <template v-for="(item, key) in list">
          <el-form-item class="xa-inpu sos-input" :key="key" v-if="item.inputType =='input'">
            <el-input 
            @focus="isshowplaceholder=false"
            @blur="isshowplaceholder=true" 
            v-model="item.value"></el-input>
            <div class="sos-pla" v-if="isshowplaceholder" @click="isshowplaceholder=false">
               <img class="form-add-input-icon" src="../../static/images/sos.png">
              您可以输入<span class="key-input">关键字</span>搜索已有问题～
            </div>
          </el-form-item>
        </template>
        <div class=" right-input">
          <div class="form-add-input" v-if="isadd" @click="$emit('search')">
              <i class="el-icon-search"></i>
              <div class="form-add-input-text">搜索</div>
            </div>
            <div class="form-add-input" v-if="isadd" @click="$emit('plus')">
              <img class="form-add-input-icon" src="../../static/images/icon-add.png" >
              <div class="form-add-input-text">{{addtitle?addtitle:'新增'}}</div>
            </div>
        </div>
      </div>
      </el-form>
    </div>
    <div class="xa-model">
        <el-form class="xa-search" :inline="true">
        <div class="xa-search-body">

          <template v-for="(item, key) in list">
          <el-form-item class="xa-select" :key="key" v-if="item.inputType === 'select'">
            <el-select :placeholder="item.placeholder" clearable v-model="item.value">
              <el-option
                      :key="subItem.value"
                      :label="subItem.label || subItem.value"
                      :value="subItem.value"
                      v-for="subItem of (item.option || [])">
              </el-option>
            </el-select>

            
          </el-form-item>


          <el-form-item class="xa-botton" :key="key" v-if="item.inputType === 'botton'">
            <div class="xa-form-botton"> 
                   <img class="form-add-input-icon"  :src="'../../static/images/'+item.icon" alt=""> 
                    {{item.placeholder}}  
            </div>
  
          </el-form-item>
           <el-form-item class="xa-botton" :key="key" v-if="item.inputType === 'check'">
            <div class="xa-form-botton"> 
                  <el-checkbox v-model="checked"> {{item.placeholder}}  </el-checkbox>
            </div>
          </el-form-item>
        </template>



         <div class="icon-bottons-icons" >
                <template v-if="citem.inputType === 'icon'" v-for="(citem) in list" v:key="index">
                   <img class="form-add-input-icon" @click="ontoggelshowtype(citem.showmodeltype)" :src="'../../static/images/'+citem.icon" /> 
                </template>
                      
             </div>
        </div>
      </el-form>
     
    </div>

  </div>
</template>

<script>
export default {
  name: "xa-search",
  data() {
     return {
        isshowplaceholder:true,
     }
  },
  methods: {
    ontoggelshowtype(type){
       this.$emit('ontoggelshowtype',type)
    },
    
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    },
    addtitle: {
      type: String,
      default: ""
    },
    isadd: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
.xa-model{
  margin-top: 30px;    min-width: 1190px;    overflow: hidden;
}
.xa-search {
  font-weight: bold;
  height: 60px;
  border-radius: 4px;
  line-height: 60px;
  .xa-search-body {
    background: rgba(30, 135, 240, 1);
    position: relative;
  }
  .xa-input,
  .xa-select {
    width: 111px;
  }
  .xa-date {
    width: 30%;
  }
  .el-date-editor {
    width: 95%;
  }
  .el-form-item__content {
    line-height: inherit;
  }
  .el-input__inner {
    border-radius: 0px;
    // border: 0px solid #dcdfe6;
    height: 29px;
    border: none;
    font-size: 16px;
    background-color: #1e87f0;
    line-height: 29px;
    color: #fff;
  }

  .el-form-item {
    margin-bottom: 0px;
  }
  .el-icon-arrow-up:before {
    content: "\E60C";
    color: #fff;
  }
  ::-webkit-input-placeholder {
    color: #fff;
  }
}
.form-add-input {
  width: 135px;
  height: 44px;
  background: #1e87f0;
  border-radius: 4px;
  font-size: 16px;

  color: white;
  margin-right: 30px;

  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: inline-flex;
}
.form-add-input-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.form-add-input-text {
  display: inline-block;
  margin-left: 10px;
}
.form-model {
  display: flex;
  position: relative;
}
.form-sos-botton {
  width: 135px;
  height: 44px;
  border-radius: 4px;

  font-weight: bold;

  font-size: 20px;
}
.form-height-search {
  height: 44px;
  line-height: 44px;
}
.sos-input {
     width: 74%;
  height: 44px;
  margin-right: 20px;
  border-radius: 4px;
  // border: 1px solid rgba(202,202,202,1);
  background-color: #ffffff;
  margin-right: 30px;
  .el-form-item__content {
    width: 100%;
  }
  .sos-pla {
    position: relative;
    top: -31px;
    height: 22px;
    font-size: 16px;
    color: rgba(155, 155, 155, 1);
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    img {
      margin-right: 10px;
    }
  }
  .key-input {
    color: #d21e19;
  }
  .el-input__inner {
    border: 1px solid rgba(202, 202, 202, 1);
    height: 44px;
    line-height: 44px;
  }
}
.xa-form-botton {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  .form-add-input-icon {
    margin-right: 4px;
  }
  .el-checkbox__inner {
    background-color: #ffffff;
    border-color: #ffffff;
    border: none;
  }
  .el-checkbox__label {
    color: #fff !important;
  }
  .el-checkbox__inner {
    width: 20px;
    height: 20px;
  }
  .el-checkbox__inner::after {
    left: 8px;
    top: 5px;
  }
}
.icon-bottons-icons {
  display: inline-flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 0px;
  top: 10px;
  height: 40px;
  line-height: 40px;
  img {
    margin-right: 20px;
  }
}
.right-input{
  display: flex;
  position: absolute;
    right: -27px;
}
</style>

