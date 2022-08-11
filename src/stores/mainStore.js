import { darkTheme } from "naive-ui";
import { defineStore  } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => ({ 
      theme: 'dark',
    }),
    getters: {
      //
    },
    actions: {
      toggleTheme() {
        if (this.theme === 'dark' )  {
          this.theme = 'light'
        }
        else{
          this.theme = 'dark'
        }
      }
    },
})