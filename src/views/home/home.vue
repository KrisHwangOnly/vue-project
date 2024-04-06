
<template>
    <div class="home">
        <home-nav-bar/>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp"/>
        </div>
        <home-search-box />
    </div>
  </template>
  <script setup>
  import homeNavBar from './cpns/home-nav-bar.vue';
  import homeSearchBox from './cpns/home-search-box.vue';
  import useHomeStore from '@/stores/modules/home';
// 尽量不要在小组件发送网络请求，发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
  </script>
  
  <style lang="less">
    .banner{
        img{
            width: 100%;
        }
    }
  </style>
  