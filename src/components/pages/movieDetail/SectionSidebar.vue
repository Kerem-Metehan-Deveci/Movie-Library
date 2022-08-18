<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
    image: { type: String, default: null },
    rating: { type: Object, default: () => ({}) },
    genreList: { type: Array, default: () => [] },
});

const ratingList = computed(() => [  //Computed kullanmamızın sebebi bizim datalarımız dinamik olduğu için kontrol etmesi gerekiyor.

    { name: 'Metacritic', value: props.rating.metacritic },
    { name: 'Rotten Tomatoes', value: props.rating.rottenTomatoes },
    { name: 'Film Affinity', value: props.rating.filmAffinity },
    { name: 'imDb', value: props.rating.imDb },
].filter((item) => item.value));
</script>

<template>
    <div>
        <n-image width="100" :img-props="{ class: 'w-100 rounded' }"
            :src="props.image"
        />
    </div>

    <div class="mt-4 d-flex gap-2 flex-wrap">
        <template v-for="(rating) in ratingList" :key="rating.key">
            <n-tag type="success">
                {{ rating.name }} {{ rating.value }} 
            </n-tag>
        </template>
    </div>

    <div class="mt-4 d-flex gap-2 flex-wrap mb-4">
        <template v-for="genre in props.genreList" :key="genre.key">
            <n-tag type="warning">
                {{ genre.value }}
            </n-tag>
        </template>
    </div>
</template>