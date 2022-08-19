<script setup>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';


const route = useRoute();
const errorCode = computed(() => String(route.params.errorCode || '') || '500');
const errorMessage = computed(() => route.params.errorMessage);
const defaultErrorMessage = 'Unexpected error accrued!';
</script>

<template>
   <div id="notfound" class="d-flex flex-column justify-content-center align-items-center">
        <div class="notfound d-flex gap-5 flex-column text-center">
            <div class="notfound-404  mb-5">
                <h1>
                    <span>{{ errorCode[0].trim() }}</span>
                    <span>{{ errorCode[1].trim() }}</span>
                    <span>{{ errorCode[2].trim() }}</span>
    
                </h1>
            </div>

            <div class="mt-5 text-light">
            <p class="fs-3 mb-4">{{ errorMessage|| defaultErrorMessage }}</p>
            <router-link :to="{ name: 'HomePage'} ">
                home page
            </router-link>
        </div>
        </div>
    </div>
</template>

<style lang="scss" >
#notfound {
    position: relative;
    height: 100vh;
    background-color: #222;

    .notfound {
        .notfound-404 {
            height: 158px;
            line-height: 153px;

            h1 {
                font-family: 'Josefin Sans', sans-serif;
                color: #222;
                font-size: 220px;
                letter-spacing: 10px;
                margin: 0px;
                font-weight: 700;
                text-shadow: 2px 2px 0px #c9c9c9, -2px -2px 0px #c9c9c9;

                &>span:nth-child(2) {
                    text-shadow: 2px 2px 0px #ffab00, -2px -2px 0px #ffab00, 0px 0px 8px #ff8700;
                }
            }
        }

        p {
            font-family: 'Josefin Sans', sans-serif;
            color: #c9c9c9;
            font-size: 16px;
            font-weight: 400;
            margin-top: 0px;
            margin-bottom: 15px;
        }

        a {
            font-family: 'Josefin Sans', sans-serif;
            font-size: 14px;
            text-decoration: none;
            text-transform: uppercase;
            background: transparent;
            color: #c9c9c9;
            border: 2px solid #c9c9c9;
            display: inline-block;
            padding: 10px 25px;
            font-weight: 700;
            -webkit-transition: 0.2s all;
            transition: 0.2s all;

            &:hover {
                color: #ffab00;
                border-color: #ffab00;
            }
        }
    }
}

@media only screen and (max-width: 480px) {
  .notfound .notfound-404 {
    height: 122px;
    line-height: 122px;
  }

  .notfound .notfound-404 h1 {
      font-size: 122px;
  }
}
</style>