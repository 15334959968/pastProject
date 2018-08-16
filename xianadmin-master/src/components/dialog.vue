<template>

    <el-dialog :title="dialogTitle" :visible.sync="FormVisible" :close-on-click-modal="false" :show-close="false" :close-on-press-escape="false" append-to-body >
      <el-form :model="Form" label-width="80px" :rules="FormRules" ref="Form">
        <el-form-item label="问题标题" >
          <el-input v-model="Form.title"  style="width: 96%"></el-input>
        </el-form-item>
        <el-form-item label="问题内容">
          <el-input type="textarea" v-model="Form.content" style="width: 96%"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="问题类型">
              <el-select v-model="Form.type1" placeholder="请选择" style="width: 90%">
                <el-option
                        v-for="item in Form.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="问题级别">
              <el-select v-model="Form.level1" placeholder="请选择" style="width: 90%">
                <el-option
                        v-for="item in Form.level"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="问题状态">
              <el-select v-model="Form.state1" placeholder="请选择" style="width: 90%">
                <el-option
                        v-for="item in Form.state"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="解决时间" >
              <el-date-picker
                      v-model="Form.settlingTime"
                      type="date"
                      placeholder="解决日期" style="width: 90%" >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" >
            <el-form-item label="提交人">
              <el-select v-model="Form.submitter" placeholder="选择提交人" style="width: 90%">
                <el-option
                        v-for="item in Form.users"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12" >
            <el-form-item label="责任人" >
              <el-select v-model="Form.submitter1" placeholder="选择责任人" style="width: 90%">
                <el-option
                        v-for="item in Form.users"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="问题状态">
              <el-select v-model="Form.state1" placeholder="请选择" style="width: 90%">
                <el-option
                        v-for="item in Form.state"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="解决时间" >
              <el-date-picker
                      v-model="Form.settlingTime"
                      type="date"
                      placeholder="解决日期" style="width: 90%" >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="问题地块">
              <el-select v-model="Form.ground1" placeholder="请选择" style="width: 90%">
                <el-option
                        v-for="item in Form.ground"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="模型图层" >
              <el-select v-model="Form.value" placeholder="请选择" style="width: 90%">
                <el-option
                        v-for="item in Form.layer"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="上传附件" style="width: 96%">
          <el-upload style="float: right;"
                     class="upload-demo"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :before-remove="beforeRemove"
                     multiple
                     :limit="3"
                     :on-exceed="handleExceed"
                     :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="模型标注">
          <el-input v-model="Form.label" style="width: 96%"></el-input>
        </el-form-item>






      </el-form>
      <div slot="footer111" class="dialog-footer">
        <el-button @click.native="FormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="Submit" :loading="Loading">提交</el-button>
      </div>
    </el-dialog>



</template>

<script>
export default {
  props:{
      dialogTitle:{
        type:String,
        default:'问题'
      },
      FormVisible: {
      type:Boolean,
      default:false
    }

  },

  data () {

    return {
      Loading: false,
      FormRules: {
        title: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
      },
      //新增界面数据
      Form: {
        title: '',
        time: '',
        content: '',
        options: [{
          value: '选项1',
          label: '结构问题'
        },{
          value: '选项2',
          label: '进度问题'
        }, {
          value: '选项3',
          label: '机电问题'
        }],
        peoples: [{
          value: '选项1',
          label: '张三'
        },{
          value: '选项2',
          label: '李四'
        }, {
          value: '选项3',
          label: '王五'
        }],
        builder: [{
          value: '选项1',
          label: '施工单位一'
        },{
          value: '选项2',
          label: '施工单位二'
        }, {
          value: '选项3',
          label: '施工单位三'
        }]

      }

    };
  },

  components: {},

  computed: {},

  mounted () {
  },

  methods: {},

}


</script>
<style lang='less' scoped>
    .elWidth{width:8%}
</style>
