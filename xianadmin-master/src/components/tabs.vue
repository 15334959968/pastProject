<template>
  <div>
        <!--列表-->
    <el-row>
      <el-col :span="24">
        <el-table :data="tabsData" highlight-current-row v-loading="listLoading" style="width: 100%;" max-height="360" :fit="true">
          <el-table-column type="selection"> </el-table-column>
          <el-table-column type="index"> </el-table-column>
          <el-table-column prop="name" label="名称"> </el-table-column>
          <el-table-column prop="type" label="描述"> </el-table-column>
          <el-table-column prop="time" label="创建时间"> </el-table-column>
          <el-table-column prop="time" label="更新时间"> </el-table-column>
          <el-table-column prop="submitter" label="状态"> </el-table-column>
          <el-table-column label="操作" min-width="300">
            <template slot-scope="scope">
              <el-button type="primary"  @click="handleDetail(scope.$index, scope.row)">查看</el-button>
              <el-button type="primary"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button type="danger"  @click="handleDel(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {},
  props: ['tabsData']
}

</script>
<style lang='less' scoped>
</style>