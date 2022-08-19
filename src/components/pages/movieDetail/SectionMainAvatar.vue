<script setup>
const props = defineProps({
    name: { type: String, default: '' },
});

const nameFinal = ''
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
            class="bg-yellow-500"
            round
            :size="48"
        >
            {{ firstLettersOfName }}
        </n-avatar>

        <span class="fw-bold">
            {{ props.name }}
        </span>
    </div>
</template>