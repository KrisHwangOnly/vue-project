
<template>
    <div class="home">
        <home-nav-bar/>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp"/>
        </div>
        <home-search-box />
        <home-categories />
        <div class="search-bar" v-if="isShowSearchBar">
          <search-bar :start-date="'09.19'" :end-date="'09.20'"/>
        </div>
        <home-content />
    </div>
  </template>
<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue';
import useHomeStore from '@/stores/modules/home';
import SearchBar from '@/components/search-bar/search-bar.vue'
import useScroll from '@/hooks/useScroll';
import { computed, watch } from 'vue';
// 尽量不要在小组件发送网络请求，发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategories()
homeStore.fetchHouseList()
// const moreBtnClick = () => {
//   console.log("加载更多数据")
//   homeStore.fetchHouseList()
// }
const {isReachBottom,scrollTop} = useScroll()
watch(isReachBottom,(newValue) => {
  if(newValue){
    // then回调
    homeStore.fetchHouseList().then(() => {
      isReachBottom.value = false
    })
  }
})
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})
</script>
  
<style lang="less">
  .banner{
      img{
          width: 100%;
      }
  }
  .search-bar{
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
</style>
  