<script setup>
import { useMovieStore } from '@/stores/movieStore';
import SectionHero from '@/components/pages/home/SectionHero.vue';
import CardMovie from '@/components/pages/home/CardMovie.vue';

const movieStore = useMovieStore();
</script>

<template>
    <section-hero />

    <div class="section-search-list">
        <div class="container mt-5">
            <h1>Search Results</h1>
            <template v-if="movieStore.isMoviesLoading">
                <div class="row mt-5 g-3">
                    <template v-for="n in 8" :key="n">
                        <div class="col-12 col-md-4 col-lg-3">
                                <n-skeleton height="450px" width="100%" />
                        </div>
                    </template>
                </div>
            </template>
            <template v-else-if="movieStore.haveMovies">
                <div class="row mt-5 g-3">
                    <template v-for="movie in movieStore.movies" :key="movie.id">
                        <div class="col-12 col-md-4 col-lg-3">
                            <card-movie
                                :title="movie.title"
                                :id="movie.id"
                                :description="movie.description"
                                :type="movie.resultType"
                                :image="movie.image"
                            />
                        </div>
                    </template>
                </div>
            </template>
            <template v-else>
                <div class="text-center mt-5 bg-secondary bg-opacity-25 px-3 py-5 rounded">
                    <div class="display-3 fw-medium">
                        Sonuc Bulunamadi!!
                    </div>
                    <div class="fs-3">
                        Lutfen arama yapiniz
                    </div>
                </div>
            </template>
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
