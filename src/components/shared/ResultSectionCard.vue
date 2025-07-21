<template>
    <section class="result-card-wrapper">
        <div class="result-card-header">
            <div class="header-rating">
                <h5>
                    {{ resultData.name }}
                </h5>
                <div class="rating">
                    <div class="rating-number">
                        <p class="value" :style="{ color: color }">{{ value }}</p>
                        <p class="ten">/10</p>
                    </div>
                    <div class="rating-word" :style="{ backgroundColor: color }">
                        {{ ratingWord }}
                    </div>
                </div>
            </div>
            <ProgressCircle :showValue="resultData.progressCircle.section.showValue"
                :value="resultData.progressCircle.section.value" :size="resultData.progressCircle.section.size" />
        </div>
        <div class="divider"></div>
        <div class="result-card-box">
            <div class="undersection-header">
                <img src="../../assets/icons/bid_landscape.png" alt="Landscape Icon">
                <h6>Analysis</h6>
            </div>
            <p>{{ resultData.analysis }}</p>
        </div>
        <div class="divider"></div>
        <div class="result-card-box">
            <div class="undersection-header">
                <img src="../../assets/icons/table_eye.png" alt="Landscape Icon">
                <h6>Current Impression</h6>
            </div>
            <p>{{ resultData.currentImpression }}</p>
        </div>
        <div class="divider"></div>
        <div class="result-card-box">
            <div class="undersection-header">
                <img src="../../assets/icons/thumb_up.png" alt="Table Eye Icon">
                <h6>Recomandations</h6>
            </div>
            <template v-for="(item, index) in resultData.recommendations" :key="index">
                <div class="recomandation-items">
                    <img src="../../assets/icons/check.png" alt="Checked Icon">
                    <p>{{ item }}</p>
                </div>
            </template>
        </div>
        <div class="divider" v-if="resultData.suggestedImprovements"></div>
        <div class="result-card-box" v-if="resultData.suggestedImprovements">
            <div class="undersection-header">
                <img src="../../assets/icons/chat.png" alt="Thumb Up Icon">
                <h6>Suggested Copy Improvements</h6>
            </div>
            <template v-for="(item, index) in resultData.suggestedImprovements" :key="index">
                <div class="improvment-items">
                    <div class="rectangle"></div>
                    <div class="improvment-text-box">
                        <p>{{ item }}</p>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProgressCircle from './ProgressCircle.vue';
import type { SectionData } from '../../data/dummyBackendData/resultObject';

const props = defineProps<{
    resultData: SectionData;
}>();

const value = props.resultData.progressCircle.section.value;

const color =
    value < 3.3 ? "var(--tyrios-dark-red)" :
        value < 6.6 ? "var(--tyrios-warning-yellow)" :
            "var(--tyrios-strong-green)";

const ratingWord =
    value < 3.3 ? "Poor" :
        value < 6.6 ? "Average" :
            "Good";
</script>

<style lang="scss">
@use '../../styles/mixins' as mixins;

.result-card-wrapper {
    @include mixins.result-card;


    .divider {
        max-width: 840px;
        width: 100%;
        margin: 0 auto;
        border: 1px solid #969A9E
    }

    .result-card-header {
        @include mixins.result-card-box;
        justify-content: space-between;
        flex-direction: row;
    }

    .result-card-box {
        @include mixins.result-card-box;
        justify-content: space-between;

        .improvment-items {
            display: flex;
            width: 100%;
            align-items: center;
        }

        p {
            margin: 0;
            @include mixins.font-style-small;
        }

        .undersection-header {
            display: flex;
            width: 100%;
            gap: 4px;
            align-items: center;

            img {
                width: 24px;
                height: 24px;
            }

            h6 {
                @include mixins.header06;
                text-align: start;
            }
        }

        .recomandation-items {
            display: flex;
            gap: 8px;
            width: 100%;

            img {
                width: 24px;
                height: 24px;
            }

        }
    }

    .rating {
        display: flex;
        gap: 8px
    }

    h5 {
        @include mixins.header05;
    }

    .header-rating {
        display: flex;
        gap: 16px;
        flex-direction: column;
        width: fit-content;
    }

    .rating-word {
        @include mixins.dflex-centered;
        @include mixins.font-style-xsmall;
        font-weight: 400;
        background-color: var(--bgcolor);
        color: var(--tyrios-white);
        width: 67px;
        height: 24px;
        border-radius: 4px;
    }

    .rating-number {
        display: flex;
        width: fit-content;

        .value {
            @include mixins.dflex-centered;
            @include mixins.header05;
            font-weight: 600;
            margin: 0;
            width: 16px;
            height: 32px;
        }

        .ten {
            margin: 0;
            color: var(--tyrios-medium-grey);
            display: flex;
            align-items: flex-end;
        }
    }

    .rectangle {
        width: 6px;
        background: var(--tyrios-purple);
        border-radius: 4px 0 0 4px;
        min-height: 40px;
        height: -webkit-fill-available;
    }

    .improvment-text-box {
        display: flex;
        box-sizing: border-box;
        gap: 4px;
        padding: 8px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        background: #F6F2FF;
        width: 100%;

        p {
            margin: 0;
            width: 100%;

        }

    }
}

@media (max-width: 500px) {
    .result-card-wrapper {
        padding: 12px;
    }
}

@media (max-width: 400px) {
    .result-card-wrapper {
        padding: 4px;
    }
}
</style>