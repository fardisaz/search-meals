import { defineStore } from "pinia";
import axiosClient from "../axiosClient";
export const useMealSearch = defineStore("mealSearch", {
  state: () => ({
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredients: [],
    loading: false,
  }),
  getters: {},
  actions: {
    async searchMeals(value) {
      axiosClient.get(`search.php?s=${value}`).then(({ data }) => {
        this.searchedMeals = data.meals;
      });
    },
    async searchMealsByLetter(value) {
      axiosClient.get(`search.php?f=${value}`).then(({ data }) => {
        this.mealsByLetter = data.meals;
      });
    },
    async searchMealsByIngredient(value) {
      axiosClient.get(`filter.php?i=${value}`).then(({ data }) => {
        this.mealsByIngredients = data.meals;
      });
    },
  },
});
