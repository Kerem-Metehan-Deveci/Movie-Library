<script setup>
import { SearchOutline, MoonOutline, SunnyOutline } from '@vicons/ionicons5';
import { computed, ref } from 'vue';
import { useMainStore } from '@/stores/mainStore';

const mainStore = useMainStore();

const themeIcon = computed(
    () => {
        if (mainStore.theme === 'dark') {
            return SunnyOutline;
        } else {
            return MoonOutline
        }
    }
)
const sectionSearchBg = computed(() => `url(${import.meta.env.VITE_SEARCH_BACKGROUND})`);
const searchText = ref('');
</script>

<template>
    <div class="section-hero">
        <div class="w-50 mb-5 d-flex align-items-center gap-2">
            <n-input
                v-model:value="searchText"
                round
                placeholder="Search..."
                size="large"
                type="text"
            >
                <template #suffix>
                    <n-icon :component="SearchOutline" />
                </template>
            </n-input>
            
            <n-button
                tertiary
                circle
                type="primary"
                size="large"
                @click="mainStore.toggleTheme"
            >
                <template #icon>
                    <n-icon :component="themeIcon" />
                </template>
            </n-button>
        </div>
    </div>
</template>

<style lang="scss">
    .section-hero {
        height: 500px;
        background-color: rgba(0, 128, 0, 0.12);
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: flex-end;

    &:after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: v-bind(sectionSearchBg);
        background-position: center center;
        background-size: cover;
    }
}
</style>