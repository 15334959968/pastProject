<template>
  <section class="footer" v-if="show">
    <router-link
        class="item"
        tag="div"
        :key="index"
        :to="item.route"
        v-for="(item, index) in list">
      <i :class="['iconfont', item.icon]"></i>
      {{item.name}}
    </router-link>
  </section>
</template>

<script>
const list = [
  {
    name: '首页',
    icon: 'icon-home',
    route: '/home'
  },
  {
    name: '列表',
    icon: 'icon-list',
    route: '/list'
  },
  {
    name: '模型',
    icon: 'icon-model',
    route: '/model'
  },
  {
    name: '我的',
    icon: 'icon-person',
    route: '/user'
  }
];

export default {
  name: 'vFooter',
  data () {
    return {
      show: true,
      list
    };
  },
  methods: {
    toggle (route) {
      this.show = !route.meta.noFooter;
    }
  },
  watch: {
    $route (newval) {
      this.toggle(newval);
    }
  },
  mounted () {
    this.toggle(this.$route);
  }
};
</script>

<style lang="scss">
  @import '../../assets/style/var.scss';
  @import '../../assets/style/include.scss';

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 8;
    display: flex;
    align-items: stretch;
    height: $footer-height;
    background: #fff;
    box-shadow: 0 2px 5px 1px #000;
    & + section {
      padding-bottom: $footer-height;
    }
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: $font-color2;
      text-align: center;
      cursor: pointer;
      &.active {
        color: $font-active;
      }
    }
    .iconfont {
      margin-bottom: 5px;
      @include fz(20);
    }
  }
</style>
