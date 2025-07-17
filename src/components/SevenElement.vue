<template>
    <div class="seven-elements-body">
        <div class="elements-header-box">
            <h3>The 7-Element Messaging Framework</h3>
            <p>We analyze your website against these proven elements that make messaging clear, compelling, and conversion-focused</p>
        </div>
        <div class="seven-elements-wrapper">
            <div class="elements-box" v-for="item in sevenElements" :key="item.id">
                <img :src="item.imgUrl" :alt="item.alt" />
                <h6>{{ item.title }}</h6>
                <p>{{ item.subtitle }}</p>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import sevenElements from '../data/SevenElementsList';


</script>

<style lang="scss">
@use "../styles/_mixins.scss" as mixins;

.seven-elements-body {
    @include mixins.dflex-centered;
    flex-direction: column;
    max-width: 1344px;
    margin: 0 auto;
    width: 100%;
    padding: 32px;
    gap: 24px;
    box-sizing: border-box;

    .elements-header-box {
        @include mixins.dflex-centered;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        margin: 0 auto;

        h3 {
            @include mixins.header03;
        }

        p {
            @include mixins.difference-subtitle;
            width: 65%;
        }

    }

    .seven-elements-wrapper {
        display: flex;
        flex-wrap: wrap;
        /* Erlaubt das Umbrechen */
        justify-content: center;
        /* Zentriert die Boxen */
        gap: 24px;
        width: calc(100% + 64px);
        margin: 0 -32px;
    }

    .elements-box {
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