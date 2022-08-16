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

                const { data } = await api.get(`/Search/${key}/${payload.searchText}`);
            
                this.movies = data.results;
            },
            toggleMovieLoading() {
                this.isMoviesLoading = !this.isMoviesLoading;
            }
        },
    })