<template>
  <div id="home">
    <mt-swipe :auto="4000" style="height: 300px; width:100%;">
      <mt-swipe-item class="slide1" :to="{name:'detail'}">

      </mt-swipe-item>
      <mt-swipe-item class="slide2">
        <p>2</p>
      </mt-swipe-item>
      <mt-swipe-item class="slide3">
        <p>3</p>
      </mt-swipe-item>
    </mt-swipe>

    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        a
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        b
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        c
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {
    Swipe,
    SwipeItem,
    Navbar,
    TabItem
  } from 'mint-ui'

  Vue.component(Navbar.name, Navbar)
  Vue.component(TabItem.name, TabItem)
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)

  export default {
    //
    data: function () {
      return {
        selected: '1'
      }
    }
  }

</script>

<style>
  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }

  .slide2 {
    background-color: #ffd705;
    color: #000;
  }

  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }

</style>
