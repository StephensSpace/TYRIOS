<template>
    <section class="summary-wrapper">
        <h5>Executive Summary</h5>
        <p>{{ summaryText.executiveSummary }}</p>
        <div class="score-rows">
            <!-- v-for direkt über scoreOverview -->
            <div v-for="(item, key, index) in scoreOverview" :key="key" class="score-item">
                <ProgressCircle :show-value="item.progressCircle.overview.showValue"
                    :size="item.progressCircle.overview.size" :value="item.progressCircle.overview.value" />
                <p>{{ item.name }}</p>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import ProgressCircle from './ProgressCircle.vue';
import type { SectionData, ScoreData } from '../../data/dummyBackendData/resultObject';

const props = defineProps<{
    summaryText: ScoreData;
    scoreOverview: { [key: string]: SectionData };
}>();
</script>

<style lang="scss">
@use '../../styles/mixins' as mixins;

.summary-wrapper {
    @include mixins.result-card;

    h5 {
        @include mixins.header05;
    }

    p {
        @include mixins.font-style-small;
        margin: 0;
        text-align: start;

    }

    .score-rows {
        display: flex;
        gap: 24px;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;

        .score-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            max-width: 260px;
            width: 100%;
            white-space: nowrap;
        }
    }
}
</style>