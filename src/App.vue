<script setup>
import { NConfigProvider, darkTheme, lightTheme } from 'naive-ui'
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import '@/assets/scss/reset.scss';
import { useMainStore } from '@/stores/mainStore';
import { computed } from 'vue';

const mainStore= useMainStore();

const themes = {
  dark: darkTheme,
  light: lightTheme
};

const theme = computed(() => themes[mainStore.theme])
</script>

<template>
  <n-config-provider :theme="theme">
    <n-layout class="vh-100">
      <default-layout />
    </n-layout>
  </n-config-provider>
</template>
