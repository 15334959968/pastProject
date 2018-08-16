<template>
  <section class="home">
    <xa-header hide-back :title="title">
      <i class="iconfont icon-more" slot="right"></i>
    </xa-header>
  </section>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: '西岸工程'
    };
  }
};
</script>

<style lang="scss">
  @import '../../assets/style/var.scss';
  @import '../../assets/style/include.scss';

  .home {
    width: 100%;
    height: 100vh;
    background: $common-bgc;
  }
</style>
