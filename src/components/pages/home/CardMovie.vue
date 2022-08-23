<script setup>
import { ArrowForwardOutline } from '@vicons/ionicons5';

const props = defineProps({
    id: { type: String, default: null },
    title: { type: String, default: null },
    image: { type: String, default: null },
    rating: { type: String, default: null },
    description: { type: String, default: null },
});
</script>

<template>
    <n-card :title="title" class="h-100">
        <template #cover>
            <img :src="image" height="450">
        </template>

        <div class="mb-4">
            <n-tag type="warning">
                {{ rating }}
            </n-tag>
        </div>
        {{ description }}

        <template #action>
            <div class="text-end">
                <router-link class="text-decoration-none" :to="{name: 'MovieDetailPage', params: {id: props.id} }">
                    <n-button icon-placement="right" type="warning" ghost>
                        <template #icon>
                            <n-icon>
                                <arrow-forward-outline />
                            </n-icon>
                        </template>
                        Details 
                    </n-button>
                </router-link> 
            </div>
        </template>
    </n-card>
</template>