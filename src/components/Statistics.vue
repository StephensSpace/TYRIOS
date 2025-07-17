<template>
    <div class="statistics-body">
        <div class="stats-header-box">
            <h2>Most Websites Confuse Instead of Convert</h2>
            <p>Your website has 7 seconds to grab attention. Here's why most fail and how our analysis fixes it.</p>
        </div>
        <div class="statistics-wrapper">
            <div class="statistics-box" v-for="item in statisticList" :key="item.id">
                <h3>{{ item.title }}</h3>
                <p>{{ item.subtitle }}</p>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import statisticList from '../data/StatisticsData';


</script>

<style lang="scss">
@use "../styles/_mixins.scss" as mixins;

.statistics-body {
    @include mixins.dflex-centered;
    flex-direction: column;
    max-width: 1344px;
    margin: 0 auto;
    width: 100%;
    padding: 32px;
    gap: 24px;
    box-sizing: border-box;

    .stats-header-box {
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

    .statistics-wrapper {
        display: flex;
        flex-wrap: wrap;
        /* Erlaubt das Umbrechen */
        justify-content: center;
        /* Zentriert die Boxen */
        gap: 24px;
        width: calc(100% + 64px);
        margin: 0 -32px;
    }

    .statistics-box {
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

        h3 {
            @include mixins.header03;
            font-weight: 600;
            color: var(--tyrios-purple);
        }

        p {
            @include mixins.font-style-xsmall;
            text-align: center;
            margin: 0 auto;
        }
    }

}
</style>