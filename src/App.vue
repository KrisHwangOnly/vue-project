<template>
  <div class="app">
    <router-view/>
    <tab-bar/>
    <loading />
  </div>
</template>

<script setup>

import TabBar from "@/components/toolbar/tab-bar.vue"
import { useRoute } from "vue-router";
import Loading from '@/components/loading/loading.vue'
const router = useRoute()
</script>
<style scoped>

</style>
