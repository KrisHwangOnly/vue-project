<template>
    <div class="detail top-page" ref="detailRef">
        <tab-control v-if="showTabControl" class="tabs" :title="names" @tabItemClick="tabClick"/>
        <van-nav-bar
        title="房屋详情"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="main" v-if="mainPart" v-memo="[mainPart]">
            <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
            <detail-infos name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule"/>
            <detail-facility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
            <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"/>
        </div>
    </div>
</template>
  
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from '@/services';
import { ref,computed } from 'vue';
import DetailSwipe from "./cpns/detail_01-swipe.vue"
import DetailInfos from './cpns/detail_02-infos.vue'
import DetailFacility from './cpns/detail_03-facility.vue'
import DetailLandlord from './cpns/detail_04-landlord.vue'
import TabControl from "@/components/tab-control/tab-control.vue"
import useScroll from '@/hooks/useScroll'

const router = useRouter()
const route = useRoute()
const houseId = route.params.id

// 发送网络请求获取数据
const detailInfos = ref({})

const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})

const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})

const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  let instance = el.offsetTop
  if (index !== 0) {
    instance = instance - 44
  }

  detailRef.value.scrollTo({
    top: instance,
    behavior: "smooth"
  })
}
// 监听返回按钮的点击
const onClickLeft = () => {
  router.back()
}
const sectionEls = ref({})
const names = computed(() => {
  return Object.keys(sectionEls.value)
})
const getSectionRef = (value) => {
  const name = value.$el.getAttribute("name")
  sectionEls.value[name] = value.$el
}
</script>
  
<style lang='less' scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
  
  