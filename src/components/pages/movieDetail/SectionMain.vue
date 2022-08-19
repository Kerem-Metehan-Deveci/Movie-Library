<script setup>
import SectionMainAvatar from "@/components/pages/movieDetail/SectionMainAvatar.vue";

const props = defineProps({
    title: { type: String, default: null },
    plot: { type: String, default: null },
    directors: { type: Array, default: () => [] },
    writers: { type: Array, default: () => [] },
    stars: { type: Array, default: () => [] },
    companies: { type: Array, default: () => [] },
    keywords: { type: Array, default: () => [] },
});

const sections = [
    {
        name: 'Directors',
        list: props.directors,
    },
    {
        name: 'Writers',
        list: props.writers,
    },
    {
        name: 'Stars',
        list: props.stars,
    },
    {
        name: 'Companies',
        list: props.companies,
    },
];
</script>

<template>
    <h1>
        {{ props.title }}
    </h1>

    <p class="mt-3">
        {{ props.plot }}
    </p>
        <!--İç içe iki tane v for dönüyoruz-->
    <template v-for="section in sections" :key="section.name">
        <div class="mt-5">
            <h2>{{ section.name }}</h2>

            <div class="row gap-3 mt-3">
                <div class="col-auto d-flex align-items-center gap-2 gap-md-4">
                    <section-main-avatar
                        v-for="name in section.list" :key="name.id"
                        :name="name.name"
                    />
                </div>
            </div>
        </div>
    </template>

    <div class="my-5">
        <h2>Keywords</h2>

        <div class="row gap-3 mt-3">
            <div class="col-auto d-flex align-items-center gap-2">
                <template v-for="keyword in props.keywords" :key="keyword">
                    <n-tag class="text-capitalize" :bordered="false" type="info">
                        {{ keyword }}
                    </n-tag>
                </template>
            </div>
        </div>
    </div>
</template>