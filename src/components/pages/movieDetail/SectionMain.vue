<script setup>
import SectionMainAvatar from "@/components/pages/movieDetail/SectionMainAvatar.vue";

const props = defineProps({
    title: { type: String, default: null },
    plot: { type: String, default: null },
    crew: { type: Array, default: () => [] },
    cast: { type: Array, default: () => [] },
    keywords: { type: Array, default: () => [] },
});

const sections = [
    {
        name: 'Cast',
        list: props.cast,
    },
    {
        name: 'Crew',
        list: props.crew,
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

            <div class="row mt-3">
                <template v-for="item in section.list" :key="item.id">
                    <div class="col-12 col-md-3 g-4 d-flex flex-wrap align-items-center gap-2 gap-md-4">
                        <section-main-avatar
                            :name="item.name"
                            :picture="item.profile_path"
                            :job="item.job || item.character"
                        />
                    </div>
                </template>
            </div>
        </div>
    </template>

    <div class="my-5">
        <h2>Keywords</h2>

        <div class="row gap-3 mt-3">
            <div class="col-auto d-flex flex-wrap align-items-center gap-2">
                <template v-for="keyword in props.keywords" :key="keyword">
                    <n-tag class="text-capitalize" :bordered="false" type="info">
                        {{ keyword }}
                    </n-tag>
                </template>
            </div>
        </div>
    </div>
</template>