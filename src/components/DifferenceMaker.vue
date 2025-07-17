<template>
    <div class="difference-body">
        <div class="header-box">
            <h2>What Makes Our Analysis Different</h2>
            <p>Get manager-focused insights that translate directly into business improvements</p>
        </div>
        <div class="difference-maker-wrapper">
            <div class="difference-box" v-for="item in differenceMaker" :key="item.id">
                <img :src="item.imgUrl" :alt="item.alt" />
                <h6>{{ item.title }}</h6>
                <p>{{ item.subtitle }}</p>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import differenceMaker from '../data/Differencemaker';


</script>

<style lang="scss">
@use "../styles/_mixins.scss" as mixins;

.difference-body {
    @include mixins.dflex-centered;
    flex-direction: column;
    max-width: 1344px;
    margin: 0 auto;
    width: 100%;
    padding: 32px;
    gap: 24px;
    box-sizing: border-box;

    .header-box {
        @include mixins.dflex-centered;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        margin: 0 auto;

        h2 {
            @include mixins.header02;
        }

        p {
            @include mixins.difference-subtitle;
        }

    }

    .difference-maker-wrapper {
        display: flex;
        flex-wrap: wrap;
        /* Erlaubt das Umbrechen */
        justify-content: center;
        /* Zentriert die Boxen */
        gap: 24px;
        width: calc(100% + 64px);
        margin: 0 -32px;
    }

    .difference-box {
        @include mixins.dflex-centered;
        flex-direction: column;
        padding: 16px;
        gap: 8px;
        width: 100%;
        max-width: 318px;
        height: 100%;
        max-height: 220px;
        margin: 0 auto;
        box-sizing: border-box;

        h6 {
            @include mixins.header06;
        }

        p {
            @include mixins.font-style-xsmall;
            text-align: center;
            margin: 0 auto;
        }
    }

}
</style>