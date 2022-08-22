<script setup>
import { computed } from 'vue';
const props = defineProps({
    name: { type: String, default: '' },
    job: { type: String, default: '' },
    picture: { type: String, default: '' },
});

const profilePath = computed(
    () => `${import.meta.env.VITE_API_POSTER_URL}${props.picture}`
)
const firstLettersOfName = props
    .name
    .split(' ') // Bu komut boşluklarla isimleri bölmemize yarıyor. 
    //İsmin her bir kelimesi bir eleman 
    .map((item) => item[0]) // Haritalandırarak item ın ilk hanesine dönücez.
    // Her bir item ı al ve onun first letter ını al . Her döndüğünde elemamlarımızın ilk elemanını alıyor.
    .reduce((acc, item) => acc + item, '') // Boş string ile İlk haneyi topladık ve ilk haneyi yazdırdık. 
    // Accmulator değerine item değerini ekledik.
    // acc = accumulator = toplayıcı
</script>

<template>
    <div class="d-flex align-items-center gap-2">
        <n-avatar
            v-if="props.picture"
            round
            :size="48"
            :src="profilePath"
            object-fit="cover"
        />
        <n-avatar
            v-else
            round
            :size="48"
        >
            {{ firstLettersOfName }}
        </n-avatar>

        <span>
            <div class="fw-bold">{{ props.name }}</div>
            <div class="small text-muted">{{ props.job }}</div>
        </span>
    </div>
</template> 