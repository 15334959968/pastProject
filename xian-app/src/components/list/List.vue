<template>
  <section id="container" class="v-list">
    <xa-header hide-back :title="title">
      <i class="iconfont icon-more" slot="right"></i>
    </xa-header>
  </section>
</template>

<script>
export default {
  name: 'v-list',
  data () {
    return {
      title: '功能列表'
    };
  }
};
</script>

<style lang="scss">
  @import '../../assets/style/var.scss';
  @import '../../assets/style/include.scss';

  .v-list {
    width: 100%;
    height: 100vh;
    background: $common-bgc;
  }
</style>
