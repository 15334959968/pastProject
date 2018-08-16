<template>
  <el-form class="dialog-form" :rules="rules" :label-width="labelWidth">
    <template v-for="(item, key) in model">
      <el-form-item
          :class="['xa-select', { half: item.inputSize === 'half' }]"
          :key="key"
          :label="item.label"
          :required="item.required"
          v-if="item.inputType === 'select'">
        <el-select :placeholder="item.placeholder" :disabled="disabled" clearable v-model="item.value">
          <el-option
              :key="subItem.value"
              :label="subItem.label || subItem.value"
              :value="subItem.value"
              v-for="subItem of item.option">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item
          :class="['xa-date', { half: item.inputSize === 'half' }]"
          :key="key"
          :label="item.label"
          :required="item.required"
          v-else-if="item.inputType === 'date'">
        <el-date-picker
            :type="item.type"
            :disabled="disabled"
            placeholder="选择日期"
            start-placeholder="开始日期"
            range-separator="至"
            end-placeholder="结束日期"
            v-model="item.value">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="上传资料" :key="key" :required="item.required" v-else-if="item.inputType === 'load'">
        <el-upload
            class="upload-demo"
            :disabled="disabled"
            :action="item.action"
            :on-preview="item.preview"
            :on-remove="item.remove"
            :before-remove="item.beforeRemove"
            multiple
            :limit="item.limit"
            :on-exceed="item.exceed"
            :file-list="item.value">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>

      <el-form-item :label="item.label" :key="key" :required="item.required" v-else-if="item.inputType === 'color'">
        <el-color-picker
          v-model="item.value"
          color-format="rgb"
          show-alpha>
        </el-color-picker>
      </el-form-item>

      <el-form-item
          class="xa-textarea"
          :key="key"
          :label="item.label"
          :required="item.required"
          v-else-if="item.inputType === 'textarea'">
        <el-input type="textarea" :disabled="disabled" :placeholder="item.placeholder" v-model="item.value"></el-input>
      </el-form-item>
      <el-form-item
          :class="['xa-input', { half: item.inputSize === 'half' }]"
          :key="key"
          :label="item.label"
          :required="item.required"
          v-else>
        <el-input :disabled="disabled" :placeholder="item.placeholder" v-model="item.value"></el-input>
      </el-form-item>

    </template>
  </el-form>
</template>

<script>
export default {
  name: 'xa-dialog-form',
  props: {
    model: {
      type: [Object, Array],
      default: () => ({})
    },
    rules: {
      type: [Object, Array],
      default: () => ({})
    },
    labelWidth: {
      type: String
    },
    disabled: {
      type: [String, Boolean]
    }
  }
}
</script>

<style lang="scss">
  .el-dialog .el-dialog__body {
    overflow-y: auto;
    max-height: 50vh;
  }
  .xa-input .el-input,
  .el-textarea {
    width: 96%;
  }
  .dialog-form .half {
    display: inline-block;
    width: 50%;
    &.xa-input .el-input,
    .el-select,
    .el-date-editor {
      width: 90%;
    }
  }
</style>
