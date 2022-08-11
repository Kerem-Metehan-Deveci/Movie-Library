<script setup>
import SectionHero from '../components/pages/home/SectionHero.vue';
import CardMovie from './CardMovie.vue';
</script>

<template>
    <section-hero />

    <div class="section-search-list">
        <div class="container mt-5">
            <h1>Search Results</h1>
            <div class="row mt-5 g-3">
                <template v-for="n in 12" :key="n">
                    <div class="col-12 col-md-4 col-lg-3">
                        <card-movie />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.section-search-list {
    padding: 1rem;
    display: flex;
    align-items: center;
    margin: auto;
}
</style>
