<template>
  <section class="login">
    <div class="logo">logo</div>
    <label :class="['form-item', item.status]" v-for="(item, key) in userInfo" :key="key">
      <i :class="['iconfont', item.icon]"></i>
      <input class="input" :type="item.type || 'text'" v-model="item.value">
      <i :class="['status iconfont', statusIcon(item.status)]"></i>
    </label>
    <button :class="['submit', { enable }]" type="button" @click="login">
      <template v-if="logining">
        登录中 &nbsp;<mu-circular-progress class="demo-circular-progress" :size="20"></mu-circular-progress>
      </template>
      <template v-else> 登 录 </template>
    </button>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'login',
  data () {
    return {
      userInfo: this.$verify({
        username: {
          name: '用户名',
          icon: 'icon-user',
          verCode: 'account'
        },
        password: {
          name: '密码',
          icon: 'icon-password',
          verCode: 'password',
          type: 'password'
        }
      }),
      logining: false
    };
  },
  methods: {
    statusIcon (status) {
      const map = {
        success: 'icon-good',
        error: 'icon-close',
        waiting: 'icon-waiting'
      };
      return map[status] || '';
    },
    login () {
      if (this.logining || !this.enable) {
        return;
      }
      this.logining = true;
      this.$services.common.login({
        username: this.userInfo.username,
        password: this.userInfo.password
      }).then(data => {
        sessionStorage.token = data.token;
        this.setUser(data);
        this.$router.replace(sessionStorage.loginToPage || '/user');
      }).catch(error => {
        console.log('登录失败，请重新登录！', error);
      }).finally(() => {
        this.logining = false;
      });
    },
    ...mapActions('user', ['setUser'])
  },
  computed: {
    enable () {
      return Object.values(this.userInfo).every(item => item.verify());
    },
    ...mapGetters('user', ['user'])
  }
};
</script>

<style lang="scss">
  @import '../../assets/style/var.scss';
  @import '../../assets/style/include.scss';
  $item-width: 80%;

  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: $base-bgc;
    .logo {
      width: 100px;
      height: 100px;
      margin-bottom: 60px;
      border: 1px solid;
      border-radius: 50%;
      @include fz(20);
      text-align: center;
      line-height: 100px;
      color: $font-color1;
      transform: translateY(-10px);
    }
    .form-item {
      display: flex;
      width: $item-width;
      height: 40px;
      border-bottom: 1px solid #4e5f73;
      & + .form-item {
        margin-top: 20px;
      }
      .input {
        flex: 1;
        margin: 0 10px;
        border: none;
        @include fz(16);
        color: $font-color1;
        background: transparent;
      }
      .iconfont {
        @include fz(24);
        line-height: 40px;
        color: #969fae;
      }
      .status {
        visibility: hidden;
      }
      &.success .status {
        visibility: visible;
        color: $success-color;
      }
      &.error .status {
        visibility: visible;
        color: $danger-color;
      }
      &.waiting .status {
        visibility: visible;
        color: $warning-color;
        animation: rotation360 1s linear infinite;
      }
    }
    .submit {
      display: flex;
      justify-content: center;
      align-items: center;
      width: $item-width;
      height: 48px;
      margin-top: 40px;
      border: none;
      border-radius: 3px;
      @include fz(22);
      color: $font-color1;
      background: #909399;
      &.enable {
        background: #39daf7;
      }
      .mu-circle-spinner {
        border-color: inherit;
      }
    }
    .vux-spinner {
      color: $font-color1;
      stroke: $font-color1;
      fill: $font-color1;
    }
  }
</style>
