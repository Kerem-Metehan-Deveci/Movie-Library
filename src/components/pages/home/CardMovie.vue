<script setup>
import { ArrowForwardOutline } from '@vicons/ionicons5';

const props = defineProps({
    id: { type: String, default: null },
    title: { type: String, default: null },
    image: { type: String, default: null },
    type: { type: String, default: null },
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
                {{ type }}
            </n-tag>
        </div>
        {{ description }}

<template #action>
            <div class="text-end">
                <n-button icon-placement="right">
                    <template #icon>
                        <n-icon>
                            <arrow-forward-outline />
                        </n-icon>
                    </template>
                    Details
                </n-button>
            </div>
        </template>
    </n-card>
</template>