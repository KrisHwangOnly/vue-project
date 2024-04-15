import { getHomeHotSuggests,getHomeCategories,getHouseList } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList:[],
    currentPage:1
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategories(){
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseList(){
      const res = await getHouseList(this.currentPage)
      this.houseList.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore

