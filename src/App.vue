<template>
  <div id="app">
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="mintui mintui-back"></i>
    </router-link>
    <router-view></router-view>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="home" @click.native="$router.push('/home')">
        <img slot="icon" src="./assets/100x100.png"> 首页
      </mt-tab-item>
      <mt-tab-item id="data" @click.native="$router.push('/data')">
        <img slot="icon" src="./assets/100x100.png"> 数据
      </mt-tab-item>
      <mt-tab-item id="account" @click.native="$router.push('/account')">
        <img slot="icon" src="./assets/100x100.png"> 我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        selected: 'data'
      }
    },
    computed: {
      visible () {
        return ['/', '/header', '/search'].indexOf(this.$route.path) < 0
      }
    }
  }
</script>
<style>
  @reset-global mobile;
  html,
  body {
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }

  a {
    color: inherit;
  }

  .page-back {
    display: inline-block;
    position: absolute 12px * * 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    i {
      font-size: 24px;
      line-height: 40px;
    }
  }
</style>
