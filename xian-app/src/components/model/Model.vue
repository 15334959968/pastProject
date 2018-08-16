<template>
  <section id="container" class="model">
    <xa-header hide-back :title="title">
      <i class="iconfont icon-more" slot="right" @click="modelShow = !modelShow"></i>
    </xa-header>
    <transition
        :css="false"
        @before-enter="$ani.slide.be"
        @enter="$ani.slide.e"
        @leave="$ani.slide.l">
      <div class="sel-model" v-show="modelShow">
        <div class="left">
          <div
              :class="['model-item', { active: key === modelKey }]"
              :key="key"
              v-for="(item, key) in modelList"
              @click="modelKey = key">
            {{item.name}}
          </div>
        </div>
        <div class="right">
          <div
              class="model-list"
              :key="key"
              v-for="(item, key) in modelList"
              @click="modelKey = key">
            <h3 class="title">{{item.name}}</h3>
            <span class="list-item" :key="index" v-for="(sub, index) of item.list">{{sub.name}}</span>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
const modelList = {
  home: {
    name: '首页',
    list: [
      { name: '首页', code: 'homepage' }
    ]
  },
  outground: {
    name: '地下单体',
    list: [
      { name: 'G', code: 'g' },
      { name: 'N', code: 'n' }
    ]
  },
  cicycle: {
    name: '环形通道',
    list: [
      { name: '环形通道', code: 'cicycle' }
    ]
  },
  energy: {
    name: '能源中心',
    list: [
      { name: '能源中心', code: 'energy' }
    ]
  },
  municipal: {
    name: '市政管廊',
    list: [
      { name: '市政', code: 'municipal' },
      { name: '管廊', code: 'tunnel' }
    ]
  },
  overground: {
    name: '地上',
    list: [
      { name: '游族大厦', code: 'yoozoo' },
      { name: '上海梦中心', code: 'dreamCenter' },
      { name: '腾讯大厦', code: 'tencent' },
      { name: '湘芒果文化', code: 'mangoo' },
      { name: '络布置业', code: 'luobu' }
    ]
  },
  floor2: {
    name: '二层平面',
    list: [
      { name: '二层平面', code: 'floor2' }
    ]
  }
};

export default {
  name: 'model',
  data () {
    return {
      title: '模型选择',
      modelList,
      modelKey: 'home',
      modelShow: false
    };
  }
};
</script>

<style lang="scss">
  @import '../../assets/style/var.scss';
  @import '../../assets/style/include.scss';

  .model {
    width: 100%;
    height: 100vh;
    background: $common-bgc;
    .sel-model {
      position: absolute;
      display: flex;
      width: 100%;
      height: calc(100% - #{$header-height} - #{$footer-height});
      background: #eee;
      .left {
        overflow: auto;
        width: 88px;
      }
      .right {
        overflow: auto;
        flex: 1;
        background: #fff;
      }
    }
    .model-item {
      display: flex;
      align-items: center;
      min-height: 48px;
      padding: 5px;
      &.active {
        background: #fff;
      }
    }
    .model-list {
      padding-left: 20px;
      .title {
        height: 30px;
        line-height: 30px;
        @include fz(12);
        color: $font-dashed;
        transform: translateX(-10px);
      }
      .list-item {
        display: inline-block;
        margin-right: 12px;
        margin-bottom: 6px;
        padding: 4px 12px;
        border: 1px solid $font-dashed;
        border-radius: 20px;
        @include fz(14);
      }
      & + .model-list {
        margin-top: 120px;
      }
    }
  }
</style>
