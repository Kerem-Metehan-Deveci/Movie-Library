import { defineStore  } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => ({ 
      theme: 'light',
    }),
    getters: {
      //
    },
    actions: {
      toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light'  : 'dark';
      }
    },
})