<template>
  <div class="app">
    <router-view/>
    <tab-bar/>
  </div>
</template>

<script setup>

import TabBar from "@/components/toolbar/tab-bar.vue"
import { useRoute } from "vue-router";
const router = useRoute()
</script>
<style scoped>

</style>
