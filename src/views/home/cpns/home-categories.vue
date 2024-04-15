<template>
    <div class="categories">
        <template v-for="(item,index) in categories" :key="item.id">
            <div class="item">
                <img :src="item.pictureUrl"/>
                <div class="title">{{item.title}}</div>
            </div>
        </template>
    </div>
</template>
  
<script setup>
import useHomeStore from '@/stores/modules/home';
import {storeToRefs} from "pinia";
const homeStore = useHomeStore()
const {categories} = storeToRefs(homeStore)
</script>
  
<style>
.categories{
    display: flex;
    overflow-x: auto;
    height: 80px;
    padding: 0 10px;
    margin-top: 8px;
    /* 隐藏横向滚动轴 */
    &::-webkit-scrollbar {
        display: none;
  }
    .item{
        /* flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。 */
        flex-shrink: 0;
        display: flex;
        /* flex-direction 属性指定了内部元素是如何在弹性容器中布局的，定义了主轴的方向（正方向或反方向）。
项目用法（文字在图片下面，使用column布局）：flex-direction：column */
        flex-direction: column;
        align-items: center;
        /* justify-content:属性定义浏览器如何沿着弹性容器的主轴和网格容器的行向轴分配内容元素之间和周围的空间。*/
        justify-content: center;
        width: 70px;
        text-align: center;
        img{
            width: 32px;
            height: 32px;
        }
        .title{
            font-size: 12px;
            margin-top: 8px;
        }
    }
}
</style>
  
  