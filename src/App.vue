<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar is-fixed v-model="selected">
      <mt-tab-item id="home" @click.native="$router.push('/home')">
        <i class="iconfont icon-waimai" slot="icon"></i> 首页
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
    methods: {

    }
  }
</script>
