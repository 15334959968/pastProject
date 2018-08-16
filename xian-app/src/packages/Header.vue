<template>
  <section class="v-header">
    <div class="left">
      <slot name="left">
        <i class="iconfont icon-back" v-if="!hideBack" @click="back"></i>
      </slot>
    </div>
    <div class="header-title">
      <slot>{{title}}</slot>
    </div>
    <div class="right">
      <slot name="right">
        <i class="iconfont icon-more" v-if="showMore" @click="$emit('more')"></i>
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'v-header',
  props: {
    hideBack: {
      type: Boolean
    },
    backRoute: {
      type: [String, Function]
    },
    showMore: {
      type: Boolean
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    back () {
      if (typeof this.backRoute === 'string') {
        this.$router.replace(this.backRoute);
      } else if (typeof this.backRoute === 'function') {
        this.backRoute(this.$route);
      } else {
        this.$router.go(-1);
      }
    }
  },
  mounted () {
    this.$parent.$el.classList.add('header-pt');
  },
  beforeDestroy () {
    this.$parent.$el.classList.remove('header-pt');
  }
};
</script>

<style lang="scss">
  @import '../assets/style/var.scss';
  @import '../assets/style/include.scss';

  .v-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $header-height;
    padding: 0 $wrapper-padding;
    background: linear-gradient(to right, $base-bgc, $base-bgc2);
    .iconfont,
    .header-title {
      @include fz(16);
      color: $font-color1;
    }
    .left,
    .right {
      min-width: 16px;
    }
  }
  .header-pt {
    padding-top: $header-height;
  }
</style>
