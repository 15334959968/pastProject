<template>
  <section class="level-manage">
    <el-button type="primary" icon="el-icon-plus" @click="add">新增项目</el-button>

    <el-table :data="list" highlight-current-row v-loading="listLoading" max-height="400">
      <el-table-column type="selection" min-width="30"> </el-table-column>
      <el-table-column type="index" min-width="30"> </el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="statusDesc" label="状态"> </el-table-column>
      <el-table-column prop="remark" label="备注"> </el-table-column>
      <el-table-column prop="createDate" label="创建时间"> </el-table-column>
      <el-table-column prop="updateDate" label="更新时间"> </el-table-column>
      <el-table-column label="操作" min-width="300">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="detail(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
        @size-change="getLevel"
        @current-change="getLevel"
        :current-page.sync="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total=total>
    </el-pagination>

    <el-dialog title="新增项目" :visible.sync="addVisible" :close-on-click-modal="false" append-to-body>
      <xa-dialog-form :model="addForm" label-width="80px"></xa-dialog-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取消</el-button>
        <el-button type="primary" @click="saveLevel(addForm)">提交</el-button>
      </div>
    </el-dialog>

    <el-dialog title="项目详情" :visible.sync="detailVisible" append-to-body>
      <xa-dialog-form :model="detailForm" :disabled="true" label-width="80px"></xa-dialog-form>
    </el-dialog>

    <el-dialog title="项目编辑" :visible.sync="editVisible" :close-on-click-modal="false" append-to-body>
      <xa-dialog-form :model="editForm" label-width="80px"></xa-dialog-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取消</el-button>
        <el-button type="primary" @click="saveLevel(editForm, editId)">提交</el-button>
      </div>
    </el-dialog>

  </section>
</template>

<script>
export default {
  name: 'project-manage',
  data () {
    return {
      list: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      addForm: this.genLevel(),
      addVisible: false,
      editForm: this.genLevel(),
      editVisible: false,
      editId: '',
      detailForm: this.genLevel(),
      detailVisible: false
    }
  },
  methods: {
    getLevel () {
      this.$servers.getProject({
        page: this.currentPage,
        size: this.pageSize
      }).then(data => {
        this.list = data.paging.list;
      }).catch(error => {
        console.log('error', error);
      });
    },
    add () {
      this.addVisible = true;
      this.addForm = this.genLevel();
    },
    detail (level) {
      this.detailVisible = true;
      this.detailForm = this.genLevel(level);
    },
    edit (level) {
      this.editId = level.id;
      this.editVisible = true;
      this.editForm = this.genLevel(level);
    },
    del (id) {
      this.$servers.delProject({ id }).then(() => {
        this.$message.success('删除成功！');
        this.getLevel();
      }).catch(error => {
        this.$message.error('删除失败！');
      });
    },
    genLevel (level = {}, filters = [], required) {
      if (required === undefined) {
        required = ['title', 'remark', 'color'];
      }
      const form = [
        { key: 'title', label: '项目' },
        { key: 'remark', label: '备注' },
        { key: 'color', label: '颜色', inputType: 'color' },
        { key: 'resource', label: '资源', inputType: 'load', action: 'https://jsonplaceholder.typicode.com/posts/' },
      ];
      const list = form.filter(item => !filters.includes(item.key));
      const map = {};
      for (const item of list) {
        const key = map[item.key] || item.key;
        item.value = `${level[key] || ''}`;
        if (item.inputType === 'load') {
          item.value = [];
        }
        if (required.includes(item.key)) {
          item.required = true;
        }
      }
      return list;
    },
    saveLevel (level, id) {
      const map = {};
      for (const item of level) {
        if (item.required && !item.value) {
          this.$message.error(`${item.label}不能为空！`);
          return;
        }
        map[item.key] = item.value;
      }
      const getRgb = color => {
        const reg = /(\d+),/g;
        const list = color.match(reg).map(item => item.replace(',', '')).map(item => (+item).toString(16));
        return list.join('');
      };
      getRgb(map.color);
      const option = {
        title: map['title'],
        remark: map['remark'],
        color: getRgb(map.color)
      };
      if (id) {
        option.id = id;
      }
      this.$servers.saveProject(option).then(data => {
        this.addVisible = this.editVisible = false;
        this.getLevel();
      }).catch(error => {
        this.$message.error(`保存失败，请稍候重试！`);
      });
    }
  },
  mounted () {
    this.getLevel();
  }
};
</script>

<style lang="scss">
  .level-manage {
    padding: 20px;
    .el-pagination {
      display: flex;
      justify-content: center;
      width: calc(100% - 300px);
      margin-top: 20px;
    }
  }
</style>
