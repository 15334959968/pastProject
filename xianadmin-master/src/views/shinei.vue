<template>
    <div class="dishang-page">

    </div>
</template>
<script>
  import {mapState} from 'vuex';
  import {animatemodel} from  '../three/load';
  export default {
    name:'shinei',
    data () {
      return {
      }
    },
    methods: {
    },
    mounted () {
        this.$parent.checkrotertomodel();
    },
    components: {
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
