<template>
    <div class="page-padding">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="问题协同" name="first">
                <problemList></problemList>
            </el-tab-pane>
            <el-tab-pane label="问题讨论" name="second">
                <problemDiscussion></problemDiscussion>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import  problemDiscussion  from "./problem/problemDiscussion";
    import  problemList  from "./problem/problemList";
    export default {
        name:"problem",
        data () {
            return {
                activeName: 'first'
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
            'problemDiscussion':problemDiscussion,
            'problemList':problemList,

        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>