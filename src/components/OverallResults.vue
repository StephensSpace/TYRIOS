<template>
    <section class="overall-result-wrapper">
        <div class="left-side-result">
            <div class="header-btn-box">
                <p>
                    Overall Result
                </p>
                <h4>
                    Analysis Complete
                </h4>
            </div>
            <div class="header-btn-box">
                <button class="pro-support-btn" @click="emit('open-overlay', 'support')">
                    <img src="../assets/icons/person.png" alt="Proffesional Help Icon">
                    Get proffesional support
                </button>
                <button class="share-btn" @click="emit('open-overlay', 'share')">
                    <img src="../assets/icons/share.png" alt="Share Icon">
                    Share
                </button>

            </div>
        </div>

        <div class="right-side-data">
            <div class="url-date-box">
                <div class="url-box">
                    <img src="../assets/icons/globe.png" alt="Globe icon">
                    <p>URL: <a href="https://frontendschaz.de">
                            frontendschaz.de
                        </a>
                    </p>
                </div>
                <div class="date-box">
                    <img src="../assets/icons/calendar.png" alt="Calendar icon">
                    <p>
                        Analysis Date: 19 July 2025
                    </p>
                </div>
            </div>
            <div class="circle-rating-box">
                <div class="rating-number-label">
                    <div class="number-box">
                        <p class="value" :style="{ color: color }">{{ value }}</p>
                        <p class="ten">/10</p>
                    </div>
                    <div class="rating-label" :style="{ backgroundColor: color }">
                        {{ ratingWord }}
                    </div>
                </div>
                <ProgressCircle :show-value="scoreData.progressCircle.showValue" :size="scoreData.progressCircle.size"
                    :value="scoreData.progressCircle.value" />

            </div>
        </div>

    </section>

</template>

<script setup lang="ts">
import ProgressCircle from './shared/ProgressCircle.vue';
import type { ScoreData } from '../data/dummyBackendData/resultObject';


const props = defineProps<{
    scoreData: ScoreData;
}>();

const value = props.scoreData.progressCircle.value;

const color =
    value < 3.3 ? "var(--tyrios-dark-red)" :
        value < 6.6 ? "var(--tyrios-warning-yellow)" :
            "var(--tyrios-strong-green)";

const ratingWord =
    value < 3.3 ? "Poor" :
        value < 6.6 ? "Average" :
            "Good";

const emit = defineEmits<{
    (e: 'open-overlay', type: 'support' | 'share'): void
}>();

</script>

<style lang="scss">
@use '../styles/mixins' as mixins;

.overall-result-wrapper {
    display: flex;
    gap: 24px;
    padding: 24px;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--tyrios-medium-purple);

    .left-side-result {
        @include mixins.result-left-right-box;

        .header-btn-box {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 16px;

            .pro-support-btn {
                @include mixins.form-button;
            }

            .share-btn {
                @include mixins.form-button;
                background-color: unset;
                border: 1px solid var(--tyrios-dark-grey);
                width: 100%;
                color: var(--tyrios-dark-grey);
            }

            h4 {
                @include mixins.header04;
            }

            p {
                @include mixins.font-style-medium;
                margin: 0;
                font-weight: 500;
            }
        }

    }

    .right-side-data {
        @include mixins.result-left-right-box;
        background: var(--tyrios-white);
        border-radius: 8px;
        padding: 16px;
        box-sizing: border-box;

        .circle-rating-box {
            display: flex;
            width: 100%;
            gap: 24px;
        }

        .rating-number-label {
            display: flex;
            flex-direction: column;
            max-width: 67px;
            width: 100%;
            gap: 4px;
            align-items: flex-end;
        }

        .number-box {
            display: flex;

            .value {
                @include mixins.dflex-centered;
                @include mixins.header02;
                font-weight: 600;
                margin: 0;
                height: 48px;
            }

            .ten {
                @include mixins.font-style-medium;
                margin: 0;
                color: var(--tyrios-medium-grey);
                display: flex;
                align-items: flex-end;
            }

        }



        .url-date-box {
            display: flex;
            flex-direction: column;
            gap: 16px;

            img {
                width: 24px;
                height: 24px;
            }

            .url-box {
                display: flex;
                gap: 8px;

                p {
                    margin: 0;
                    font-weight: 500;

                    a {
                        @include mixins.font-style-small;
                        font-weight: 400;
                        color: var(--tyrios-purple);
                    }
                }

            }

            .date-box {
                display: flex;
                gap: 8px;

                img {
                    width: 24px;
                    height: 24px;
                }

                p {
                    margin: 0;
                    font-weight: 500;

                }

            }
        }
    }
}

@media (max-width: 420px) {
    .overall-result-wrapper {
        padding: 8px;
        gap: 4px !important;

        .right-side-data {
            padding: 4px !important;

        }
    }
}

@media (max-width: 340px) {
    .overall-result-wrapper {
        padding: 6px;
        gap: 2px !important;

        .right-side-data {
            padding: 3px !important;

        }
    }
}
</style>