// stores/counter.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({ count: 0 }),
  actions: {
    //
  },
});
