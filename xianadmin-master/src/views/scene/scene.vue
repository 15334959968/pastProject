<template>
    <div class="page-padding">
        <el-tabs v-model="sactiveName" @tab-click="handleClick">
            <el-tab-pane label="进度计划记录" name="proplan">
                <proplan></proplan>
            </el-tab-pane>
            <el-tab-pane label="进度计划视频" name="vide">
                <svides></svides>
            </el-tab-pane>
            <el-tab-pane label="进度计划状态" name="progress">
                <vprogress></vprogress>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import  svides  from "./svides";
    import  proplan  from "./proplan";
    import  vprogress  from "./vprogress";
    export default {
        name:"scene",
        data () {
            return {
                sactiveName: 'proplan'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        mounted () {
        },
        components: {
            'svides':svides,
            'proplan':proplan,
             'vprogress':vprogress,
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
 
  .el-main{
      padding-top: 0px;
      padding-left: 0px;
  }
</style>