<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
    image: { type: String, default: null },
    rating: { type: Number, default: 0 },
    genreList: { type: Array, default: () => [] },
});
</script>

<template>
    <div>
        <n-image width="100" :img-props="{ class: 'w-100 rounded' }"
            :src="props.image"
        />
    </div>

    <div class="mt-4 d-flex gap-2 flex-wrap">
        <n-tag type="success">
            Rating {{ props.rating }} 
        </n-tag>
    </div>

    <div class="mt-4 d-flex gap-2 flex-wrap mb-4">
        <template v-for="genre in props.genreList" :key="genre.id">
            <n-tag type="warning">
                {{ genre.name }}
            </n-tag>
        </template>
    </div>
</template>