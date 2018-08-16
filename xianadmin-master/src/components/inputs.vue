<template>
  <div>
    <el-dialog title="编辑问题" :visible.sync="editFormVisible" :before-close="handleClose" :close-on-click-modal="false" append-to-body>
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <!-- input框 -->
        <el-form-item label="标题" prop="title">
          <el-input v-model="editForm.title" auto-complete="off"></el-input>
        </el-form-item>
        <!-- select框 -->
        <el-form-item label="标题" prop="title">
          <el-select v-model="editForm.type" placeholder="请选择">
            <el-option
              v-for="item in editForm.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- date日期 -->
        <el-form-item label="提交时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="editForm.time"></el-date-picker>
        </el-form-item>
        <!-- upload上传 -->
        <el-form-item label="上传资料" prop="title">
          <el-upload
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

      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'inputs',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='less' scoped>
</style>