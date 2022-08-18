<script setup>
import SectionSidebar from "../components/pages/movieDetail/SectionSidebar.vue";
import SectionMain from "@/components/pages/movieDetail/SectionMain.vue";

const genreList = [
    {
        key:"Action",
        value:"Action"
    },
    {
        key:"Adventure",
        value:"Adventure"
    },
    {
        key:"Sci-Fi",
        value:"Sci-Fi"
    }
];
const rating = {
    imDbId:"tt1375666",
    title:"Inception",
    fullTitle:"Inception (2010)",
    type:"Movie",
    year:"2010",
    imDb:"8.8",
    metacritic:"74",
    theMovieDb:"8.4",
    rottenTomatoes:"87",
    filmAffinity:"8.0",
    errorMessage:""
}

const directors = [
    {
        "id": "nm0634240",
        "name":"Christopher Nolan"
    }
];
</script>

<template>
    <div class="movie-detail-page">
        <div class="container vh-100">
        <div class="row gap-3 h-100">
            <div class="col-12 col-md-4 pt-5 px-5 ">
            <section-sidebar
                image="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg"
                :rating="rating"
                :genre-list="genreList"
            />
            </div>

            <div class="col-12 col-md pt-5 text-gray-700">
            <section-main />
            </div>
        </div>
        </div>
    </div>
</template>