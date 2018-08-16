<template>
    <div class="page-padding">

        <vinformation></vinformation>
    </div>
</template>

<script>
    import  vclassification  from "../components/vclassification";
    import  vinformation  from "../components/vinformation";
    export default {
        name:"management",
        data () {
            return {
            }
        },
        methods: {

        },
        mounted () {
        },
        components: {
        'vinformation':vinformation,
        // 'vclassification':vclassification,

        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>