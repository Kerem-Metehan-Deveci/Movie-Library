<script setup>
import { ArrowForwardOutline } from '@vicons/ionicons5';
</script>

<template>
<n-card title="Inception">
    <template #cover>
        <img src="https://www.themoviedb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg">
    </template>

    <div class="mb-2">
        <n-tag type="warning">
            Movie
        </n-tag>
    </div>
    A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.

    <template #action>
        <div class="text-end">
            <n-button icon-placement="right">
                <template #icon>
                    <n-icon>
                        <arrow-forward-outline />
                    </n-icon>
                </template>
                Details
            </n-button>
        </div>
    </template>
</n-card>
</template>

<style lang="scss" scoped>

</style>