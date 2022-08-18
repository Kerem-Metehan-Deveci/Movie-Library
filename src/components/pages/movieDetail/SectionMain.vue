<script setup>
import SectionMainAvatar from "@/components/pages/movieDetail/SectionMainAvatar.vue";

const sections = ['Directors', 'Writers', 'Stars', 'Company List']
</script>

<template>
    <h1>Inception (2010)</h1>

    <p class="mt-3">
        A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.
    </p>

    <template v-for="section in sections" :key="section">
        <div class="mt-5">
            <h2>{{ section }}</h2>


            <div class="row gap-3 mt-3">
                <div class="col-auto d-flex align-items-center gap-2">
                    <section-main-avatar name="Kerem Metehan Deveci" />
                </div>
            </div>
        </div>
    </template>

    <div class="my-5">
        <h2>Keywords</h2>


        <div class="row gap-3 mt-3">
            <div class="col-auto d-flex align-items-center gap-2">
                <n-tag :bordered="true  " type="info">
                    Keyword 1
                </n-tag>

                <n-tag :bordered="true" type="info">
                    Keyword 2
                </n-tag>

                <n-tag :bordered="true" type="info">
                    Keyword 3
                </n-tag>
            </div>
        </div>
    </div>
</template>
