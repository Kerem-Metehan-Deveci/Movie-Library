import { api } from "@/plugins/axios";
import { defineStore  } from "pinia";

export const useMovieStore = defineStore('movie', {
    state: () => ({ 
      movies: [],
      isMoviesLoading: false,
    }),
    getters: {
      haveMovies() {
        return Boolean(this.movies.length);
      }
    },
    actions: {
      async fetchMovies(payload) {
        const key = import.meta.env.VITE_API_KEY;

        const { data } = await api.get('/search/movie/', {
          params: {
            query: payload.searchText
          }
        });

        if(data.errorMessage) {
          throw new Error(data.errorMessage)
        }
        
        this.movies = data.results.map((item) => ({
          id: item.id,
          plot: item.overview,
          title: item.original_title,
          image: `${import.meta.env.VITE_API_POSTER_URL}${item.poster_path}`,
          rating: item.vote_average,
        }));
      },
      toggleMovieLoading() {
        this.isMoviesLoading = !this.isMoviesLoading;
      },
      async fetchMovie(payload) {
        const key = import.meta.env.VITE_API_KEY;

        const promises = [
          api.get(`/movie/${payload.id}`),
          api.get(`/movie/${payload.id}/credits`),
          api.get(`/movie/${payload.id}/keywords`)
        ]

        const [
          { data: detailData },
          { data: creditData },
          { data: keywordData },
        ] = await Promise.all(promises);

        return {
          fullTitle: detailData.original_title,
          plot: detailData.overview,
          image: `${import.meta.env.VITE_API_POSTER_URL}${detailData.poster_path}`,
          rating: detailData.vote_average,
          genreList: detailData.genres,
          crewList: creditData.crew.filter((item, index) => index < 20),
          castList: creditData.cast.filter((item, index) => index < 20),
          keywordList: keywordData.keywords.map((item) => item.name),
        };
      },
    },
})