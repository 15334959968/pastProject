<template>
  <section class="user" @scroll="scroll">
    <xa-header>
      <span :style="{ opacity }">{{user.name}}，{{Date.now() | greetings}}</span>
      <i class="iconfont icon-setting" slot="left"></i>
      <i class="iconfont icon-message" slot="right"></i>
    </xa-header>

    <div class="user-info" ref="info">
      <div class="info">
        <div :class="['portrait', user.sex ? 'boy' : 'girl']"></div>
        <div class="user-msg">
          <h3 class="name">{{user.name}}</h3>
          <div class="item">{{user.level}}</div>
        </div>
      </div>
    </div>

    <div class="user-wrapper">
      <h3 class="title">
        我的问题
        <router-link to="/user" class="more">全部 <i class="iconfont icon-back"></i></router-link>
      </h3>
      <ul class="items icon-items">
        <li class="item" :key="index" v-for="(item, index) in problemTool">
          <i :class="['iconfont', item.icon]"></i>
          {{item.name}}
          <mu-badge
              :content="`${problemNumber[item.code]}`"
              circle color="#f74c31"
              v-if="item.code && problemNumber[item.code]">
          </mu-badge>
        </li>
      </ul>
    </div>

    <div class="user-wrapper">
      <h3 class="title">
        管理列表
        <router-link to="/user" class="more">全部 <i class="iconfont icon-back"></i></router-link>
      </h3>
      <ul class="items list-items">
        <li class="item" :key="index" v-for="(item, index) in manageList">
          <i :class="['iconfont', item.icon]"></i>
          {{item.name}}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
const problemTool = [
  {
    name: '去提问',
    icon: 'icon-write',
    route: '/user'
  },
  {
    name: '待处理',
    icon: 'icon-sandtimer',
    route: '/user',
    code: 'waiting'
  },
  {
    name: '处理中',
    icon: 'icon-doing',
    route: '/user',
    code: 'doing'
  },
  {
    name: '待评价',
    icon: 'icon-comment',
    route: '/user',
    code: 'comment'
  }
];
const manageList = [
  {
    name: '资料管理',
    icon: 'icon-info',
    route: '/user'
  },
  {
    name: '任务管理',
    icon: 'icon-mask',
    route: '/user'
  },
  {
    name: '现场管理',
    icon: 'icon-scene',
    route: '/user'
  },
  {
    name: '计划管理',
    icon: 'icon-plan',
    route: '/user'
  },
  {
    name: '会议管理',
    icon: 'icon-meeting',
    route: '/user'
  },
  {
    name: '系统管理',
    icon: 'icon-tool',
    route: '/user'
  },
  {
    name: '操作帮助',
    icon: 'icon-help',
    route: '/user'
  }
];

export default {
  name: 'user',
  data () {
    return {
      problemTool,
      manageList,
      problemNumber: {},
      opacity: 0
    };
  },
  methods: {
    getProblemNumber (code) {
      this.$services.problem.getProblemNumber({ code }).then(data => {
        console.log(data);
        this.problemNumber = data;
      }).catch(error => {
        console.log('getProblemNumber error', error);
      });
    },
    scroll (el, ...args) {
      const height = this.$refs.info.clientHeight;
      const sTop = el.target.scrollTop;
      if (height) {
        this.opacity = Math.max(0, Math.min(1, (sTop * 2 - height) / height));
      }
    }
  },
  computed: {
    ...mapGetters('user', ['user'])
  },
  mounted () {
    this.getProblemNumber();
  }
};
</script>

<style lang="scss">
  @import '../../assets/style/var.scss';
  @import '../../assets/style/include.scss';
  $infoc1: #fddd62;
  $infoc2: #ffe479;
  $bdc: #ddd;

  .user {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    background: $common-bgc;
    .user-info {
      padding: $wrapper-padding;
      padding-top: 4px;
      background: linear-gradient(to right, $base-bgc, $base-bgc2);
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;
      border-radius: 4px;
      background: linear-gradient(36deg, $infoc1, $infoc2 30%, $infoc1 33%, $infoc2 62%, $infoc1 70%, $infoc2);
      .portrait {
        width: 90px;
        height: 90px;
        border: 3px solid gold;
        border-radius: 50%;
        background: url('/static/images/boy.png') no-repeat center;
        background-size: contain;
        &.girl {
          background-image: url('/static/images/girl.png');
        }
      }
    }
    .user-msg {
      margin-right: 20px;
      text-align: center;
      color: $font-color2;
      .name {
        @include fz(18);
      }
      .item {
        margin-top: 8px;
        color: $font-dashed;
        @include fz(12);
      }
    }
    .user-wrapper {
      padding: $wrapper-padding;
      background: #fff;
      & + .user-wrapper {
        margin-top: 12px;
      }
      .title {
        display: flex;
        justify-content: space-between;
        @include fz(14);
      }
      .more {
        color: $font-dashed;
        @include fz(12);
        .iconfont {
          vertical-align: 1px;
          @include fz(12);
        }
      }
    }
    .items {
      display: flex;
      margin-top: 20px;
      .item {
        position: relative;
        flex: 1;
      }
    }
    .icon-items {
      .item {
        display: flex;
        flex-direction: column;
        text-align: center;
        @include fz(12);
        & + .item {
          border-left: 1px solid #e8e8e8;
        }
      }
      .iconfont {
        margin-bottom: 10px;
        color: $font-active;
        @include fz(20);
      }
      .mu-badge-container {
        position: absolute;
        top: -8px;
        right: 8px;
      }
      .mu-badge-circle {
        width: 0.44rem;
        height: 0.44rem;
      }
    }
    .list-items {
      flex-direction: column;
      .item {
        height: 36px;
        padding: 0 10px;
        border-top: 1px dashed $bdc;
        line-height: 36px;
        &:nth-last-child(1) {
          border-bottom: 1px dashed $bdc;
        }
        &::after {
          position: absolute;
          right: 10px;
          content: '\e679';
          font-family: 'iconfont';
          font-style: normal;
          color: $font-dashed;
          transform: rotate(180deg);
        }
      }
      .iconfont {
        vertical-align: -2px;
        margin-right: 8px;
      }
    }
  }
</style>
