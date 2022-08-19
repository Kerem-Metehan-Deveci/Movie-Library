<script setup>
import SectionSidebar from "../components/pages/movieDetail/SectionSidebar.vue";
import SectionMain from "@/components/pages/movieDetail/SectionMain.vue";
import { useMovieStore } from "@/stores/movieStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
    id: { type: String, default: null },
})
const movieStore = useMovieStore();
const router = useRouter();

const movie = ref({});
const isMovieLoading = ref(false);

const init = async () => {
  try {
    if(props.id) { // Router da id tanımlıyoruz.
        isMovieLoading.value = true; // Bu id varsa loding true oluyor.
        movie.value = await movieStore.fetchMovie({
            id: props.id,
            // İd ile birlikte movie yi çekiyoruz.
        });

        if(movie.value.errorMessage) {
            await router.push({
                name: 'ErrorPage',
                params: {
                    errorMessage: movie.value.errorMessage,
                    errorCode: 400
                },
            });
        }
    } else {
        await router.push({
            name: 'ErrorPage',
            params: {
                errorMessage: 'Movie not found!',
                errorCode: 404
                // id yoksa 404 sayfasına gidiyor.
            },
        });
    }
  } catch(e) {
        router.push({
            name: 'ErrorPage',
        });
  } finally {
    isMovieLoading.value = false;
  }
};

init();
</script>

<template>
  <div class="movie-detail-page">
    <div class="container vh-100">
      <template v-if="isMovieLoading">
        <div class="d-flex justify-content-center align-items-center h-100">
            <span class="back">
                <span v-for="item in 'LOADING'" :key="item">
                    {{ item }}
                </span>
            </span>
        </div>
      </template>
      <template v-else>
        <div class="row gap-3 h-100">
            <div class="col-12 col-md-4 pt-5 px-5 bg-gray-200">
                <section-sidebar
                    :image="movie.image"
                    :rating="movie.ratings"
                    :genre-list="movie.genreList"
                />
            </div>

            <div class="col-12 col-md pt-5 text-gray-700">
                <section-main
                    :title="movie.fullTitle"
                    :plot="movie.plot"
                    :directors="movie.directorList"
                    :writers="movie.writerList"
                    :stars="movie.starList"
                    :companies="movie.companyList"
                    :keywords="movie.keywordList"
                />
            </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
	.back {
        span {
            font-size:3em;
            color:#F2C640;
            background:#262B37;
            display:table-cell;
            box-shadow:inset 0 0 5px rgba(0,0,0,0.3), 0 5px 0 #ccc;
            padding: 0 15px;
            line-height: 100px;
            animation:jumb 2s infinite;

            &:nth-child(1) {
                animation-delay: 0s;
            }

            &:nth-child(2) {
                animation-delay: .1s;
            }

            &:nth-child(3) {
                animation-delay: .2s;
            }

            &:nth-child(4) {
                animation-delay: .3s;
            }

            &:nth-child(5) {
                animation-delay: .4s;
            }

            &:nth-child(6) {
                animation-delay: .5s;
            }

            &:nth-child(7) {
                animation-delay: .6s;
            }
        }
	}

	@keyframes jumb {
		0% {
			transform:translateY(0px)
		}
		50% {
			transform:translateY(-30px);
			box-shadow:0 15px 0 rgb(242, 198, 64);
		}
		100% {
			transform:translateY(0px)	
		}
	}
</style>