import { defineStore } from "pinia";
import axiosClient from "../axiosClient";
export const useMealSearch = defineStore("mealSearch", {
  state: () => ({
    searchedMeals: [],
    loading: false,
  }),
  getters: {},
  actions: {
    async searchMeals(value) {
      axiosClient.get(`search.php?s=${value}`).then(({ data }) => {
        debugger;
        this.searchedMeals = data.meals;
      });
    },
  },
});
