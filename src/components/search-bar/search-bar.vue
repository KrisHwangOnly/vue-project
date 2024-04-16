<template>
    <div class="search">
        <div class="select-time">
            <div class="item start">
                <div class="name">住</div>
                <div class="date">{{ startDateStr }}</div>
            </div>
            <div class="item end">
                <div class="name">离</div>
                <div class="date">{{ endDateStr }}</div>
            </div>
        </div>
        <div class="content">
            <div class="keyword">关键字/位置/民宿</div>
        </div>
        <div class="right">
            <i class="icon-search"></i>
        </div>
    </div>
</template>
  
<script setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { formatMonthDay } from '@/utils/format_date';
import useMainStore from '@/stores/modules/main';
const mainStore = useMainStore()
const {startDate,endDate} = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value,"MM.DD"))
const endDateStr = computed(() => formatMonthDay(endDate.value,"MM.DD"))
</script>
  
<style lang='less' scoped>
.search{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    font-size: 14px;
    color: #999;
    border-radius: 6px;
    background: #f2f4f6;
    .select-time{
        display: flex;
        flex-direction: column;
        .item{
            display: flex;
            flex-direction: row;
            align-items: center;
            line-height: normal;
            font-size: 10px;
        }
        .name{
            font-size: 10px;
        }
        .date{
            position: relative;
            color:#333;
            margin:0 10px 3px;
            font-weight: 500;
        }
    }
    .end .date{

    }
    .content{
        position: relative;
        flex: 1;
        padding: 0 6px;
        text-align: left;
        border-left: 1px solid #fff;
    }
    .keyword{
        max-width: 155px;
        font-size: 12px;
    }
    .icon-search{
        width: 24px;
        height: 24px;
        display: inline-block;
        background-image: url(../../assets/img/home/home-sprite.png);
        background-position: -29px -147px;
        background-size: 207px 192px;
    }
}
</style>
  
  